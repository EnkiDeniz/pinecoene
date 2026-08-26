import { expect, test } from "@playwright/test";

test("flagship opens and exposes the semantic anatomy", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: /I have been thinking about you/i }),
  ).toBeVisible();
  await page
    .locator('.flagshipLocket[data-locket-ready="true"]')
    .waitFor({ state: "visible" });
  await page.getByRole("button", { name: /Open the Locket/i }).click();
  await page.getByRole("button", { name: /Skip to the settled form/i }).click();
  await expect(page.getByRole("heading", { name: /One seam stays open/i })).toBeVisible();
  await page.getByRole("button", { name: /The unresolved seam/i }).click();
  await expect(page.getByText(/refuses to counterfeit an ending/i)).toBeVisible();
});

test("maker compiles a browser-local recipient-safe preview", async ({ page }) => {
  await page.goto("/make");
  await page.getByRole("button", { name: /Use a sample record/i }).click();
  await page.getByRole("button", { name: /Read the record/i }).click();
  await page.getByRole("button", { name: /Admit events and relations/i }).click();
  await page.getByRole("button", { name: /Continue to expression/i }).click();
  await page.getByRole("button", { name: /Compile the Pinecœne/i }).click();
  await expect(page.getByRole("heading", { name: /The question that remained/i })).toBeVisible();
  await expect(page.getByText(/Created and kept in this browser/i)).toBeVisible();
});

test("mobile flagship has no horizontal overflow", async ({ page }) => {
  await page.goto("/");
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
  );
  expect(overflow).toBeLessThanOrEqual(1);
});
