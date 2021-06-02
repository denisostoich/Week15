const loginPage = require ('../pageobjects/login.page');
const productPage = require ('../pageobjects/product.page');
const cartPage = require ('../pageobjects/cart.page');
const checkoutPage = require ('../pageobjects/checkout.page');

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
        expect(productPage.pageProductTittle).toHaveText('PRODUCTS');
    });
    it('Should be able to add the products from productPage first', () => {
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
        expect(cartPage.pageCartTittle).toHaveText('YOUR CART');
    });
    it('Check Products on Cart and checkout', () => {
        expect(cartPage.loadedCart).toHaveText('6');
        expect(cartPage.cartItem[0]).toHaveTextContaining('Sauce Labs Backpack');
        expect(cartPage.cartItem[1]).toHaveTextContaining('Sauce Labs Bike Light');
        expect(cartPage.cartItem[2]).toHaveTextContaining('Sauce Labs Bolt T-Shirt');
        expect(cartPage.cartItem[3]).toHaveTextContaining('Sauce Labs Fleece Jacket');
        expect(cartPage.cartItem[4]).toHaveTextContaining('Sauce Labs Onesie');
        expect(cartPage.cartItem[5]).toHaveTextContaining('Test.allTheThings() T-Shirt (Red)');
        cartPage.checkoutBtn.waitForClickable();
        cartPage.checkoutBtn.click();
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html');
        expect(checkoutPage.pageStep1Tittle).toHaveText('CHECKOUT: YOUR INFORMATION');
    });

    describe('Should let go back with cancel button', () => {
        it('Test cancel button', () => {
            checkoutPage.cancelBtn.waitForClickable();
            checkoutPage.cancelBtn.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
        });
    });

    describe('Cannot checkout Products with blank fields', () => {
        it('Should not let checkout Products with all fields blank', () => {
            cartPage.checkoutBtn.waitForClickable();
            cartPage.checkoutBtn.click();
            checkoutPage.continueBtn.waitForClickable();
            checkoutPage.continueBtn.click();
            expect(checkoutPage.errorValidation).toBeDisplayed();
            expect(checkoutPage.errorValidation).toHaveText('Error: First Name is required');
            checkoutPage.closeErrorBtn.waitForClickable();
            checkoutPage.closeErrorBtn.click();
        });
        it('Should not let checkout Products with blank First Name', () => {
            checkoutPage.lastNameInput.waitForEnabled();
            checkoutPage.lastNameInput.setValue('Ostoich');
            checkoutPage.postalCodeInput.waitForEnabled();
            checkoutPage.postalCodeInput.setValue('2000');
            checkoutPage.continueBtn.waitForClickable();
            checkoutPage.continueBtn.click();
            expect(checkoutPage.errorValidation).toBeDisplayed();
            expect(checkoutPage.errorValidation).toHaveText('Error: First Name is required');
            checkoutPage.closeErrorBtn.waitForClickable();
            checkoutPage.closeErrorBtn.click();
        });
        it('Should not let checkout Products with blank Last Name', () => {
            browser.refresh();
            checkoutPage.firstNameInput.waitForEnabled();
            checkoutPage.firstNameInput.setValue('Denis');
            checkoutPage.lastNameInput.clearValue();
            checkoutPage.postalCodeInput.waitForEnabled();
            checkoutPage.postalCodeInput.setValue('2000');
            checkoutPage.continueBtn.waitForClickable();
            checkoutPage.continueBtn.click();
            expect(checkoutPage.errorValidation).toBeDisplayed();
            expect(checkoutPage.errorValidation).toHaveText('Error: Last Name is required');
            checkoutPage.closeErrorBtn.waitForClickable();
            checkoutPage.closeErrorBtn.click();
        });
        it('Should not let checkout Products with blank Zip/Postal Code', () => {
            browser.refresh();
            checkoutPage.firstNameInput.waitForEnabled();
            checkoutPage.firstNameInput.setValue('Denis');
            checkoutPage.lastNameInput.waitForEnabled();
            checkoutPage.lastNameInput.setValue('Ostoich');
            checkoutPage.postalCodeInput.clearValue();
            checkoutPage.continueBtn.waitForClickable();
            checkoutPage.continueBtn.click();
            expect(checkoutPage.errorValidation).toBeDisplayed();
            expect(checkoutPage.errorValidation).toHaveText('Error: Postal Code is required');
            checkoutPage.closeErrorBtn.waitForClickable();
            checkoutPage.closeErrorBtn.click();
        });
    });

    describe('Finalize the purchase', () => {
        it('Should let Checkout products on step one', () => {
            checkoutPage.firstNameInput.waitForEnabled();
            checkoutPage.firstNameInput.setValue("Denis");
            checkoutPage.lastNameInput.waitForEnabled();
            checkoutPage.lastNameInput.setValue("Ostoich");
            checkoutPage.postalCodeInput.waitForEnabled();
            checkoutPage.postalCodeInput.setValue("2000");
            checkoutPage.continueBtn.waitForClickable();
            checkoutPage.continueBtn.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html');
            expect(checkoutPage.pageStep1Tittle).toHaveText('CHECKOUT: OVERVIEW');
        });
        it('Should Check the total purchase price', () => {
            const RegExp = /[-]{0,1}[\d]*[.]{0,1}[\d]+/g;
            var subtotal = 0;
            for (let i=0; i < checkoutPage.productPrice.length; i++){
                var textPrice = checkoutPage.productPrice[i].getText();
                var numberPrice = parseFloat(textPrice.match(RegExp));
                subtotal += numberPrice;
            }
            var subtotalText = checkoutPage.subtotalPrice.getText();
            var numberSubtotal = parseFloat(subtotalText.match(RegExp));
            expect(subtotal).toEqual(numberSubtotal);

            var taxText = checkoutPage.productTax[0].getText();
            var numberTax = parseFloat(taxText.match(RegExp));
            numberTax = parseFloat(Math.round(numberTax * 100) / 100).toFixed(2);
            var tax = subtotal * 0.08;
            tax = parseFloat(Math.round(tax * 100) / 100).toFixed(2);
            expect(tax).toEqual(numberTax);
        });
        it('Should let Checkout products on step two', () => {
            checkoutPage.finishBtn.waitForClickable();
            checkoutPage.finishBtn.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html');
            expect(checkoutPage.finishTittle).toHaveText('CHECKOUT: COMPLETE!');
            expect(checkoutPage.purchaseHeader).toHaveText('THANK YOU FOR YOUR ORDER');
            expect(checkoutPage.purchaseText).toHaveText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
            expect(checkoutPage.ponyExpressImg).toHaveAttr('src', 'https://www.saucedemo.com/static/media/pony-express.46394a5d.png');
            checkoutPage.backHomeBtn.waitForClickable();
            checkoutPage.backHomeBtn.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
            expect(productPage.pageProductTittle).toHaveText('PRODUCTS');
        });
    });
});