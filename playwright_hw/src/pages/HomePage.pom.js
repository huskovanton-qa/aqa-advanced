export class HomePage {
  constructor(page) {
    this._page = page;

    this.signInButton = page.getByRole('button', { name: 'Sign In' });
    this.registrationButton = page.getByRole('button', {
      name: 'Registration',
    });
  }

  async open() {
    await this._page.goto('/');
  }

  async openRegistrationForm() {
    await this.signInButton.click();
    await this.registrationButton.click();
  }
}
