import { defineConfig, devices } from "@playwright/test";

const betaKey = process.env.PINECOENE_BETA_KEY ?? "pinecoene-local-test-key";
const betaSecret = process.env.PINECOENE_BETA_SECRET ?? "pinecoene-local-test-signing-secret";

export default defineConfig({
  testDir: "./tests/e2e",
  outputDir: "test-results",
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL ?? "http://localhost:3000",
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },
  webServer: process.env.PLAYWRIGHT_BASE_URL
    ? undefined
    : {
        command: "pnpm start",
        url: "http://localhost:3000",
        reuseExistingServer: true,
        env: {
          ...process.env,
          BETA_ACCESS_PASSWORD: betaKey,
          BETA_ACCESS_SECRET: betaSecret,
          BETA_ACCESS_VERSION: "pinecoene-local-gate-v1",
        },
      },
  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "webkit", use: { ...devices["Desktop Safari"] } },
    { name: "mobile-webkit", use: { ...devices["iPhone 13"] } },
  ],
});
