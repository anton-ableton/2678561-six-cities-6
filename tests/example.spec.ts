import { test, expect } from '@playwright/test';
import { PlaywrightPage } from './playwrightPage';
import { AuthPage } from './auth-page';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('user can search through the documentation', async ({ page }) => {
  const playwrightPage = new PlaywrightPage(page);
  await playwrightPage.load();

  await playwrightPage.searchButton.click();
  await playwrightPage.searchInput.fill('Fixtures');

  await expect(playwrightPage.searchHitsGroup).not.toHaveCount(0);
});

test('user can sign in', async ({ page }) => {
  const authPage = new AuthPage(page);
  await authPage.load();

  await authPage.emailInput.fill('example@example.com');
  await authPage.passwordInput.fill('password123');
  await authPage.signInButton.click();

  await expect(page).toHaveURL('http://localhost:5173/');
  await expect(page.locator('header')).toContainText('Sign out');
});
