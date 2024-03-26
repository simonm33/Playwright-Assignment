import {test, expect} from '@playwright/test';
import { LoginPage } from '../../object pages/logInPage';
import { log } from 'console';

test.beforeEach(async ({page}) => {
    await page.goto('https://bakeronline.be/be-en/demo-shop/login?redirect=/demo-shop');
});

test('Invalid credentials input test', async ({page}) => {

    const loginPage = new LoginPage(page);

    await loginPage.loginBtn.click();
    await expect(loginPage.emailAddressInputField).toBeVisible();
    await expect(loginPage.passwordInputField).toBeVisible();
    expect(await page.locator('div#app > main').screenshot()).toMatchSnapshot('emptyEmailAddressInput.png');
    await loginPage.emailAddressInputField.fill('invalidAddress');
    await loginPage.loginBtn.click();
    await expect(loginPage.emailAddressInputField).toBeVisible();
    await expect(loginPage.passwordInputField).toBeVisible();
    expect(await page.locator('div#app > main').screenshot()).toMatchSnapshot('emptyPasswordInput.png');
    await loginPage.passwordInputField.fill('invalidPassword');
    await loginPage.loginBtn.click();
    await expect(loginPage.incorrectLoginValidationMessage).toBeVisible();
    expect(await page.locator('div#app > main').screenshot()).toMatchSnapshot('incorrectLogin.png');

});

/*test('Password recovery test', async ({page}) => {

    const loginPage = new LoginPage(page);

    await loginPage.forgotPassworBtn.click();
    await loginPage.forgotPasswordSendBtn.click();
    await expect(loginPage.forgotPasswordEmaildAddressInputField).toBeVisible();
    await expect(loginPage.forgotPasswordSendBtn).toBeVisible();
    //expect(await page.locator('div#app > main').screenshot()).toMatchSnapshot('emptyEmailAddressInput.png');
    await loginPage.emailAddressInputField.fill('invalidAddress');
    await loginPage.loginBtn.click();
    //expect(await page.locator('div#app > main').screenshot()).toMatchSnapshot('emptyPasswordInput.png');
    await loginPage.passwordInputField.fill('invalidPassword');
    await loginPage.loginBtn.click();
    await expect(loginPage.incorrectLoginValidationMessage).toBeVisible();
    expect(await page.locator('div#app > main').screenshot()).toMatchSnapshot('incorrectLogin.png');

});*/