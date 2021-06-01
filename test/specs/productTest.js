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

    describe('Add and remove products from the cart', () => {
        it('Should be able to add the Backpack, access the cart, go back and remove this product from the cart', () => {
            productPage.backpackAddCartBtn.waitForClickable();
            productPage.backpackAddCartBtn.click();
            expect(productPage.loadedCart).toHaveText('1');
            productPage.cartBtn.waitForClickable();
            productPage.cart();
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
            productPage.cart();
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
            productPage.cart();
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
            productPage.cart();
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
            productPage.cart();
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
            productPage.cart();
            expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
            cartPage.continueShopping.waitForClickable();
            cartPage.continueShopping.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
            productPage.redTshirtRemoveCartBtn.waitForClickable();
            productPage.redTshirtRemoveCartBtn.click();
            expect(productPage.loadedCart).not.toBeDisplayed();
        });
    });

    describe('Access the products individually through their Text links', () => {
        it('Should be able to access the detail of the Backpack, add it to the cart, remove it and return to the product inventory', () => {
            productPage.backpackTextLink.waitForClickable();
            productPage.backpackTextLink.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=4');
            expect(productPage.productImgDetail).toHaveAttr('src', 'https://www.saucedemo.com/static/media/sauce-backpack-1200x1500.34e7aa42.jpg');
            expect(productPage.productTextDetail).toHaveTextContaining('Sauce Labs Backpack');
            //'.inventory_details_price[0]=29.99'
            productPage.backpackAddCartBtn.waitForClickable();
            productPage.backpackAddCartBtn.click();
            expect(productPage.loadedCart).toHaveText('1');
            productPage.backpackRemoveCartBtn.waitForClickable();
            productPage.backpackRemoveCartBtn.click();
            expect(productPage.loadedCart).not.toBeDisplayed();
            productPage.backProductsBtn.waitForClickable();
            productPage.backProductsBtn.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        });
        it('Should be able to access the detail of the Bike Light, add it to the cart, remove it and return to the product inventory', () => {
            productPage.bikeLightTextLink.waitForClickable();
            productPage.bikeLightTextLink.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=0');
            expect(productPage.productImgDetail).toHaveAttr('src', 'https://www.saucedemo.com/static/media/bike-light-1200x1500.a0c9caae.jpg');
            expect(productPage.productTextDetail).toHaveTextContaining('Sauce Labs Bike Light');
            //'.inventory_details_price[0]=29.99'
            productPage.bikeLightAddCartBtn.waitForClickable();
            productPage.bikeLightAddCartBtn.click();
            expect(productPage.loadedCart).toHaveText('1');
            productPage.bikeLightRemoveCartBtn.waitForClickable();
            productPage.bikeLightRemoveCartBtn.click();
            expect(productPage.loadedCart).not.toBeDisplayed();
            productPage.backProductsBtn.waitForClickable();
            productPage.backProductsBtn.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        });
        it('Should be able to access the detail of the T-Shirt, add it to the cart, remove it and return to the product inventory', () => {
            productPage.boltTshirtTextLink.waitForClickable();
            productPage.boltTshirtTextLink.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=1');
            expect(productPage.productImgDetail).toHaveAttr('src', 'https://www.saucedemo.com/static/media/bolt-shirt-1200x1500.c0dae290.jpg');
            expect(productPage.productTextDetail).toHaveTextContaining('Sauce Labs Bolt T-Shirt');
            //'.inventory_details_price[0]=29.99'
            productPage.boltTshirtAddCartBtn.waitForClickable();
            productPage.boltTshirtAddCartBtn.click();
            expect(productPage.loadedCart).toHaveText('1');
            productPage.boltTshirtRemoveCartBtn.waitForClickable();
            productPage.boltTshirtRemoveCartBtn.click();
            expect(productPage.loadedCart).not.toBeDisplayed();
            productPage.backProductsBtn.waitForClickable();
            productPage.backProductsBtn.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        });
        it('Should be able to access the detail of the Fleece Jacket, add it to the cart, remove it and return to the product inventory', () => {
            productPage.fleeceJacketTextLink.waitForClickable();
            productPage.fleeceJacketTextLink.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=5');
            expect(productPage.productImgDetail).toHaveAttr('src', 'https://www.saucedemo.com/static/media/sauce-pullover-1200x1500.439fc934.jpg');
            expect(productPage.productTextDetail).toHaveTextContaining('Sauce Labs Fleece Jacket');
            //'.inventory_details_price[0]=29.99'
            productPage.fleeceJacketAddCartBtn.waitForClickable();
            productPage.fleeceJacketAddCartBtn.click();
            expect(productPage.loadedCart).toHaveText('1');
            productPage.fleeceJacketRemoveCartBtn.waitForClickable();
            productPage.fleeceJacketRemoveCartBtn.click();
            expect(productPage.loadedCart).not.toBeDisplayed();
            productPage.backProductsBtn.waitForClickable();
            productPage.backProductsBtn.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        });
        it('Should be able to access the detail of the Onesie, add it to the cart, remove it and return to the product inventory', () => {
            productPage.onesieTextLink.waitForClickable();
            productPage.onesieTextLink.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=2');
            expect(productPage.productImgDetail).toHaveAttr('src', 'https://www.saucedemo.com/static/media/red-onesie-1200x1500.1b15e1fa.jpg');
            expect(productPage.productTextDetail).toHaveTextContaining('Sauce Labs Onesie');
            //'.inventory_details_price[0]=29.99'
            productPage.onesieAddCartBtn.waitForClickable();
            productPage.onesieAddCartBtn.click();
            expect(productPage.loadedCart).toHaveText('1');
            productPage.onesieRemoveCartBtn.waitForClickable();
            productPage.onesieRemoveCartBtn.click();
            expect(productPage.loadedCart).not.toBeDisplayed();
            productPage.backProductsBtn.waitForClickable();
            productPage.backProductsBtn.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        });
        it('Should be able to access the detail of the Red T-Shirt, add it to the cart, remove it and return to the product inventory', () => {
            productPage.redTshirtTextLink.waitForClickable();
            productPage.redTshirtTextLink.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=3');
            expect(productPage.productImgDetail).toHaveAttr('src', 'https://www.saucedemo.com/static/media/red-tatt-1200x1500.e32b4ef9.jpg');
            expect(productPage.productTextDetail).toHaveTextContaining('Test.allTheThings() T-Shirt (Red)');
            //'.inventory_details_price[0]=29.99'
            productPage.redTshirtAddCartBtn.waitForClickable();
            productPage.redTshirtAddCartBtn.click();
            expect(productPage.loadedCart).toHaveText('1');
            productPage.redTshirtRemoveCartBtn.waitForClickable();
            productPage.redTshirtRemoveCartBtn.click();
            expect(productPage.loadedCart).not.toBeDisplayed();
            productPage.backProductsBtn.waitForClickable();
            productPage.backProductsBtn.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        });
    });

    describe('Access the products individually through their Image links', () => {
        it('Should be able to access the detail of the Backpack and return to the product inventory', () => {
            productPage.backpackImageLink.waitForClickable();
            productPage.backpackImageLink.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=4');
            expect(productPage.productImgDetail).toHaveAttr('src', 'https://www.saucedemo.com/static/media/sauce-backpack-1200x1500.34e7aa42.jpg');
            expect(productPage.productTextDetail).toHaveTextContaining('Sauce Labs Backpack');
            //'.inventory_details_price[0]=29.99'
            productPage.backProductsBtn.waitForClickable();
            productPage.backProductsBtn.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        });
        it('Should be able to access the detail of the Bike Light and return to the product inventory', () => {
            productPage.bikeLightImageLink.waitForClickable();
            productPage.bikeLightImageLink.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=0');
            expect(productPage.productImgDetail).toHaveAttr('src', 'https://www.saucedemo.com/static/media/bike-light-1200x1500.a0c9caae.jpg');
            expect(productPage.productTextDetail).toHaveTextContaining('Sauce Labs Bike Light');
            //'.inventory_details_price[0]=29.99'
            productPage.backProductsBtn.waitForClickable();
            productPage.backProductsBtn.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        });
        it('Should be able to access the detail of the T-Shirt and return to the product inventory', () => {
            productPage.boltTshirtImageLink.waitForClickable();
            productPage.boltTshirtImageLink.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=1');
            expect(productPage.productImgDetail).toHaveAttr('src', 'https://www.saucedemo.com/static/media/bolt-shirt-1200x1500.c0dae290.jpg');
            expect(productPage.productTextDetail).toHaveTextContaining('Sauce Labs Bolt T-Shirt');
            //'.inventory_details_price[0]=29.99'
            productPage.backProductsBtn.waitForClickable();
            productPage.backProductsBtn.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        });
        it('Should be able to access the detail of the Fleece Jacket and return to the product inventory', () => {
            productPage.fleeceJacketImageLink.waitForClickable();
            productPage.fleeceJacketImageLink.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=5');
            expect(productPage.productImgDetail).toHaveAttr('src', 'https://www.saucedemo.com/static/media/sauce-pullover-1200x1500.439fc934.jpg');
            expect(productPage.productTextDetail).toHaveTextContaining('Sauce Labs Fleece Jacket');
            //'.inventory_details_price[0]=29.99'
            productPage.backProductsBtn.waitForClickable();
            productPage.backProductsBtn.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        });
        it('Should be able to access the detail of the Onesie and return to the product inventory', () => {
            productPage.onesieImageLink.waitForClickable();
            productPage.onesieImageLink.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=2');
            expect(productPage.productImgDetail).toHaveAttr('src', 'https://www.saucedemo.com/static/media/red-onesie-1200x1500.1b15e1fa.jpg');
            expect(productPage.productTextDetail).toHaveTextContaining('Sauce Labs Onesie');
            //'.inventory_details_price[0]=29.99'
            productPage.backProductsBtn.waitForClickable();
            productPage.backProductsBtn.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        });
        it('Should be able to access the detail of the Red T-Shirt and return to the product inventory', () => {
            productPage.redTshirtImageLink.waitForClickable();
            productPage.redTshirtImageLink.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=3');
            expect(productPage.productImgDetail).toHaveAttr('src', 'https://www.saucedemo.com/static/media/red-tatt-1200x1500.e32b4ef9.jpg');
            expect(productPage.productTextDetail).toHaveTextContaining('Test.allTheThings() T-Shirt (Red)');
            //'.inventory_details_price[0]=29.99'
            productPage.backProductsBtn.waitForClickable();
            productPage.backProductsBtn.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        });
    });

    describe('Sort Products', () => {
        it('Should be able to sort the products by name from A to Z', () => {
            productPage.productSortBtn.waitForClickable();
            productPage.productSortBtn.click();
            browser.pause(2000);
            browser.keys("Enter");
            expect(productPage.firstPositionProduct).toHaveTextContaining('Sauce Labs Backpack');
            expect(productPage.secondPositionProduct).toHaveTextContaining('Sauce Labs Bike Light');
            expect(productPage.thirdPositionProduct).toHaveTextContaining('Sauce Labs Bolt T-Shirt');
            expect(productPage.fourthPositionProduct).toHaveTextContaining('Sauce Labs Fleece Jacket');
            expect(productPage.fifthPositionProduct).toHaveTextContaining('Sauce Labs Onesie');
            expect(productPage.sixthPositionProduct).toHaveTextContaining('Test.allTheThings() T-Shirt (Red)');
        });

        it('Should be able to sort the products by name from Z to A', () => {
            productPage.productSortBtn.waitForClickable();
            productPage.productSortBtn.click();
            browser.keys("ArrowDown");
            browser.pause(2000);
            browser.keys("Enter");
            expect(productPage.firstPositionProduct).toHaveTextContaining('Test.allTheThings() T-Shirt (Red)');
            expect(productPage.secondPositionProduct).toHaveTextContaining('Sauce Labs Onesie');
            expect(productPage.thirdPositionProduct).toHaveTextContaining('Sauce Labs Fleece Jacket');
            expect(productPage.fourthPositionProduct).toHaveTextContaining('Sauce Labs Bolt T-Shirt');
            expect(productPage.fifthPositionProduct).toHaveTextContaining('Sauce Labs Bike Light');
            expect(productPage.sixthPositionProduct).toHaveTextContaining('Sauce Labs Backpack');
        });

        it('Should be able to sort the products by price from lowest to highest', () => {
            productPage.productSortBtn.waitForClickable();
            productPage.productSortBtn.click();
            browser.keys("ArrowDown");
            browser.pause(2000);
            browser.keys("Enter");
            expect(productPage.firstPositionProduct).toHaveTextContaining('Sauce Labs Onesie');
            expect(productPage.secondPositionProduct).toHaveTextContaining('Sauce Labs Bike Light');
            expect(productPage.thirdPositionProduct).toHaveTextContaining('Sauce Labs Bolt T-Shirt');
            expect(productPage.fourthPositionProduct).toHaveTextContaining('Test.allTheThings() T-Shirt (Red)');
            expect(productPage.fifthPositionProduct).toHaveTextContaining('Sauce Labs Backpack');
            expect(productPage.sixthPositionProduct).toHaveTextContaining('Sauce Labs Fleece Jacket');
        });

        it('Should be able to sort the products by price from highest to lowest', () => {
            productPage.productSortBtn.waitForClickable();
            productPage.productSortBtn.click();
            browser.keys("ArrowDown");
            browser.pause(2000);
            browser.keys("Enter");
            expect(productPage.firstPositionProduct).toHaveTextContaining('Sauce Labs Fleece Jacket');
            expect(productPage.secondPositionProduct).toHaveTextContaining('Sauce Labs Backpack');
            expect(productPage.thirdPositionProduct).toHaveTextContaining('Sauce Labs Bolt T-Shirt');
            expect(productPage.fourthPositionProduct).toHaveTextContaining('Test.allTheThings() T-Shirt (Red)');
            expect(productPage.fifthPositionProduct).toHaveTextContaining('Sauce Labs Bike Light');
            expect(productPage.sixthPositionProduct).toHaveTextContaining('Sauce Labs Onesie');
        });
    });

    describe('Access to Social Networks', () => {
        it('Should be able to access the Swag Labs Twitter page', () => {
            productPage.twitterLink.waitForClickable();
            productPage.twitterLink.click();
            browser.switchWindow('https://twitter.com/saucelabs');
            expect(browser).toHaveUrl('https://twitter.com/saucelabs');
            browser.pause(2000);
            browser.closeWindow();
            browser.switchWindow('https://www.saucedemo.com/inventory.html');
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        });
        it('Should be able to access the Swag Labs Twitter page', () => {
            productPage.facebookLink.waitForClickable();
            productPage.facebookLink.click();
            browser.switchWindow('https://www.facebook.com/saucelabs');
            expect(browser).toHaveUrl('https://www.facebook.com/saucelabs');
            browser.pause(2000);
            browser.closeWindow();
            browser.switchWindow('https://www.saucedemo.com/inventory.html');
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        });
        it('Should be able to access the Swag Labs Twitter page', () => {
            productPage.linkedInLink.waitForClickable();
            productPage.linkedInLink.click();
            browser.switchWindow('https://www.linkedin.com/company/sauce-labs/');
            expect(browser).toHaveUrl('https://www.linkedin.com/company/sauce-labs/');
            browser.pause(2000);
            browser.closeWindow();
            browser.switchWindow('https://www.saucedemo.com/inventory.html');
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        });
    });
});