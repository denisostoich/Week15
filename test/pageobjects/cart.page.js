const Page = require ('./page');

class cartPage extends Page {
    get continueShopping() { return $("#continue-shopping") }
}

module.exports = new cartPage();