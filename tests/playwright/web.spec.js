import { describe, beforeAll, afterAll, test, expect } from "@playwright/test";
import path from "node:path";
import { PlaywrightContainer } from "testcontainers-node-playwright";
const PLAYWRIGHT_IMAGE = "mcr.microsoft.com/playwright:v1.50.1-jammy";

describe("House of Test website", () => {
  const TESTS_PATH = path.resolve(__dirname, "testcontainers-nodejs-example");
  let container;

  beforeAll(async () => {
    container = await new PlaywrightContainer(PLAYWRIGHT_IMAGE, TESTS_PATH)
      // .withExposedPorts(8080)
      .start();

    // execute the test in the container and report the results in html format
    const { output, exitCode } = await container.exec([
      "npx", // install Playwright if not installed
      "playwright", // connect to Playwright
      "test", // run the test
      "--reporter=html", // output the test results in HTML
    ]);
  });

  afterAll(async () => {
    await container.stop();
  });

  test("should verify houseoftest.ch is up and running", async ({}) => {
    // ARRANGE
    const browser = await container.getPlaywrightBrowser();
    const context = await browser.newContext();
    const page = await context.newPage();

    // ACT
    const response = await page.goto("https://houseoftest.ch/", {
      waitUntil: "domcontentloaded",
    });

    // ASSERT
    expect(response.status()).toBe(200);
    await expect(
      page.getByRole("heading", { name: "Explorers" })
    ).toBeVisible();

    await context.close();
    await browser.close();
  });
});
