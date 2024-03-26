const {expect} = require('@playwright/test');

exports.LoginPage = class LoginPage {

    constructor(page) {

        this.page = page;
        this.loginBtn = page.getByRole('button', { name: 'Login' });
        this.emailAddressInputField = page.getByPlaceholder('Enter your email address here');
        this.passwordInputField = page.getByPlaceholder('Enter your password here');
        this.incorrectLoginValidationMessage = page.getByText('Your login was incorrect.');
        this.forgotPassworBtn = page.getByRole('link', { name: 'Forgot password?' });
        this.forgotPasswordSendBtn = page.getByRole('button', { name: 'Send' });
        this.forgotPasswordEmaildAddressInputField = page.getByPlaceholder('Email address');

    }

}