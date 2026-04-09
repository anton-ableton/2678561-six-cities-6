import { test, expect } from '@playwright/test';
import { AuthPage } from './auth-page';

test.only('user can sign in', async ({ page }) => {
  const authPage = new AuthPage(page);
  await authPage.load();

  await authPage.emailInput.fill('example@example.com');
  await authPage.passwordInput.fill('password123');
  await authPage.signInButton.click();

  await expect(page).toHaveURL('http://localhost:5173/');
  await expect(page.locator('header')).toContainText('Sign out');
});
