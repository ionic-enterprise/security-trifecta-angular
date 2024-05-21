import { $ } from '@wdio/globals'
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputUsername() {
        return $('#email');
    }

    public get inputPassword() {
        return $('#password');
    }

    public get loginBtn() {
        return $('#loginBtn');
    }

    public get NextBtn() {
        return $('#next');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login(username: string, password: string) {
        await this.loginBtn.click();
        const ctx = await driver.getContexts();
        console.log('contexts', ctx);
        driver.switchContext('WEBVIEW_chrome');
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.NextBtn.click();

    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open() {
        return super.open('login');
    }
}

export default new LoginPage();
