import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().min(1).default("postgresql://placeholder"),
  AUTH_SECRET: z.string().min(1).optional(),
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development")
});

export const env = envSchema.parse({
  DATABASE_URL: process.env.DATABASE_URL ?? "postgresql://placeholder",
  AUTH_SECRET: process.env.AUTH_SECRET,
  NODE_ENV: process.env.NODE_ENV
});
