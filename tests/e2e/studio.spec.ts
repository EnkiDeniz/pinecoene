import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  page.on("pageerror", (error) => console.error("BROWSER_PAGE_ERROR", error.message));
  page.on("console", (message) => {
    if (message.type() === "error") console.error("BROWSER_CONSOLE_ERROR", message.text());
  });
});

test("gateway makes Studio primary and distinguishes Offering", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name:/A work that remembers/i })).toBeVisible();
  await expect(page.getByRole("link", { name:/Enter the Studio/i })).toBeVisible();
  await expect(page.getByRole("link", { name:/Open an Offering/i }).last()).toBeVisible();
  await expect(page.getByText(/6 SEALED · 1 OPEN/i)).toBeVisible();
});

test("canonical shelf presents two materially different immutable specimens", async ({ page }) => {
  await page.goto("/studio");
  await expect(page.getByRole("heading", { name:"Genesis" })).toBeVisible();
  await expect(page.getByRole("heading", { name:"This Chat" })).toBeVisible();
  await expect(page.getByText("nested tetrahedron")).toBeVisible();
  await expect(page.getByText("phase membranes")).toBeVisible();
  await expect(page.getByText(/Canonical fixtures never mutate/i)).toBeVisible();
});

test("full local journey reaches successor lineage", async ({ page }) => {
  await page.goto("/studio/pcn-0002");
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
  const witness = page.getByRole("link", { name:/Open exact Witness/i });
  await expect(witness).toBeVisible();
  await witness.click();

  await page.getByRole("button", { name:/Open the Locket/i }).click();
  await page.getByRole("button", { name:/Skip to the settled Encounter/i }).click();
  await expect(page.getByRole("heading", { name:/R5 · Form/i })).toBeVisible();
  await page.getByRole("textbox", { name:/Your exact words/i }).fill("The open phase gave me somewhere honest to return.");
  await page.getByRole("button", { name:/Fold this Return locally/i }).click();
  await expect(page.getByText(/RETURN FOLDED LOCALLY/i)).toBeVisible();
  await page.getByRole("link", { name:/Review in owner Studio/i }).click();

  await page.getByRole("tab", { name:"Returns" }).click();
  await expect(page.getByText(/The open phase gave me somewhere honest/i)).toBeVisible();
  await page.getByRole("button", { name:/Dock to successor/i }).click();
  await page.getByRole("tab", { name:"Lineage" }).click();
  await expect(page.getByText(/07 · SUCCESSOR/i)).toBeVisible();
});

test("Vital Sign is explicitly experimental and never claims a live model", async ({ page }) => {
  await page.goto("/vital-sign");
  await expect(page.getByRole("heading", { name:"Vital Sign" })).toBeVisible();
  await expect(page.getByText(/EXPERIMENT · NOT A CLAIM/i)).toBeVisible();
  await expect(page.getByText(/No live model is present/i)).toBeVisible();
  await page.getByRole("button", { name:/Return/i }).click();
  await expect(page.getByText(/Return is foregrounded/i)).toBeVisible();
});

test("390 × 844 layouts keep all primary routes inside the viewport", async ({ page }) => {
  await page.setViewportSize({ width:390, height:844 });
  for (const route of ["/", "/studio", "/make", "/studio/pcn-0001", "/w/pcn-0002", "/vital-sign"]) {
    await page.goto(route);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow, `${route} horizontal overflow`).toBeLessThanOrEqual(1);
  }
});

test("every route is noindex and robots denies crawling", async ({ page, request }) => {
  for (const route of ["/", "/studio", "/make", "/studio/pcn-0002", "/w/pcn-0002", "/vital-sign"]) {
    await page.goto(route);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex.*nofollow/i);
  }
  const robots = await request.get("/robots.txt");
  expect(await robots.text()).toContain("Disallow: /");
});
