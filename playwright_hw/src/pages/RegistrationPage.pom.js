export class RegistrationPage {
  constructor(page) {
    this._page = page;

    this.nameInput = page.locator('#signupName');
    this.lastNameInput = page.locator('#signupLastName');
    this.emailInput = page.locator('#signupEmail');
    this.passwordInput = page.locator('#signupPassword');
    this.repeatPasswordInput = page.locator('#signupRepeatPassword');

    this.registerButton = page
      .locator('.btn.btn-primary')
      .filter({ hasText: 'Register' });

    this.alert = page.locator('.alert.alert-danger');

    this.profileButton = page.locator('#userNavDropdown');
  }

  async fillForm({ name, lastName, email, password, repeatPassword }) {
    await this.nameInput.fill(name);
    await this.lastNameInput.fill(lastName);
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.repeatPasswordInput.fill(repeatPassword);
  }

  async touchAllFields() {
    await this.nameInput.click();
    await this.lastNameInput.click();
    await this.emailInput.click();
    await this.passwordInput.click();
    await this.repeatPasswordInput.click();
  }
}
