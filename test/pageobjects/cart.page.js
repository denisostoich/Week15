const Page = require ('./page');

class cartPage extends Page {
    // Cart Buttons.
    get listProductCart () { return $('.cart_list') }
    get cartItem () { return $$('.cart_item') }
    get loadedCart () { return $('.shopping_cart_badge') }
    get continueShoppingBtn () { return $('#continue-shopping') }
    get checkoutBtn () { return $('#checkout') }

    //Remove from Cart Buttons.
    get backpackRemoveCartBtn() { return $('#remove-sauce-labs-backpack') }
    get bikeLightRemoveCartBtn() { return $('#remove-sauce-labs-bike-light') }
    get boltTshirtRemoveCartBtn() { return $('#remove-sauce-labs-bolt-t-shirt') }
    get fleeceJacketRemoveCartBtn() { return $('#remove-sauce-labs-fleece-jacket') }
    get onesieRemoveCartBtn() { return $('#remove-sauce-labs-onesie') }
    get redTshirtRemoveCartBtn() { return $('[name="remove-test.allthethings()-t-shirt-(red)"]') }

    //Checkout Step One.
    get firstNameInput () { return $('#first-name') }
    get lastNameInput () { return $('#last-name') }
    get postalCodeInput () { return $('#postal-code') }
    get errorValidation() { return $('h3') }
    get continueBtn () { return $('#continue') }

    //Checkout Step Two.
    get firstNameInput () { return $('#first-name') }
    get lastNameInput () { return $('#last-name') }
    get postalCodeInput () { return $('#postal-code') }


    open () {
        return super.open();
    }
}

module.exports = new cartPage();