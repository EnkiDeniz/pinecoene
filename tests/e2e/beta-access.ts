import { expect, type Page } from "@playwright/test";

export const betaKey = process.env.PINECOENE_BETA_KEY ?? "pinecoene-local-test-key";

export async function unlockBeta(page: Page) {
  const response = await page.request.post("/api/beta/unlock", { data: { code: betaKey } });
  expect(response.ok()).toBe(true);
}
