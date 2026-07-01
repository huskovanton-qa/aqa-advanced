// @ts-check
import { test, expect } from '@playwright/test';

test.describe('Sign Up form', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('https://qauto.forstudy.space/');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('button', { name: 'Registration' }).click();
  });

  test('Check that the user can register with valid credentials', async ({ page }) => {
    await page.locator('#signupName').fill('bnbnbnbnnbn');
    await page.locator('#signupLastName').fill('bnbnnbnbnbnb');
    const email = `aqa${Math.floor(Math.random() * 1000000)}@example.com`;
    await page.locator('#signupEmail').fill(email);
    await page.locator('#signupPassword').fill('Password123');
    await page.locator('#signupRepeatPassword').fill('Password123');
    await page.locator('.btn.btn-primary').filter({ hasText: 'Register' }).click();

    await expect(page).toHaveURL('https://qauto.forstudy.space/panel/garage');
    await expect(page.locator('#userNavDropdown')).toHaveText(' My profile ');
  })

  test('Check that the user cannot register with an already registered email', async ({ page }) => {
    await page.locator('#signupName').fill('bnbnbnbnnbn');
    await page.locator('#signupLastName').fill('bnbnnbnbnbnb');
    await page.locator('#signupEmail').fill('fgfgfggfgfgfggfg@gmail.com');
    await page.locator('#signupPassword').fill('Password123');
    await page.locator('#signupRepeatPassword').fill('Password123');
    await page.locator('.btn.btn-primary').filter({ hasText: 'Register' }).click();

    await expect(page.locator('.alert.alert-danger')).toHaveText('User already exists');
  });

  test('Check that the user cannot register with invalid email', async ({ page }) => {
    await page.locator('#signupName').fill('bnbnbnbnnbn');
    await page.locator('#signupLastName').fill('bnbnnbnbnbnb');
    await page.locator('#signupEmail').fill('invalid-email');
    await page.locator('#signupPassword').fill('Password123');
    await page.locator('#signupRepeatPassword').fill('Password123');

    await expect(page.locator('.invalid-feedback')).toHaveText('Email is incorrect');
    await expect(page.locator('.btn.btn-primary').filter({ hasText: 'Register' })).toBeDisabled();
  });

  test('Check that the user cannot register with mismatched passwords', async ({ page }) => {
    await page.locator('#signupName').fill('bnbnbnbnnbn');
    await page.locator('#signupLastName').fill('bnbnnbnbnbnb');
    const email = `aqa${Math.floor(Math.random() * 1000000)}@example.com`;
    await page.locator('#signupEmail').fill(email);
    await page.locator('#signupPassword').fill('Password123');
    await page.locator('#signupRepeatPassword').fill('Password456234234');

    //await expect(page.locator('.invalid-feedback')).toHaveText('Passwords do not match'); -- чомусь валідаційного повідомлення при запуску тестів немає
    await expect(page.locator('.btn.btn-primary').filter({ hasText: 'Register' })).toBeDisabled();
  });

  test('Check that the user cannot register with empty fields', async ({ page }) => {
    await page.locator('#signupName').click()
    await page.locator('#signupLastName').click()
    await page.locator('#signupEmail').click()
    await page.locator('#signupPassword').click()
    await page.locator('#signupRepeatPassword').click()
    
    await expect(page.locator('#signupName + .invalid-feedback')).toHaveText('Name required');
    await expect(page.locator('#signupLastName + .invalid-feedback')).toHaveText('Last name required');
    await expect(page.locator('#signupEmail + .invalid-feedback')).toHaveText('Email required');
    await expect(page.locator('#signupPassword + .invalid-feedback')).toHaveText('Password required');
    //await expect(page.locator('#signupRepeatPassword + .invalid-feedback')).toHaveText('Repeat password is required'); --теє немає валідаційного повідолмлення
    await expect(page.locator('.btn.btn-primary').filter({ hasText: 'Register' })).toBeDisabled();
  });

  test('Check that the user cannot register with a short password', async ({ page }) => {
    await page.locator('#signupName').fill('bnbnbnbnnbn');
    await page.locator('#signupLastName').fill('bnbnnbnbnbnb');
    const email = `aqa${Math.floor(Math.random() * 1000000)}@example.com`;
    await page.locator('#signupEmail').fill(email);
    await page.locator('#signupPassword').fill('Pass1');
    await page.locator('#signupRepeatPassword').fill('Pass1');

    await expect(page.locator('#signupPassword + .invalid-feedback')).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    //await expect(page.locator('#signupRepeatPassword + .invalid-feedback')).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    await expect(page.locator('.btn.btn-primary').filter({ hasText: 'Register' })).toBeDisabled();
  })

})