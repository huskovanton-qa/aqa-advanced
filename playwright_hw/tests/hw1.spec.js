import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/HomePage.pom.js';
import { RegistrationPage } from '../src/pages/RegistrationPage.pom.js';

test.describe('Sign Up form', () => {
  let homePage;
  let registrationPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    registrationPage = new RegistrationPage(page);

    await homePage.open();
    await homePage.openRegistrationForm();
  });

  test('Check that the user can register with valid credentials', async ({
    page,
  }) => {
    const email = `aqa${Math.floor(Math.random() * 1000000)}@example.com`;

    await registrationPage.fillForm({
      name: 'bnbnbnbnnbn',
      lastName: 'bnbnnbnbnbnb',
      email,
      password: 'Password123',
      repeatPassword: 'Password123',
    });
    await registrationPage.registerButton.click();

    await expect(page).toHaveURL('/panel/garage');
    await expect(registrationPage.profileButton).toHaveText(' My profile ');
  });

  test('Check that the user cannot register with an already registered email', async ({
    page,
  }) => {
    await registrationPage.fillForm({
      name: 'bnbnbnbnnbn',
      lastName: 'bnbnnbnbnbnb',
      email: 'fgfgfggfgfgfggfg@gmail.com',
      password: 'Password123',
      repeatPassword: 'Password123',
    });
    await registrationPage.registerButton.click();

    await expect(registrationPage.alert).toHaveText('User already exists');
  });

  test('Check that the user cannot register with invalid email', async ({
    page,
  }) => {
    await registrationPage.fillForm({
      name: 'bnbnbnbnnbn',
      lastName: 'bnbnnbnbnbnb',
      email: 'invalid-email',
      password: 'Password123',
      repeatPassword: 'Password123',
    });

    await expect(page.locator('.invalid-feedback')).toHaveText(
      'Email is incorrect'
    );
    await expect(registrationPage.registerButton).toBeDisabled();
  });

  test('Check that the user cannot register with mismatched passwords', async ({
    page,
  }) => {
    const email = `aqa${Math.floor(Math.random() * 1000000)}@example.com`;

    await registrationPage.fillForm({
      name: 'bnbnbnbnnbn',
      lastName: 'bnbnnbnbnbnb',
      email,
      password: 'Password123',
      repeatPassword: 'Password321',
    });

    //await expect(page.locator('.invalid-feedback')).toHaveText('Passwords do not match'); -- чомусь валідаційного повідомлення при запуску тестів немає
    await expect(registrationPage.registerButton).toBeDisabled();
  });

  test('Check that the user cannot register with empty fields', async ({
    page,
  }) => {
    await registrationPage.touchAllFields();

    await expect(page.locator('#signupName + .invalid-feedback')).toHaveText(
      'Name required'
    );
    await expect(
      page.locator('#signupLastName + .invalid-feedback')
    ).toHaveText('Last name required');
    await expect(page.locator('#signupEmail + .invalid-feedback')).toHaveText(
      'Email required'
    );
    await expect(
      page.locator('#signupPassword + .invalid-feedback')
    ).toHaveText('Password required');
    //await expect(page.locator('#signupRepeatPassword + .invalid-feedback')).toHaveText('Repeat password is required'); --теє немає валідаційного повідолмлення
    await expect(registrationPage.registerButton).toBeDisabled();
  });

  test('Check that the user cannot register with a short password', async ({
    page,
  }) => {
    const email = `aqa${Math.floor(Math.random() * 1000000)}@example.com`;

    await registrationPage.fillForm({
      name: 'bnbnbnbnnbn',
      lastName: 'bnbnnbnbnbnb',
      email,
      password: 'Pass1',
      repeatPassword: 'Pass1',
    });

    await expect(
      page.locator('#signupPassword + .invalid-feedback')
    ).toHaveText(
      'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter'
    );
    //await expect(page.locator('#signupRepeatPassword + .invalid-feedback')).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter');
    await expect(registrationPage.registerButton).toBeDisabled();
  });
});
