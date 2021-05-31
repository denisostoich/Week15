const Page = require ('./page');

class productPage extends Page {
    //Menu Selectors.
    get menuBtn() { return $('#react-burger-menu-btn') }
    get aboutBtn() { return $('#about_sidebar_link') }
    get logoutBtn() { return $('#logout_sidebar_link') }
    get resetBtn() { return $('#reset_sidebar_link') }

    //Add to Cart Buttons.
    get backpackAddCartBtn() { return $('#add-to-cart-sauce-labs-backpack') }
    get bikeLightAddCartBtn() { return $('#add-to-cart-sauce-labs-bike-light') }
    get boltTshirtAddCartBtn() { return $('#add-to-cart-sauce-labs-bolt-t-shirt') }
    get fleeceJacketAddCartBtn() { return $('#add-to-cart-sauce-labs-fleece-jacket') }
    get onesieAddCartBtn() { return $('#add-to-cart-sauce-labs-onesie') }
    get redTshirtAddCartBtn() { return $('#add-to-cart-test.allthethings()-t-shirt-(red)') }

    //Remove from Cart Buttons.
    get backpackRemoveCartBtn() { return $('#remove-sauce-labs-backpack') }
    get bikeLightRemoveCartBtn() { return $('#remove-sauce-labs-bike-light') }
    get boltTshirtRemoveCartBtn() { return $('#remove-sauce-labs-bolt-t-shirt') }
    get fleeceJacketRemoveCartBtn() { return $('#remove-sauce-labs-fleece-jacket') }
    get onesieRemoveCartBtn() { return $('#remove-sauce-labs-onesie') }
    get redTshirtRemoveCartBtn() { return $('#remove-test.allthethings()-t-shirt-(red)') }

    //Products Text Links.
    get backpackTextLink() { return $('.inventory_item_name=Sauce Labs Backpack') }//item_4_title_link
    get bikeLightTextLink() { return $('.inventory_item_name=Sauce Labs Bike Light') }
    get boltTshirtTextLink() { return $('.inventory_item_name=Sauce Labs Bolt T-Shirt') }
    get fleeceJacketTextLink() { return $('.inventory_item_name=Sauce Labs Fleece Jacket') }
    get onesieTextLink() { return $('.inventory_item_name=Sauce Labs Onesie') }
    get redTshirtTextLink() { return $('.inventory_item_name=Test.allTheThings() T-Shirt (Red)') }

    //Products Image Links.
    get backpackImageLink() { return $('#item_4_img_link') }
    get bikeLightImageLink() { return $('#item_0_img_link') }
    get boltTshirtImageLink() { return $('#item_1_img_link') }
    get fleeceJacketImageLink() { return $('#item_5_img_link') }
    get onesieImageLink() { return $('#item_2_img_link') }
    get redTshirtImageLink() { return $('#item_3_img_link') }

    //Products Sort
    get productSortBtn () { return $(".product_sort_container") }
    get productName () { return $(".inventory_item_name") }

    // Products on cart.
    get cartBtn  () { return $$(".shopping_cart_badge") }

    //Buttons
    get twitterLink () { return $("=Twitter") }
    get facebookLink () { return $("=Facebook") }
    get linkedInLink () { return $("=LinkedIn") }

    // Go to cart link button
    get cartBtn () { return $(".shopping_cart_link") }
    get loadedCart () { return $(".shopping_cart_badge") }

    open () {
        return super.open();
    }
    menu () {
        this.menuBtn.click();
    }
    about () {
        this.aboutBtn.click();
    }
    logout () {
        this.logoutBtn.click();
    }
    reset () {
        this.resetBtn.click();
    }
    cart () {
        this.cartBtn.click();
    }
}

module.exports = new productPage();