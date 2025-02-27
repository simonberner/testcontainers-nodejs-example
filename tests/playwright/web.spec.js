import { test, expect } from "@playwright/test";

test("site is up and running", async ({ page }) => {
  // ARRANGE
  // nothing to arrange

  // ACT
  const response = await page.goto("https://houseoftest.ch/", {
    waitUntil: "domcontentloaded",
  });

  // ASSERT
  expect(response.status()).toBe(200);
  await expect(page.getByRole("heading", { name: "Explorers" })).toBeVisible();
});
