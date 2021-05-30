const loginPage = require('../pageobjects/login.page');

describe('Login Tests', () => {
    beforeAll('Open browser', () => {
        loginPage.open();
        browser.pause(2000);
    })

    describe('Login with valid info', () => {
        it('Should let login with valid information', () => {
            loginPage.username.waitForDisplayed();
            loginPage.username.waitForEnabled();
            loginPage.username.setValue('standard_user');
            loginPage.password.waitForDisplayed();
            loginPage.password.waitForEnabled();
            loginPage.password.setValue('secret_sauce');
            loginPage.loginBtn.waitForDisplayed();
            loginPage.loginBtn.waitForEnabled();
            loginPage.submit();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        })
    })

    describe('Cannot Login with invalid info', () => {
        it('Should not let login with invalid username', () => {
            loginPage.username.waitForDisplayed();
            loginPage.username.waitForEnabled();
            loginPage.username.setValue('user');
            loginPage.password.waitForDisplayed();
            loginPage.password.waitForEnabled();
            loginPage.password.setValue('secret_sauce');
            loginPage.loginBtn.waitForDisplayed();
            loginPage.loginBtn.waitForEnabled();
            loginPage.submit();
            expect(loginPage.loginError).toBeDisplayed();
            expect(loginPage.loginError).toHaveText('Epic sadface: Username and password do not match any user in this service');
        })

        it('Should not let login with invalid password', () => {
            loginPage.errorBtn.waitForDisplayed();
            loginPage.errorBtn.click();
            loginPage.username.waitForDisplayed();
            loginPage.username.waitForEnabled();
            loginPage.username.setValue('standard_user');
            loginPage.password.waitForDisplayed();
            loginPage.password.waitForEnabled();
            loginPage.password.setValue('pass');
            loginPage.loginBtn.waitForDisplayed();
            loginPage.loginBtn.waitForEnabled();
            loginPage.submit();
            expect(loginPage.loginError).toBeDisplayed();
            expect(loginPage.loginError).toHaveText('Epic sadface: Username and password do not match any user in this service');
        })

        it('Should not let login with invalid username and password', () => {
            loginPage.errorBtn.waitForDisplayed();
            loginPage.errorBtn.click();
            loginPage.username.waitForDisplayed();
            loginPage.username.waitForEnabled();
            loginPage.username.setValue('user');
            loginPage.password.waitForDisplayed();
            loginPage.password.waitForEnabled();
            loginPage.password.setValue('pass');
            loginPage.loginBtn.waitForDisplayed();
            loginPage.loginBtn.waitForEnabled();
            loginPage.submit();
            expect(loginPage.loginError).toBeDisplayed();
            expect(loginPage.loginError).toHaveText('Epic sadface: Username and password do not match any user in this service');
        });
    });

    describe('Cannot login with blank fields', () => {
        it('Should not let login with blank username', () => {
            loginPage.username.clearValue();
            loginPage.password.clearValue();
            loginPage.username.waitForDisplayed();
            loginPage.username.waitForEnabled();
            loginPage.username.setValue();
            loginPage.password.waitForDisplayed();
            loginPage.password.waitForEnabled();
            loginPage.password.setValue('secret_sauce');
            loginPage.loginBtn.waitForDisplayed();
            loginPage.loginBtn.waitForEnabled();
            loginPage.submit();
            expect(loginPage.loginError).toBeDisplayed();
            expect(loginPage.loginError).toHaveText('Epic sadface: Username is required');
        });

        it('Should not let login with blank password', () => {
            loginPage.errorBtn.waitForDisplayed();
            loginPage.errorBtn.click();
            loginPage.username.clearValue();
            loginPage.password.clearValue();
            loginPage.username.waitForDisplayed();
            loginPage.username.waitForEnabled();
            loginPage.username.setValue('standard_user');
            loginPage.password.waitForDisplayed();
            loginPage.password.waitForEnabled();
            loginPage.password.setValue();
            loginPage.loginBtn.waitForDisplayed();
            loginPage.loginBtn.waitForEnabled();
            loginPage.submit();
            expect(loginPage.loginError).toBeDisplayed();
            expect(loginPage.loginError).toHaveText('Epic sadface: Password is required');
        });

        //Epic sadface: Sorry, this user has been locked out.
    });
});