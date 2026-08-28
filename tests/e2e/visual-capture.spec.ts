import { mkdir } from "node:fs/promises";
import { expect, test, type Page } from "@playwright/test";

const output = "output/playwright/public-door-v02";

async function capture(page: Page, name: string, viewport: { width:number; height:number }, action?:() => Promise<void>) {
  await page.setViewportSize(viewport);
  if (action) await action();
  await page.waitForTimeout(250);
  await page.screenshot({ path:`${output}/${name}.png`, fullPage:false });
}

test("freeze the five browser-native keyframe pairs", async ({ page }) => {
  await mkdir(output, { recursive:true });
  const desktop = { width:1440, height:900 };
  const mobile = { width:390, height:844 };

  await page.goto("/");
  await expect(page.locator('[data-form-ready="true"]')).toBeVisible();
  await page.waitForTimeout(1600);
  await capture(page,"01-door-object-desktop",desktop);
  await capture(page,"01-door-object-mobile",mobile);
  await capture(page,"01-door-invitation-desktop",desktop,async()=>{await page.locator(".doorInvitation").scrollIntoViewIfNeeded();await page.evaluate(()=>scrollBy(0,-74));});
  await capture(page,"01-door-invitation-mobile",mobile,async()=>{await page.locator(".doorInvitation").scrollIntoViewIfNeeded();await page.evaluate(()=>scrollBy(0,-58));});

  await page.goto("/works");
  await capture(page,"02-works-desktop",desktop);
  await capture(page,"02-works-mobile",mobile);
  await page.goto("/works/genesis");
  await expect(page.locator('[data-form-ready="true"]')).toBeVisible();
  await capture(page,"02-genesis-desktop",desktop);
  await capture(page,"02-genesis-mobile",mobile);

  await page.goto("/works/genesis?view=becoming");
  await page.getByRole("button",{name:"04",exact:true}).click();
  await page.evaluate(()=>scrollTo(0,0));
  await capture(page,"03-becoming-desktop",desktop);
  await capture(page,"03-becoming-mobile",mobile);

  await page.goto("/studio/specimens/pcn-0001");
  await expect(page.locator('[data-form-ready="true"]')).toBeVisible();
  await capture(page,"04-studio-desktop",desktop);
  await capture(page,"04-studio-mobile",mobile);
  await page.getByRole("tab",{name:"Offering"}).click();
  await page.getByRole("button",{name:/R5 Recital/}).click();
  await capture(page,"04-offering-desktop",desktop);
  await capture(page,"04-offering-mobile",mobile);

  await page.goto("/w/genesis-demonstration");
  await expect(page.getByRole("button",{name:"Open demonstration"})).toBeVisible();
  await capture(page,"05-locket-desktop",desktop);
  await capture(page,"05-locket-mobile",mobile);
  await page.getByRole("button",{name:"Open demonstration"}).click();
  await page.getByRole("button",{name:"Skip to the settled Encounter"}).click();
  await capture(page,"05-encounter-desktop",desktop);
  await capture(page,"05-encounter-mobile",mobile,async()=>page.locator(".recipientReturn").scrollIntoViewIfNeeded());
});
