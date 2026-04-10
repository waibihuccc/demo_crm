import { NextResponse } from "next/server";

import { siteConfig } from "@/config/site";
import { env } from "@/lib/env";

export function GET() {
  return NextResponse.json({
    status: "ok",
    app: siteConfig.name,
    environment: env.NODE_ENV,
    databaseConfigured: Boolean(env.DATABASE_URL)
  });
}
