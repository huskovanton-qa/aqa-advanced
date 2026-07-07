
export class HomePage {
  constructor(page) {
    this._page = page;

    this._signInButton = page.getByRole('button', { name: 'Sign In' });
    this._registrationButton = page.getByRole('button', { name: 'Registration' });
  }

  async open() {
    await this._page.goto('/');
  }

  async openRegistrationForm() {
    await this._signInButton.click();
    await this._registrationButton.click();
  }
}           