import { test } from "@playwright/test";

test("capture Curated Studio design evidence", async ({ page }) => {
  await page.setViewportSize({ width:1600, height:945 });
  await page.goto("/");
  await page.locator('[data-form-ready="true"]').waitFor();
  await page.waitForTimeout(700);
  await page.screenshot({ path:"evidence/qa/curated-studio-v1-gateway-desktop.png", fullPage:true });

  await page.setViewportSize({ width:1920, height:1311 });
  await page.goto("/studio/pcn-0002");
  await page.locator('[data-form-ready="true"]').waitFor();
  await page.getByRole("tab", { name:"Record" }).click();
  await page.waitForTimeout(700);
  await page.screenshot({ path:"evidence/qa/curated-studio-v1-record-desktop.png" });

  await page.getByRole("tab", { name:"Becoming" }).click();
  await page.getByRole("button", { name:"04" }).first().click();
  await page.waitForTimeout(300);
  await page.screenshot({ path:"evidence/qa/curated-studio-v1-becoming-desktop.png" });

  await page.getByRole("tab", { name:"Offering" }).click();
  await page.waitForTimeout(300);
  await page.screenshot({ path:"evidence/qa/curated-studio-v1-offering-desktop.png" });

  await page.setViewportSize({ width:390, height:844 });
  await page.goto("/studio/pcn-0001");
  await page.locator('[data-form-ready="true"]').waitFor();
  await page.getByRole("tab", { name:"Record" }).click();
  await page.waitForTimeout(500);
  await page.screenshot({ path:"evidence/qa/curated-studio-v1-record-mobile.png" });
});
