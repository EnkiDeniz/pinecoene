import { test } from "@playwright/test";

test("capture public site and Sketches design evidence", async ({ page }) => {
  await page.setViewportSize({ width:1440, height:900 });
  await page.goto("/");
  await page.screenshot({ path:"evidence/qa/public-site-v02-bet-desktop.png", fullPage:true });

  await page.goto("/science");
  await page.screenshot({ path:"evidence/qa/public-site-v02-science-desktop.png", fullPage:true });

  await page.goto("/sketches");
  await page.locator('[data-form-ready="true"]').first().waitFor();
  await page.screenshot({ path:"evidence/qa/public-site-v02-sketches-desktop.png", fullPage:true });

  await page.setViewportSize({ width:1920, height:1311 });
  await page.goto("/sketches/pcn-0002");
  await page.locator('[data-form-ready="true"]').waitFor();
  await page.getByRole("tab", { name:"Record" }).click();
  await page.waitForTimeout(700);
  await page.screenshot({ path:"evidence/qa/public-site-v02-record-desktop.png" });

  await page.getByRole("tab", { name:"Becoming" }).click();
  await page.getByRole("button", { name:"04" }).first().click();
  await page.waitForTimeout(300);
  await page.screenshot({ path:"evidence/qa/public-site-v02-becoming-desktop.png" });

  await page.getByRole("tab", { name:"Offering" }).click();
  await page.waitForTimeout(300);
  await page.screenshot({ path:"evidence/qa/public-site-v02-offering-desktop.png" });

  await page.setViewportSize({ width:390, height:844 });
  await page.goto("/");
  await page.screenshot({ path:"evidence/qa/public-site-v02-bet-mobile.png", fullPage:true });

  await page.goto("/sketches");
  await page.locator('[data-form-ready="true"]').first().waitFor();
  await page.screenshot({ path:"evidence/qa/public-site-v02-sketches-mobile.png", fullPage:true });

  await page.goto("/sketches/pcn-0001");
  await page.locator('[data-form-ready="true"]').waitFor();
  await page.getByRole("tab", { name:"Record" }).click();
  await page.waitForTimeout(500);
  await page.screenshot({ path:"evidence/qa/public-site-v02-record-mobile.png" });
});
