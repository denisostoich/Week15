const Page = require('./page');

class loginPage extends Page {
    get username () { return $('#user-name') }
    get password () { return $('#password') }
    get loginBtn () { return $('#login-button') }
    get loginError() { return $('h3') }
    get errorBtn() { return $('.error-button') }
    get menuBtn() { return $('#react-burger-menu-btn') }
    get logoutBtn() { return $('#logout_sidebar_link') }

    open () {
        return super.open();
    }
    submit () {
        this.loginBtn.click();
    }
    menu () {
        this.menuBtn.click();
    }
    logout () {
        this.logoutBtn.click();
    }
    /*autocompleteOff () {
        this.attr('autocomplete', 'off');
    }*/
}

module.exports = new loginPage();