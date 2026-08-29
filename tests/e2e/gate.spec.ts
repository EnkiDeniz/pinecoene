import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { betaKey } from "./beta-access";

const demonstrationOfferingId = "package-pcn-demo-fourth-point-team_wide";

test("keeps every product and machine-readable route closed until unlock", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });

  for (const route of ["/", "/demo", "/sketches", "/demo/w/demo-wide", "/sitemap.xml"]) {
    const response = await page.goto(route);
    expect(response?.status(), route).toBe(200);
    expect(response?.headers()["cache-control"], route).toContain("no-store");
    expect(response?.headers()["x-robots-tag"], route).toContain("noindex");
    await expect(page.getByRole("heading", { name: /Pinecœne:/ })).toBeVisible();
    await expect(page.getByText("Prototype Instrument", { exact: true })).toHaveCount(0);
  }

  const offering = await page.request.get(`/api/demo/offerings/${demonstrationOfferingId}`);
  expect(offering.status()).toBe(401);
  expect(await offering.json()).toMatchObject({ code: "BETA_ACCESS_REQUIRED" });
});

test("rejects an invalid key, accepts the beta key, and sets a protected cookie", async ({ page, context }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "[Open private beta]", exact: true }).click();

  const input = page.getByLabel("beta key");
  await expect(input).toHaveAttribute("type", "text");
  await input.fill("not-the-key");
  await page.getByRole("button", { name: "enter", exact: true }).click();
  await expect(page.locator(".beta-gate__error")).toHaveText("That key did not open this instrument.");

  await input.fill(betaKey);
  await page.getByRole("button", { name: "enter", exact: true }).click();
  await expect(page).toHaveURL(/\/$/);
  await expect(page.getByRole("heading", { name: /shape of a thought/i })).toBeVisible();

  const cookie = (await context.cookies()).find((candidate) => candidate.name === "pinecoene-beta-access");
  expect(cookie).toMatchObject({ httpOnly: true, sameSite: "Lax" });

  const offering = await page.request.get(`/api/demo/offerings/${demonstrationOfferingId}`);
  expect(offering.ok()).toBe(true);
});

test("keeps the gate responsive and free of serious accessibility violations", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");

  const hasOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
  );
  expect(hasOverflow).toBe(false);

  const results = await new AxeBuilder({ page }).analyze();
  const blocking = results.violations.filter((violation) =>
    ["serious", "critical"].includes(violation.impact ?? ""),
  );
  expect(blocking.map((violation) => violation.id)).toEqual([]);
});
