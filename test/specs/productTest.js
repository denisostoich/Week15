const cartPage = require ('../pageobjects/cart.page');
const loginPage = require ('../pageobjects/login.page');
const productPage = require ('../pageobjects/product.page');

//All the tests involved in this file are performed on the correct username and password of standard_user.

describe('Login Tests', () => {
    beforeAll('Open browser', () => {
        loginPage.open();
        browser.pause(2000);
    });
    it('Should let login in standard_user', () => {
            loginPage.username.waitForEnabled();
            loginPage.username.setValue('standard_user');
            loginPage.password.waitForEnabled();
            loginPage.password.setValue('secret_sauce');
            loginPage.loginBtn.waitForClickable();
            loginPage.submit();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });

    describe('Should be able to add and remove products from the cart', () => {
        it('Should be able to add the Backpack, access the cart, go back and remove this product from the cart', () => {
            productPage.backpackAddCartBtn.waitForClickable();
            productPage.backpackAddCartBtn.click();
            expect(productPage.loadedCart).toHaveText('1');
            productPage.cartBtn.waitForClickable();
            productPage.cart;
            expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
            cartPage.continueShopping.waitForClickable();
            cartPage.continueShopping.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
            productPage.backpackRemoveCartBtn.waitForClickable();
            productPage.backpackRemoveCartBtn.click();
            expect(productPage.loadedCart).not.toBeDisplayed();
        });
        it('Should be able to add the Bike Light, access the cart, go back and remove this product from the cart', () => {
            productPage.bikeLightAddCartBtn.waitForClickable();
            productPage.bikeLightAddCartBtn.click();
            expect(productPage.loadedCart).toHaveText('1');
            productPage.cartBtn.waitForClickable();
            productPage.cart;
            expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
            cartPage.continueShopping.waitForClickable();
            cartPage.continueShopping.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
            productPage.bikeLightRemoveCartBtn.waitForClickable();
            productPage.bikeLightRemoveCartBtn.click();
            expect(productPage.loadedCart).not.toBeDisplayed();
        });
        it('Should be able to add the Bolt T-Shirt, access the cart, go back and remove this product from the cart', () => {
            productPage.boltTshirtAddCartBtn.waitForClickable();
            productPage.boltTshirtAddCartBtn.click();
            expect(productPage.loadedCart).toHaveText('1');
            productPage.cartBtn.waitForClickable();
            productPage.cart;
            expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
            cartPage.continueShopping.waitForClickable();
            cartPage.continueShopping.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
            productPage.boltTshirtRemoveCartBtn.waitForClickable();
            productPage.boltTshirtRemoveCartBtn.click();
            expect(productPage.loadedCart).not.toBeDisplayed();
        });
        it('Should be able to add the Fleece Jacket, access the cart, go back and remove this product from the cart', () => {
            productPage.fleeceJacketAddCartBtn.waitForClickable();
            productPage.fleeceJacketAddCartBtn.click();
            expect(productPage.loadedCart).toHaveText('1');
            productPage.cartBtn.waitForClickable();
            productPage.cart;
            expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
            cartPage.continueShopping.waitForClickable();
            cartPage.continueShopping.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
            productPage.fleeceJacketRemoveCartBtn.waitForClickable();
            productPage.fleeceJacketRemoveCartBtn.click();
            expect(productPage.loadedCart).not.toBeDisplayed();
        });
        it('Should be able to add the Onesie, access the cart, go back and remove this product from the cart', () => {
            productPage.onesieAddCartBtn.waitForClickable();
            productPage.onesieAddCartBtn.click();
            expect(productPage.loadedCart).toHaveText('1');
            productPage.cartBtn.waitForClickable();
            productPage.cart;
            expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
            cartPage.continueShopping.waitForClickable();
            cartPage.continueShopping.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
            productPage.onesieRemoveCartBtn.waitForClickable();
            productPage.onesieRemoveCartBtn.click();
            expect(productPage.loadedCart).not.toBeDisplayed();
        });
        it('Should be able to add the Red T-Shirt, access the cart, go back and remove this product from the cart', () => {
            productPage.redTshirtAddCartBtn.waitForClickable();
            productPage.redTshirtAddCartBtn.click();
            expect(productPage.loadedCart).toHaveText('1');
            productPage.cartBtn.waitForClickable();
            productPage.cart;
            expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
            cartPage.continueShopping.waitForClickable();
            cartPage.continueShopping.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
            productPage.redTshirtRemoveCartBtn.waitForClickable();
            productPage.redTshirtRemoveCartBtn.click();
            expect(productPage.loadedCart).not.toBeDisplayed();
        });
    });

   /* describe('Should be able to access the products individually through their links', () => {
        
    });*/





});