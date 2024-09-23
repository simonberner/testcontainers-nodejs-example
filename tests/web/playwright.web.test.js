const { test, expect } = require('@playwright/test');
const { PlaywrightContainer } = require('testcontainers-node-playwright');
const PLAYWRIGHT_IMAGE = "mcr.microsoft.com/playwright:v1.44.0-jammy";

test('Search for House of Test and verify website', async () => {
    // ARRANGE
    // Start a Chrome container
    const container = await new PlaywrightContainer(PLAYWRIGHT_IMAGE)
        .withExposedPorts(3000)
        .start();

    const browser = await playwright.chromium.connectOverCDP(`ws://localhost:${container.getMappedPort(3000)}`);
    const page = await browser.newPage();

    // ACT
    // Navigate to Google
    await page.goto('https://www.google.com');

    // Type "house of test" into the search bar and press Enter
    await page.fill('input[name="q"]', 'house of test');
    await page.press('input[name="q"]', 'Enter');

    // Wait for search results and click the first one
    await page.waitForSelector('div#search');
    await page.click('div#search a');

    // ASSERT
    // Verify we're on the House of Test website
    await expect(page).toHaveURL('https://houseoftest.ch/');
    await expect(page.locator('h3')).toContainText('House of Test');

    // Clean up
    await browser.close();
    await container.stop();
});