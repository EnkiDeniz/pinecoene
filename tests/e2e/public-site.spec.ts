import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { unlockBeta } from "./beta-access";

test.beforeEach(async ({ page }) => {
  await unlockBeta(page);
  page.on("pageerror", (error) => console.error("BROWSER_PAGE_ERROR", error.message));
  page.on("console", (message) => { if (message.type() === "error") console.error("BROWSER_CONSOLE_ERROR", message.text()); });
});

test("The Bet explains the wager before the object", async ({ page }) => {
  await page.goto("/");
  const hero = page.locator(".publicHero");
  await expect(hero.getByRole("heading", { name:/shape of a thought/i })).toBeVisible();
  await expect(hero.getByText(/Not a mind scan/i)).toBeVisible();
  await expect(hero.locator("[data-form-ready]")) .toHaveCount(0);
  await expect(page.getByRole("heading", { name:/keep the answer and discard/i })).toBeVisible();
  await expect(page.getByRole("heading", { name:/Completion can arrive without standing/i })).toBeVisible();
  await expect(page.getByRole("heading", { name:/Pinecœne is a receipt-bound format/i })).toBeVisible();
  await expect(page.getByRole("heading", { name:/Pinecœne must name the result/i })).toBeVisible();
  await expect(page.getByRole("heading", { name:/A sketch. Not the theorem/i })).toBeVisible();
});

test("Science separates neighboring evidence from Pinecœne claims", async ({ page }) => {
  await page.goto("/science");
  await expect(page.getByRole("heading", { name:"What would have to be true?" })).toBeVisible();
  await expect(page.getByText(/A citation does not upgrade/i)).toBeVisible();
  await expect(page.getByText(/WHAT THE SCIENCE DOES NOT ESTABLISH/i)).toBeVisible();
  await expect(page.getByRole("heading", { name:/Receipts for the neighboring work/i })).toBeVisible();
  await expect(page.getByRole("link", { name:/Open source/i })).toHaveCount(7);
});

test("Sketches show two fixtures and an honest missing test", async ({ page }) => {
  await page.goto("/sketches");
  await expect(page.getByRole("heading", { name:"Genesis" })).toBeVisible();
  await expect(page.getByRole("heading", { name:"This Chat" })).toBeVisible();
  await expect(page.getByRole("heading", { name:"The Thin Fold" })).toBeVisible();
  await expect(page.getByText(/OWED · NO RESULT/i)).toBeVisible();
  await expect(page.getByText(/arbitrary source readings/i)).toBeVisible();
});

test("instrument starts with the Trail and identifies fixture compilation", async ({ page }) => {
  await page.goto("/sketches/pcn-0002");
  await expect(page.getByRole("tab", { name:"Record" })).toHaveAttribute("aria-selected", "true");
  await expect(page.getByText(/START WITH THE TRAIL/i)).toBeVisible();
  await expect(page.getByText("Geometry compiled from this fixture.", { exact:true })).toBeVisible();
  await expect(page.getByText(/does not claim arbitrary source reading/i)).toBeVisible();
});

test("full local journey reaches successor lineage", async ({ page }) => {
  await page.goto("/sketches/pcn-0002");
  await page.getByRole("tab", { name:"Admission" }).click();
  const phaseFive = page.locator(".decisionRow").filter({ hasText:"c05" });
  await phaseFive.getByRole("button", { name:"Rewrite" }).click();
  await phaseFive.getByRole("textbox").fill("A second specimen makes causal difference visible");
  await page.getByRole("tab", { name:"Recognition" }).click();
  const teamMuse = page.locator(".museRow").filter({ hasText:"Team feedback session" });
  await teamMuse.getByRole("button", { name:/Acknowledge/i }).click();
  await page.getByRole("tab", { name:"Becoming" }).click();
  await page.getByRole("button", { name:"07" }).first().click();
  await expect(page.getByText(/The record is still being written/i).first()).toBeVisible();
  await page.getByRole("tab", { name:"Offering" }).click();
  await page.getByRole("button", { name:/R5 Open/i }).click();
  await page.getByRole("button", { name:/Prepare R5 Offering locally/i }).click();
  await page.getByRole("link", { name:/Open exact Witness/i }).click();
  await page.getByRole("button", { name:/Open the Locket/i }).click();
  await page.getByRole("button", { name:/Skip to the settled Encounter/i }).click();
  await expect(page.getByText(/Locket = permission vessel/i)).toHaveCount(0);
  await page.getByRole("textbox", { name:/Your exact words/i }).fill("The open phase gave me somewhere honest to return.");
  await page.getByRole("button", { name:/Fold this Return locally/i }).click();
  await page.getByRole("link", { name:/Review in owner sketch/i }).click();
  await page.getByRole("tab", { name:"Returns" }).click();
  await expect(page.getByText(/The open phase gave me somewhere honest/i)).toBeVisible();
  await page.getByRole("button", { name:/Dock to successor/i }).click();
  await page.getByRole("tab", { name:"Lineage" }).click();
  await expect(page.getByText(/07 · SUCCESSOR/i)).toBeVisible();
});

