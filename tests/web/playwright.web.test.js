const { test, expect } = require("@playwright/test");
const { PlaywrightContainer } = require("testcontainers-node-playwright");
const { PLAYWRIGHT_IMAGE } = require("../constants");
import path from "path";

test("Expect that House of Test website is up", async () => {
  const TESTS_PATH = path.resolve(
    "/tests/web/",
    "...",
    "testcontainers-nodejs-example"
  );

  // Increase the timeout for the entire test
  test.setTimeout(120000);

  // ARRANGE
  const container = await new PlaywrightContainer(PLAYWRIGHT_IMAGE, TESTS_PATH)
    // .withExposedPorts(9222) // Default Chrome Debug port
    .start();

  // execute the test in the container and report the results in html format
  const { output, exitCode } = await container.exec([
    "npx", // install Playwright if not installed
    "playwright", // connect to Playwright
    "test", // run the test
    "--reporter=html", // output the test results in HTML
  ]);

  const browser = await container.getPlaywright().chromium.connect();
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    // ACT
    await page.goto("https://www.google.com");

    await page.fill('input[name="q"]', "house of test");
    await page.press('input[name="q"]', "Enter");

    await page.waitForSelector("div#search");
    await page.click("div#search a");

    // ASSERT
    await expect(page).toHaveURL("https://houseoftest.ch/");
    await expect(page.locator("h3")).toContainText("House of Test");
  } finally {
    // Clean up
    await context.close();
    await browser.close();
    await container.stop();
  }
});
