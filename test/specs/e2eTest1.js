const loginPage = require ('../pageobjects/login.page');
const productPage = require ('../pageobjects/product.page');
const cartPage = require ('../pageobjects/cart.page');
const checkoutPage = require ('../pageobjects/checkout.page');
const RegExp = /[-]{0,1}[\d]*[.]{0,1}[\d]+/g;

var priceFunction = (selectProduct) => {
    var textPrice = selectProduct.getText();
    var numberSubtotal = parseFloat(textPrice.match(RegExp));
    return numberSubtotal;
}

//All the tests involved in this file are performed on the correct username and password of standard_user.

describe('End-to-End Test', () => {
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
    it('Check Pices of Products', () => {
        expect(priceFunction(productPage.productPrice[0])).toEqual(29.99);
        expect(priceFunction(productPage.productPrice[1])).toEqual(9.99);
        expect(priceFunction(productPage.productPrice[2])).toEqual(15.99);
        expect(priceFunction(productPage.productPrice[3])).toEqual(49.99);
        expect(priceFunction(productPage.productPrice[4])).toEqual(7.99);
        expect(priceFunction(productPage.productPrice[5])).toEqual(15.99);
    });
    it('Sort the products by price from highest to lowest', () => {
        productPage.productSortBtn.waitForClickable();
        productPage.productSortBtn.click();
        browser.keys("ArrowDown");
        browser.pause(1000);
        browser.keys("ArrowDown");
        browser.pause(1000);
        browser.keys("ArrowDown");
        browser.pause(1000);
        browser.keys("Enter");
        expect(productPage.firstPositionProduct).toHaveTextContaining('Sauce Labs Fleece Jacket');
        expect(productPage.secondPositionProduct).toHaveTextContaining('Sauce Labs Backpack');
        expect(productPage.thirdPositionProduct).toHaveTextContaining('Sauce Labs Bolt T-Shirt');
        expect(productPage.fourthPositionProduct).toHaveTextContaining('Test.allTheThings() T-Shirt (Red)');
        expect(productPage.fifthPositionProduct).toHaveTextContaining('Sauce Labs Bike Light');
        expect(productPage.sixthPositionProduct).toHaveTextContaining('Sauce Labs Onesie');
    });
    it('Add to Cart the Backpack, the Bolt T-Shirt and the Bike Light', () => {
        productPage.backpackAddCartBtn.waitForClickable();
        productPage.backpackAddCartBtn.click();
        expect(productPage.loadedCart).toHaveText('1');
        productPage.boltTshirtAddCartBtn.waitForClickable();
        productPage.boltTshirtAddCartBtn.click();
        expect(productPage.loadedCart).toHaveText('2');
        productPage.bikeLightAddCartBtn.waitForClickable();
        productPage.bikeLightAddCartBtn.click();
        expect(productPage.loadedCart).toHaveText('3');
        productPage.cartBtn.waitForClickable();
        productPage.cart();
        expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
    });
    it('Check Products on Cart', () => {
        expect(cartPage.loadedCart).toHaveText('3');
        expect(cartPage.cartItem[0]).toHaveTextContaining('Sauce Labs Backpack');
        expect(cartPage.cartItem[1]).toHaveTextContaining('Sauce Labs Bolt T-Shirt');
        expect(cartPage.cartItem[2]).toHaveTextContaining('Sauce Labs Bike Light');
    });
    it('Remove Bolt T-Shirt from Cart Page', () => {
        cartPage.boltTshirtRemoveCartBtn.waitForClickable();
        cartPage.boltTshirtRemoveCartBtn.click();
        expect(cartPage.loadedCart).toHaveText('2');
        expect(cartPage.cartItem[0]).toHaveTextContaining('Sauce Labs Backpack');
        expect(cartPage.cartItem[1]).toHaveTextContaining('Sauce Labs Bike Light');
    });
    it('Checkout Products on Cart Page, but go back again to continue shopping', () => {
        cartPage.checkoutBtn.waitForClickable();
        cartPage.checkoutBtn.click();
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html');
        expect(checkoutPage.pageStep1Tittle).toHaveText('CHECKOUT: YOUR INFORMATION');
        checkoutPage.cancelBtn.waitForClickable();
        checkoutPage.cancelBtn.click();
        expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
        cartPage.continueShoppingBtn.waitForClickable();
        cartPage.continueShoppingBtn.click();
        expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });
    it('Sort the products by name from Z to A', () => {
        productPage.productSortBtn.waitForClickable();
        productPage.productSortBtn.click();
        browser.keys("ArrowDown");
        browser.pause(1000);
        browser.keys("Enter");
        expect(productPage.firstPositionProduct).toHaveTextContaining('Test.allTheThings() T-Shirt (Red)');
        expect(productPage.secondPositionProduct).toHaveTextContaining('Sauce Labs Onesie');
        expect(productPage.thirdPositionProduct).toHaveTextContaining('Sauce Labs Fleece Jacket');
        expect(productPage.fourthPositionProduct).toHaveTextContaining('Sauce Labs Bolt T-Shirt');
        expect(productPage.fifthPositionProduct).toHaveTextContaining('Sauce Labs Bike Light');
        expect(productPage.sixthPositionProduct).toHaveTextContaining('Sauce Labs Backpack');
    });
    it('Add to Cart the Onesie and the Fleece Jacket', () => {
        productPage.onesieAddCartBtn.waitForClickable();
        productPage.onesieAddCartBtn.click();
        expect(productPage.loadedCart).toHaveText('3');
        productPage.fleeceJacketAddCartBtn.waitForClickable();
        productPage.fleeceJacketAddCartBtn.click();
        expect(productPage.loadedCart).toHaveText('4');
        productPage.cartBtn.waitForClickable();
        productPage.cart();
        expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
    });
    it('Check Products on Cart and Checkout', () => {
        expect(cartPage.loadedCart).toHaveText('4');
        expect(cartPage.cartItem[0]).toHaveTextContaining('Sauce Labs Backpack');
        expect(cartPage.cartItem[1]).toHaveTextContaining('Sauce Labs Bike Light');
        expect(cartPage.cartItem[2]).toHaveTextContaining('Sauce Labs Onesie');
        expect(cartPage.cartItem[3]).toHaveTextContaining('Sauce Labs Fleece Jacket');
        cartPage.checkoutBtn.waitForClickable();
        cartPage.checkoutBtn.click();
        expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html');
        expect(checkoutPage.pageStep1Tittle).toHaveText('CHECKOUT: YOUR INFORMATION');
    });
    it('Checkout products on step one', () => {
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
    it('Check the total purchase price', () => {
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
    it('Finish Checkout products on step two', () => {
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
    it('Log out of the "standard_user" account', () => {
        productPage.menuBtn.waitForClickable();
        productPage.menu();
        productPage.logoutBtn.waitForClickable();
        productPage.logout();
        expect(browser).toHaveUrl('https://www.saucedemo.com/');
    });
});