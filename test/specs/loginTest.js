const loginPage = require ('../pageobjects/login.page');
const productPage = require ('../pageobjects/product.page');

describe('Login Tests', () => {
    beforeAll('Open browser', () => {
        loginPage.open();
        browser.pause(2000);
    });

    describe('Cannot Login with invalid info', () => {
        it('Should not let login with invalid username', () => {
            loginPage.username.waitForEnabled();
            loginPage.username.setValue('user');
            loginPage.password.waitForEnabled();
            loginPage.password.setValue('secret_sauce');
            loginPage.loginBtn.waitForClickable();
            loginPage.submit();
            expect(loginPage.loginError).toBeDisplayed();
            expect(loginPage.loginError).toHaveText('Epic sadface: Username and password do not match any user in this service');
        });
        it('Should not let login with invalid password', () => {
            loginPage.errorBtn.waitForClickable();
            loginPage.errorBtn.click();
            loginPage.username.clearValue();
            loginPage.password.clearValue();
            loginPage.username.waitForEnabled();
            loginPage.username.setValue('standard_user');
            loginPage.password.waitForEnabled();
            loginPage.password.setValue('pass');
            loginPage.loginBtn.waitForClickable();
            loginPage.submit();
            expect(loginPage.loginError).toBeDisplayed();
            expect(loginPage.loginError).toHaveText('Epic sadface: Username and password do not match any user in this service');
        });
        it('Should not let login with invalid username and password', () => {
            loginPage.errorBtn.waitForClickable();
            loginPage.errorBtn.click();
            loginPage.username.clearValue();
            loginPage.password.clearValue();
            loginPage.username.waitForEnabled();
            loginPage.username.setValue('user');
            loginPage.password.waitForEnabled();
            loginPage.password.setValue('pass');
            loginPage.loginBtn.waitForClickable();
            loginPage.submit();
            expect(loginPage.loginError).toBeDisplayed();
            expect(loginPage.loginError).toHaveText('Epic sadface: Username and password do not match any user in this service');
        });
    });

    describe('Cannot login with blank fields', () => {
        it('Should not let login with blank username', () => {
            browser.refresh();
            loginPage.password.waitForEnabled();
            loginPage.password.setValue('secret_sauce');
            loginPage.loginBtn.waitForClickable();
            loginPage.submit();
            expect(loginPage.loginError).toBeDisplayed();
            expect(loginPage.loginError).toHaveText('Epic sadface: Username is required');
        });
        it('Should not let login with blank password', () => {
            browser.refresh();
            loginPage.username.waitForEnabled();
            loginPage.username.setValue('standard_user');
            loginPage.loginBtn.waitForClickable();
            loginPage.submit();
            expect(loginPage.loginError).toBeDisplayed();
            expect(loginPage.loginError).toHaveText('Epic sadface: Password is required');
        });
        it('Should not let login with blank username and password', () => {
            browser.refresh();
            loginPage.loginBtn.waitForClickable();
            loginPage.submit();
            expect(loginPage.loginError).toBeDisplayed();
            expect(loginPage.loginError).toHaveText('Epic sadface: Username is required');
        });
    });

    describe('Cannot login with a locked user', () => {
        it('Should not let login with a user locked out for a period of time', () => {
            browser.refresh();
            loginPage.username.waitForEnabled();
            loginPage.username.setValue('locked_out_user');
            loginPage.password.waitForEnabled();
            loginPage.password.setValue('secret_sauce');
            loginPage.loginBtn.waitForClickable();
            loginPage.submit();
            expect(loginPage.loginError).toBeDisplayed();
            expect(loginPage.loginError).toHaveText('Epic sadface: Sorry, this user has been locked out.');
        });
    });

    describe('Login with valid info and logout in standard_user', () => {
        it('Should let login with valid information', () => {
            browser.refresh();
            loginPage.username.waitForEnabled();
            loginPage.username.setValue('standard_user');
            loginPage.password.waitForEnabled();
            loginPage.password.setValue('secret_sauce');
            loginPage.loginBtn.waitForClickable();
            loginPage.submit();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        });
        it('Should let logging out after logging in', () => {
            productPage.menuBtn.waitForClickable();
            productPage.menu();
            productPage.logoutBtn.waitForClickable();
            productPage.logout();
            expect(browser).toHaveUrl('https://www.saucedemo.com/');
        });
        it('Should not let not returning to the inventory by clicking the back button, after logging out', () => {
            browser.back();
            expect(loginPage.loginError).toBeDisplayed();
            expect(loginPage.loginError).toHaveText("Epic sadface: You can only access '/inventory.html' when you are logged in.");
        });
    });

    describe('Login with valid info and logout in problem_user', () => {
        it('Should let login with valid information', () => {
            browser.refresh();
            loginPage.username.waitForEnabled();
            loginPage.username.setValue('problem_user');
            loginPage.password.waitForEnabled();
            loginPage.password.setValue('secret_sauce');
            loginPage.loginBtn.waitForClickable();
            loginPage.submit();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        });
        it('Should let logging out after logging in', () => {
            productPage.menuBtn.waitForClickable();
            productPage.menu();
            productPage.logoutBtn.waitForClickable();
            productPage.logout();
            expect(browser).toHaveUrl('https://www.saucedemo.com/');
        });
        it('Should not let not returning to the inventory by clicking the back button, after logging out', () => {
            browser.back();
            expect(loginPage.loginError).toBeDisplayed();
            expect(loginPage.loginError).toHaveText("Epic sadface: You can only access '/inventory.html' when you are logged in.");
        });
    });

    describe('Login with valid info and logout in performance_glitch_user', () => {
        it('Should let login with valid information', () => {
            browser.refresh();
            loginPage.username.waitForEnabled();
            loginPage.username.setValue('performance_glitch_user');
            loginPage.password.waitForEnabled();
            loginPage.password.setValue('secret_sauce');
            loginPage.loginBtn.waitForClickable();
            loginPage.submit();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        });
        it('Should let logging out after logging in', () => {
            productPage.menuBtn.waitForClickable();
            productPage.menu();
            productPage.logoutBtn.waitForClickable();
            productPage.logout();
            expect(browser).toHaveUrl('https://www.saucedemo.com/');
        });
        it('Should not let not returning to the inventory by clicking the back button, after logging out', () => {
            browser.back();
            expect(loginPage.loginError).toBeDisplayed();
            expect(loginPage.loginError).toHaveText("Epic sadface: You can only access '/inventory.html' when you are logged in.");
        });
    });

    /*El siguiente test no debería permitirme iniciar sesión en una nueva pestaña con el mismo usuario,pero se realizará
    de modo que el mismo pase correctamente.*/
    describe('Cannot login to a new tab with the same user', () => {
        it('Cannot login to a new tab with the same user already logged in', () => {
            browser.refresh();
            loginPage.username.waitForEnabled();
            loginPage.username.setValue('standard_user');
            loginPage.password.waitForEnabled();
            loginPage.password.setValue('secret_sauce');
            loginPage.loginBtn.waitForClickable();
            loginPage.submit();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
            browser.newWindow('https://www.saucedemo.com/');
            loginPage.username.waitForEnabled();
            loginPage.username.setValue('standard_user');
            loginPage.password.waitForEnabled();
            loginPage.password.setValue('secret_sauce');
            loginPage.loginBtn.waitForClickable();
            loginPage.submit();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        });
    });
});