import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import test from "node:test";

const requiredFiles = [
  "package.json",
  "tsconfig.json",
  "next.config.ts",
  "src/app/layout.tsx",
  "src/app/page.tsx",
  "src/app/api/health/route.ts",
  "src/components/app-shell.tsx",
  "src/server/db.ts",
  "prisma/schema.prisma"
];

test("foundation files exist", () => {
  for (const file of requiredFiles) {
    assert.equal(existsSync(file), true, `${file} should exist`);
  }
});

test("prisma schema includes the phase-1 foundation models", () => {
  const schema = readFileSync("prisma/schema.prisma", "utf8");

  for (const modelName of [
    "Company",
    "Contact",
    "Lead",
    "Opportunity",
    "FollowUp",
    "Quotation",
    "Contract",
    "Project"
  ]) {
    assert.match(schema, new RegExp(`model ${modelName} \\{`));
  }
});

test("verify script runs the expected bootstrap checks", () => {
  const packageJson = JSON.parse(readFileSync("package.json", "utf8"));
  assert.equal(
    packageJson.scripts.verify,
    "npm run typecheck && npm run db:validate && npm run test:foundation && npm run build"
  );
});