test("Vital Sign remains a separate experimental profile", async ({ page }) => {
  await page.goto("/sketches/vital-sign");
  await expect(page.getByRole("heading", { name:"Vital Sign" })).toBeVisible();
  await expect(page.getByText(/EXPERIMENT · NOT A CLAIM/i)).toBeVisible();
  await expect(page.getByText(/No live model is present/i)).toBeVisible();
  await page.getByRole("button", { name:/Return/i }).click();
  await expect(page.getByText(/Return is foregrounded/i)).toBeVisible();
});

test("legacy routes issue exact permanent redirects", async ({ request }) => {
  const cases = [["/studio", "/sketches"], ["/studio/pcn-0001", "/sketches/pcn-0001"], ["/make?fixture=pcn-0002", "/use?fixture=pcn-0002"], ["/vital-sign", "/sketches/vital-sign"]];
  for (const [source, destination] of cases) {
    const response = await request.get(source, { maxRedirects:0 });
    expect(response.status(), source).toBe(301);
    expect(new URL(response.headers().location ?? "", "http://localhost:3000").pathname + new URL(response.headers().location ?? "", "http://localhost:3000").search).toBe(destination);
  }
});

test("private beta indexing is consistently closed", async ({ page, request }) => {
  for (const route of ["/", "/approach", "/science", "/sketches", "/use"]) {
    const response = await page.goto(route);
    expect(response?.headers()["cache-control"], route).toContain("no-store");
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex.*nofollow/i);
  }
  for (const route of ["/master", "/theorem", "/sketches/pcn-0001", "/w/pcn-0002", "/sketches/vital-sign"]) {
    const response = await page.goto(route);
    expect(response?.headers()["x-robots-tag"], route).toContain("noindex");
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex.*nofollow/i);
  }
  const robots = await (await request.get("/robots.txt")).text();
  expect(robots).toContain("Disallow: /");
});

test("candidate documents cannot impersonate canonical sources", async ({ page }) => {
  for (const route of ["/master", "/theorem"]) {
    await page.goto(route);
    await expect(page.getByText(/PROPOSAL-DERIVED EXCERPT · CANDIDATE · NON-CANONICAL · UNSEALED/i)).toBeVisible();
    await expect(page.getByText(/exact .* document is absent/i)).toBeVisible();
  }
});

test("public reading routes have no serious accessibility violations", async ({ page }) => {
  for (const route of ["/", "/approach", "/science", "/sketches", "/use"]) {
    await page.goto(route);
    const result = await new AxeBuilder({ page }).analyze();
    expect(result.violations.filter((item) => item.impact === "serious" || item.impact === "critical"), route).toEqual([]);
  }
});

test("390 × 844 layouts keep all primary routes inside the viewport", async ({ page }) => {
  await page.setViewportSize({ width:390, height:844 });
  for (const route of ["/", "/approach", "/science", "/sketches", "/use", "/sketches/pcn-0001", "/w/pcn-0002", "/sketches/vital-sign"]) {
    await page.goto(route);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow, `${route} horizontal overflow`).toBeLessThanOrEqual(1);
  }
});
