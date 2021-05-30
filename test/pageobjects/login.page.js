const Page = require('./page');

class loginPage extends Page {
    get username () { return $('#user-name') }
    get password () { return $('#password') }
    get loginBtn () { return $('#login-button') }
    get loginError() { return $('h3') }
    get errorBtn() { return $('.error-button') }

    open () {
        return super.open();
    }
    submit () {
        this.loginBtn.click();
    }
    reset () {
        this.resetBtn.click();
    }
}

module.exports = new loginPage();