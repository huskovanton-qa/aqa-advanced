
export class RegistrationPage {
  constructor(page) {
    this._page = page;

    this._nameInput = page.locator('#signupName');
    this._lastNameInput = page.locator('#signupLastName');
    this._emailInput = page.locator('#signupEmail');
    this._passwordInput = page.locator('#signupPassword');
    this._repeatPasswordInput = page.locator('#signupRepeatPassword');

    this.registerButton = page
      .locator('.btn.btn-primary')
      .filter({ hasText: 'Register' });

    this.alert = page.locator('.alert.alert-danger');

    this.profileButton = page.locator('#userNavDropdown');
  }

  async register({
    name,
    lastName,
    email,
    password,
    repeatPassword,
  }) {
    await this._nameInput.fill(name);
    await this._lastNameInput.fill(lastName);
    await this._emailInput.fill(email);
    await this._passwordInput.fill(password);
    await this._repeatPasswordInput.fill(repeatPassword);

    await this.registerButton.click();
  }

  async fillForm({
    name,
    lastName,
    email,
    password,
    repeatPassword,
  }) {
    await this._nameInput.fill(name);
    await this._lastNameInput.fill(lastName);
    await this._emailInput.fill(email);
    await this._passwordInput.fill(password);
    await this._repeatPasswordInput.fill(repeatPassword);
  }

  async touchAllFields() {
    await this._nameInput.click();
    await this._lastNameInput.click();
    await this._emailInput.click();
    await this._passwordInput.click();
    await this._repeatPasswordInput.click();
  }
}