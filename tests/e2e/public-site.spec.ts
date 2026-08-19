import { expect, test } from "@playwright/test";

const pages = [
  { path: "/", heading: "Launch API SaaS plumbing" },
  { path: "/docs", heading: "Ship API SaaS systems" },
  { path: "/registry", heading: "Install the API wedge first" },
  { path: "/alternatives", heading: "Compare SaaS starters" },
] as const;

test.beforeEach(async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
});

for (const target of pages) {
  test(`renders ${target.path} with the primary message`, async ({ page }) => {
    const response = await page.goto(target.path);

    expect(response?.status()).toBeLessThan(400);
    await expect(page).toHaveTitle(/StackFoundry/);
    await expect(page.getByRole("heading", { level: 1 })).toContainText(target.heading);
  });
}

test("visitor can navigate from home to docs and the registry", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("link", { name: "Read Docs" }).click();
  await expect(page.getByRole("heading", { name: "Ship API SaaS systems" })).toBeVisible();

  await page.goto("/registry");
  await expect(page.getByRole("heading", { name: "Install the API wedge first" })).toBeVisible();
});

test("homepage exposes the API SaaS dry-run workflow and current registry stats", async ({
  page,
}) => {
  await page.goto("/");

  await expect(page.getByRole("link", { name: "Dry-run API SaaS" })).toBeVisible();
  await expect(
    page.getByText("StackFoundry installs the hard API product work", { exact: false }),
  ).toBeVisible();
  await expect(page.getByText("169").first()).toBeVisible();
});

test("registry page exposes the registry JSON and GitHub links", async ({ page }) => {
  await page.goto("/registry");

  await expect(page.getByRole("link", { name: "Registry JSON", exact: true }).first()).toBeVisible();
  await expect(page.getByRole("link", { name: "GitHub", exact: true }).first()).toBeVisible();
});

test("docs page documents the review workflow and manifest contract", async ({ page }) => {
  await page.goto("/docs");

  await expect(page.getByRole("heading", { name: "Add to an existing app" })).toBeVisible();
  await expect(page.getByText("Source over magic")).toBeVisible();
  await expect(page.getByText("Dry-run before trust")).toBeVisible();
  await expect(page.getByText("Providers stay replaceable")).toBeVisible();
  await expect(page.getByText("module.json").first()).toBeVisible();
});

test("alternatives index links every comparison page", async ({ page }) => {
  await page.goto("/alternatives");

  const comparisons = page.locator(".blog-comparison-card");
  await expect(comparisons).toHaveCount(7);
});

for (const slug of [
  "makerkit",
  "supastarter",
  "shipfast",
  "gravity",
  "open-saas",
  "nextacular",
  "boxyhq",
]) {
  test(`alternative comparison ${slug} shows a balanced decision matrix`, async ({ page }) => {
    await page.goto(`/alternatives/${slug}`);

    await expect(
      page.getByRole("heading", { name: "When to choose StackFoundry instead" }),
    ).toBeVisible();
    await expect(page.locator(".blog-comparison-matrix > div")).toHaveCount(2);
  });
}

test("registry JSON remains publicly served and shadcn-compatible", async ({ request }) => {
  const registry = await request.get("/r/registry.json");
  expect(registry.ok()).toBeTruthy();

  const body = await registry.json();
  expect(body.$schema).toBe("https://ui.shadcn.com/schema/registry.json");
  expect(body.items).toHaveLength(169);
  expect(new Set(body.items.map((item: { name: string }) => item.name)).size).toBe(169);
});

test("core public pages have no client console errors or failed requests", async ({ page }) => {
  const errors: string[] = [];
  const failedRequests: string[] = [];

  page.on("console", (message) => {
    if (message.type() === "error" && !message.text().includes("Failed to load resource")) {
      errors.push(message.text());
    }
  });
  page.on("requestfailed", (request) => {
    if (!request.url().includes("/_vercel/")) failedRequests.push(request.url());
  });
  page.on("response", (response) => {
    const url = response.url();
    if (
      response.status() >= 400 &&
      !url.includes("google.com/s2/favicons") &&
      !url.includes("/_vercel/")
    ) {
      failedRequests.push(`${response.status()} ${url}`);
    }
  });

  for (const target of pages) {
    await page.goto(target.path);
  }

  expect(errors).toEqual([]);
  expect(failedRequests).toEqual([]);
});
