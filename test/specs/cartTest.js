const loginPage = require ('../pageobjects/login.page');
const productPage = require ('../pageobjects/product.page');
const cartPage = require ('../pageobjects/cart.page');

//All the tests involved in this file are performed on the correct username and password of standard_user.

describe('Cart Tests', () => {
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

    describe('Should be able to add the products from productPage', () => {
        beforeEach('Should be able to add the products from productPage first', () => {
            productPage.backpackAddCartBtn.waitForClickable();
            productPage.backpackAddCartBtn.click();
            expect(productPage.loadedCart).toHaveText('1');
            productPage.bikeLightAddCartBtn.waitForClickable();
            productPage.bikeLightAddCartBtn.click();
            expect(productPage.loadedCart).toHaveText('2');
            productPage.boltTshirtAddCartBtn.waitForClickable();
            productPage.boltTshirtAddCartBtn.click();
            expect(productPage.loadedCart).toHaveText('3');
            productPage.fleeceJacketAddCartBtn.waitForClickable();
            productPage.fleeceJacketAddCartBtn.click();
            expect(productPage.loadedCart).toHaveText('4');
            productPage.onesieAddCartBtn.waitForClickable();
            productPage.onesieAddCartBtn.click();
            expect(productPage.loadedCart).toHaveText('5');
            productPage.redTshirtAddCartBtn.waitForClickable();
            productPage.redTshirtAddCartBtn.click();
            expect(productPage.loadedCart).toHaveText('6');
            productPage.cartBtn.waitForClickable();
            productPage.cart();
            expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
        });

        it('Remove products from the cartPage', () => {
            //Cart Page - Check Products
            expect(cartPage.loadedCart).toHaveText('6');
            expect(cartPage.cartItem[0]).toHaveTextContaining('Sauce Labs Backpack');
            expect(cartPage.cartItem[1]).toHaveTextContaining('Sauce Labs Bike Light');
            expect(cartPage.cartItem[2]).toHaveTextContaining('Sauce Labs Bolt T-Shirt');
            expect(cartPage.cartItem[3]).toHaveTextContaining('Sauce Labs Fleece Jacket');
            expect(cartPage.cartItem[4]).toHaveTextContaining('Sauce Labs Onesie');
            expect(cartPage.cartItem[5]).toHaveTextContaining('Test.allTheThings() T-Shirt (Red)');
            //Remove Products.
            cartPage.backpackRemoveCartBtn.waitForClickable();
            cartPage.backpackRemoveCartBtn.click();
            expect(cartPage.loadedCart).toHaveText('5');
            cartPage.bikeLightRemoveCartBtn.waitForClickable();
            cartPage.bikeLightRemoveCartBtn.click();
            expect(cartPage.loadedCart).toHaveText('4');
            cartPage.boltTshirtRemoveCartBtn.waitForClickable();
            cartPage.boltTshirtRemoveCartBtn.click();
            expect(cartPage.loadedCart).toHaveText('3');
            cartPage.fleeceJacketRemoveCartBtn.waitForClickable();
            cartPage.fleeceJacketRemoveCartBtn.click();
            expect(cartPage.loadedCart).toHaveText('2');
            cartPage.onesieRemoveCartBtn.waitForClickable();
            cartPage.onesieRemoveCartBtn.click();
            expect(cartPage.loadedCart).toHaveText('1');
            cartPage.redTshirtRemoveCartBtn.waitForClickable();
            cartPage.redTshirtRemoveCartBtn.click();
            expect(cartPage.loadedCart).not.toBeDisplayed();
            cartPage.continueShoppingBtn.waitForClickable();
            cartPage.continueShoppingBtn.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        });
        it('Checkout products', () => {
            //Cart Page - Check Products
            expect(cartPage.loadedCart).toHaveText('6');
            cartPage.checkoutBtn.waitForClickable();
            cartPage.checkoutBtn.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html');
        });
    });

    describe('Step number one to finalize the purchase', () => {
        it('Checkout products step one', () => {
            cartPage.firstNameInput.waitForEnabled();
            cartPage.firstNameInput.setValue("Denis");
            cartPage.lastNameInput.waitForEnabled();
            cartPage.lastNameInput.setValue("Ostoich");
            cartPage.postalCodeInput.waitForEnabled();
            cartPage.postalCodeInput.setValue("2000");
            cartPage.continueBtn.waitForClickable();
            cartPage.continueBtn.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html');
        });
    });

    /*describe('Step number two to finalize the purchase', () => {
        it('Checkout products step two', () => {
            
        });
    });*/
});