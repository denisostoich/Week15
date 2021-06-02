const Page = require ('./page');

class checkoutPage extends Page {

    get cancelBtn () { return $('#cancel') }

    //Checkout Step One.
    get pageStep1Tittle () { return $('.title') }
    get firstNameInput () { return $('#first-name') }
    get lastNameInput () { return $('#last-name') }
    get postalCodeInput () { return $('#postal-code') }
    get errorValidation() { return $('.error-message-container') }
    get continueBtn () { return $('#continue') }
    get closeErrorBtn () { return $('.error-button') }

    //Checkout Step Two.
    get productPrice () { return $$('.inventory_item_price') }
    get subtotalPrice () { return $('.summary_subtotal_label') }
    get productTax () { return $$('.summary_tax_label') }
    get totalPrice () { return $('.summary_total_label') }
    get finishBtn () { return $('#finish') }

    //Checkout Completed.
    get finishTittle () { return $('.title') }
    get purchaseHeader () { return $('.complete-header') }
    get purchaseText () { return $('.complete-text') }
    get ponyExpressImg () { return $('.pony_express') }
    get backHomeBtn () { return $('#back-to-products') }

    open () {
        return super.open();
    }
}

module.exports = new checkoutPage();