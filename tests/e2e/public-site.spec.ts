import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";

async function expectNoHorizontalOverflow(page: Page) {
  const dimensions = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
    offenders:[...document.querySelectorAll<HTMLElement>("body *")].map((element) => ({ tag:element.tagName.toLowerCase(), className:element.className, right:Math.round(element.getBoundingClientRect().right), width:Math.round(element.getBoundingClientRect().width) })).filter((item) => item.right>document.documentElement.clientWidth+1).slice(0,5),
  }));
  expect(dimensions.scrollWidth, `${page.url()} scrollWidth=${dimensions.scrollWidth} clientWidth=${dimensions.clientWidth} offenders=${JSON.stringify(dimensions.offenders)}`).toBeLessThanOrEqual(dimensions.clientWidth + 1);
}

test.describe("Public Door V0.2", () => {
  test("opens with the Genesis object and ends in the human invitation", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("This is a Pinecœne.", { exact:true })).toBeVisible();
    await expect(page.locator('[data-form-ready="true"]')).toBeVisible();
    await expect(page.getByText(/They frighten us because/)).toBeAttached();
    await expect(page.getByText("The music is still playing.")).toBeAttached();
    await expect(page.getByRole("link", { name: "Watch one become" })).toHaveAttribute("href", "/works/genesis?view=becoming");
    await expect(page.getByRole("link", { name: "See the works" })).toHaveAttribute("href", "/works");
    await expect(page.getByRole("link", { name: "Bring an idea" })).toHaveAttribute("href", "/join#bring");
  });

  test("publishes exactly Genesis, one curation note, and the owed Thin Fold", async ({ page }) => {
    await page.goto("/works");
    await expect(page.getByRole("heading", { name: "Genesis", exact:true })).toBeVisible();
    await expect(page.getByRole("heading", { name: "The Genesis Chat" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "The Thin Fold" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Open this work" })).toHaveCount(1);
    await expect(page.getByText("ORIGIN BINDING UNRESOLVED · NOT A PUBLISHED WORK")).toBeVisible();
    await expect(page.getByText("03 · OWED EXPERIMENT")).toBeVisible();
  });

  test("Genesis exposes the six public views and curated Locket", async ({ page }) => {
    await page.goto("/works/genesis");
    await expect(page.locator('[data-form-ready="true"]')).toBeVisible();
    for (const name of ["fold", "becoming", "record", "reading", "lineage", "about"]) await expect(page.getByRole("button", { name, exact: true })).toBeVisible();
    await page.getByRole("button", { name: "becoming", exact: true }).click();
    await expect(page.getByText("THE BECOMING · 84 SECONDS")).toBeVisible();
    await page.getByRole("button", { name: "04", exact: true }).click();
    await expect(page.getByRole("link", { name: "See how Genesis can travel" })).toHaveAttribute("href", "/w/genesis-demonstration");
  });

  test("Join is a real closed boundary without a fake receiver", async ({ page }) => {
    await page.goto("/join");
    await expect(page.getByRole("heading", { name: "Bring what is unfinished." })).toBeVisible();
    await expect(page.getByText(/receiving boundary is not open yet/i)).toBeVisible();
    await expect(page.locator("input, textarea, form")).toHaveCount(0);
    await expect(page.getByRole("link", { name: /Watch Genesis/ })).toHaveAttribute("href", "/works/genesis?view=becoming");
    await expect(page.getByRole("link", { name: /Fork the Genesis fixture/ })).toHaveAttribute("href", "/studio/new?fixture=pcn-0001");
  });

  test("unknown public identifiers fail closed", async ({ page }) => {
    await page.goto("/w/not-a-real-offering");
    await expect(page.getByRole("heading", { name: "This Offering is not available." })).toBeVisible();
    await expect(page.getByText("Nothing has been opened.", { exact: false })).toBeVisible();
    await expect(page.getByText("Genesis · Curated Offering")).toHaveCount(0);
    await page.goto("/studio/specimens/not-a-fixture");
    await expect(page.getByRole("heading", { name: "This Locket could not be found." })).toBeVisible();
  });

  test("hosted Genesis stays neutral until the exact package resolves, then opens the Locket", async ({ page }) => {
    await page.route("**/api/offerings/genesis-demonstration**", async (route) => { await new Promise((resolve) => setTimeout(resolve, 350)); await route.continue(); });
    await page.goto("/w/genesis-demonstration");
    await expect(page.getByText("Resolving the exact Offering…")).toBeVisible();
    await expect(page.getByText("Genesis · Curated Offering")).toHaveCount(0);
    await expect(page.getByRole("button", { name: "Open demonstration" })).toBeVisible();
    await page.getByRole("button", { name: "Open demonstration" }).click();
    await page.getByRole("button", { name: "Skip to the settled Encounter" }).click();
    await expect(page.getByRole("heading", { name: "R5 · Recital" })).toBeVisible();
    await expect(page.getByRole("heading", { name: /If anything moved/ })).toBeVisible();
    await expect(page.getByText("EXACT PACKAGE · NO OWNER-ONLY DATA")).toBeVisible();
  });

  test("local Studio Offering completes the bounded Return loop without successor authority", async ({ page }) => {
    await page.goto("/studio/specimens/pcn-0001");
    await expect(page.locator('[data-form-ready="true"]')).toBeVisible();
    await page.getByRole("tab", { name: "Offering" }).click();
    await page.getByRole("button", { name: /R5 Recital/ }).click();
    await page.getByLabel("I confirm that I have the right to offer this exact projection to this Address.").check();
    await page.getByRole("button", { name: "Prepare R5 Offering locally" }).click();
    const preview = page.getByRole("link", { name: "Open exact Local Preview" });
    await expect(preview).toBeVisible();
    await preview.click();
    await expect(page.getByRole("button", { name: "Open local preview" })).toBeVisible();
    await page.getByRole("button", { name: "Open local preview" }).click();
    await page.getByRole("button", { name: "Skip to the settled Encounter" }).click();
    await page.getByLabel("Your exact words").fill("The opening remained visible.");
    await page.getByRole("button", { name: "Save local demonstration" }).click();
    await expect(page.getByText("LOCAL DEMONSTRATION SAVED")).toBeVisible();
    await page.getByRole("link", { name: "Review in Studio" }).click();
    await page.getByRole("tab", { name: "Returns" }).click();
    await expect(page.getByText("The opening remained visible.")).toBeVisible();
    await expect(page.getByRole("button", { name: /Dock|Successor|Muse reuse|Withdraw/i })).toHaveCount(0);
    await expect(page.getByText("SUCCESSOR CONSIDERATION NOT PERMITTED")).toBeVisible();
  });

  test("legacy routes resolve to exact canonical routes without loops", async ({ page }) => {
    const cases = [["/approach", "/how"], ["/sketches", "/studio"], ["/sketches/pcn-0001", "/studio/specimens/pcn-0001"], ["/sketches/vital-sign", "/vital-sign"], ["/use?fixture=pcn-0001", "/studio/new?fixture=pcn-0001"], ["/make?fixture=pcn-0002", "/studio/new?fixture=pcn-0002"]] as const;
    for (const [from, to] of cases) { await page.goto(from); await expect(page).toHaveURL(new RegExp(`${to.replace(/[?]/g, "\\?")}$`)); }
  });

  test("public routes are noindex and private theory routes are absent", async ({ page, request }) => {
    for (const path of ["/", "/works", "/works/genesis", "/join", "/more", "/science", "/art", "/how", "/next", "/studio", "/w/genesis-demonstration", "/vital-sign"]) {
      const response = await request.get(path);
      expect(response.headers()["x-robots-tag"], path).toContain("noindex");
      expect(response.headers()["x-robots-tag"], path).toContain("nofollow");
    }
    await page.goto("/");
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
    expect((await request.get("/robots.txt")).status()).toBe(200);
    expect((await request.get("/sitemap.xml")).status()).toBe(404);
    expect((await request.get("/master")).status()).toBe(404);
    expect((await request.get("/theorem")).status()).toBe(404);
  });

  test("Vital Sign is visibly experimental and silent", async ({ page }) => {
    await page.goto("/vital-sign");
    await expect(page.getByText(/experimental/i).first()).toBeVisible();
    await expect(page.getByText(/No live model is present/i)).toBeVisible();
    await expect(page.getByRole("button", { name: /sound|audio/i })).toHaveCount(0);
  });

  test("mobile Door uses a labelled Menu, has no overflow, and passes serious axe checks", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
    await expectNoHorizontalOverflow(page);
    await page.getByRole("button", { name: "Menu" }).click();
    await expect(page.getByLabel("Primary navigation").getByRole("link", { name: "Works", exact:true })).toBeVisible();
    const results = await new AxeBuilder({ page }).disableRules(["color-contrast"]).analyze();
    expect(results.violations.filter((item) => ["critical", "serious"].includes(item.impact ?? ""))).toEqual([]);
  });

  test("reduced motion makes Becoming an explicit semantic stepper", async ({ page }) => {
    await page.emulateMedia({ reducedMotion:"reduce" });
    await page.goto("/works/genesis?view=becoming");
    const step = page.getByRole("button", { name:"Step through the phases" });
    await expect(step).toBeVisible();
    await expect(page.getByText("PHASE 01 / 07")).toBeVisible();
    await step.click();
    await expect(page.getByText("PHASE 02 / 07")).toBeVisible();
  });

  test("storage denial fails closed before a hosted Locket mounts", async ({ page }) => {
    await page.addInitScript(() => Object.defineProperty(window, "indexedDB", { configurable:true, get(){ throw new Error("storage denied"); } }));
    await page.goto("/w/genesis-demonstration");
    await expect(page.getByRole("heading", { name:"Local custody is unavailable." })).toBeVisible();
    await expect(page.getByText("Genesis · Curated Offering")).toHaveCount(0);
  });

  test("WebGL failure preserves the semantic Fold fallback", async ({ page }) => {
    await page.addInitScript(() => {
      const getContext = HTMLCanvasElement.prototype.getContext;
      HTMLCanvasElement.prototype.getContext = function(this:HTMLCanvasElement,type: string, ...args:unknown[]) {
        if(type.includes("webgl")) return null;
        return Reflect.apply(getContext, this, [type, ...args]);
      } as typeof HTMLCanvasElement.prototype.getContext;
    });
    await page.goto("/works/genesis");
    await expect(page.getByText("pcn-0001 · lawful non-WebGL form")).toBeVisible();
    await expect(page.getByText("The same admitted anatomy remains available without 3D.")).toBeVisible();
  });

  test("the public profile makes no external browser requests", async ({ page }) => {
    const external:string[]=[];
    page.on("request", (request) => { const url=new URL(request.url()); if(url.origin!=="http://localhost:3010") external.push(request.url()); });
    for(const path of ["/", "/works", "/works/genesis", "/join", "/w/genesis-demonstration"]) await page.goto(path);
    expect(external).toEqual([]);
  });

  test("representative 390x844 routes do not overflow horizontally", async ({ page }) => {
    await page.setViewportSize({ width:390, height:844 });
    for(const path of ["/", "/works", "/works/genesis", "/join", "/more", "/next", "/studio", "/studio/specimens/pcn-0001", "/w/genesis-demonstration", "/vital-sign"]) {
      await page.goto(path);
      await expectNoHorizontalOverflow(page);
    }
  });
});
