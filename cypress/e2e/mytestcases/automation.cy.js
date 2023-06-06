import HomePage from '../../Pages/HomePage'
import { generateRandomName} from './utils'
import { generateLastName} from './utils'
import { generateRandomEmail} from './utils'
import Homepage from './../../Pages/HomePage.js'
import SignUp from '../../Pages/SignUp'
import NewAccout from '../../Pages/NewAccout'
import DeletePage from '../../Pages/DeletePage'

describe('Automation learning',()=>{
    before(()=>{
        console.log('Running')
    })
    beforeEach(()=>{
        cy.visit('https://automationexercise.com/')    
    })
    
    it.only('Signup functionality',()=>{
    
        const first = generateRandomName();
        console.log(first,'_____');
        const last = generateLastName();
        console.log(last,'_____');
        const email = generateRandomEmail();
        console.log(email,'_____');
        Homepage.getHeaderMiddle.should('be.visible');
        Homepage.getSignupLink.should('be.visible').click();
        SignUp.getLoginText.should('have.text','Login to your account').and('be.visible');
        SignUp.getSignUpText.should('have.text','New User Signup!').and('be.visible')
  
        SignUp.getLoginEmail.should('be.visible')
        SignUp.getLoginPassword.should('be.visible')
        SignUp.getLoginBtn.should('be.visible')
  
  
        SignUp.getSignUpName.should('be.visible')
        SignUp.getSignUpEmail.should('be.visible')
        SignUp.getSignUpBtn.should('be.visible')
  
       console.log(first)

        SignUp.getSignUpName.type(first)
        SignUp.getSignUpEmail.type(email)
        SignUp.getSignUpBtn.click()

        SignUp.getSignUpForm.should('be.visible')

        SignUp.getMRType.click()
        SignUp.SignUpPassword.type('Abcd@1234')
        SignUp.getBODDays.type("2")
        SignUp.getBODMonth.type('April')
        SignUp.getBODYear.type('1989')
        SignUp.getSignUpFirstName.type(first)
        SignUp.getSignUpLastName.type(last)
        SignUp.getSignUpCompayName.type("ABCD Consulting")
        SignUp.getSignUpAddressOne.type("ABCD street")
        SignUp.getSignUpAddressTwo.type("ABCD street2")
        SignUp.getSignUpCountry.type('Pakistan',{'force':'enter'})
        SignUp.getSignState.type('Sindh')
        SignUp.getSignUpCity.type('Karachi')
        SignUp.getSignUpZipCode.type('72010')
        SignUp.getSignUpMobileNumber.type('03020323233')
        SignUp.getSignUpCreateAccount.click()

        NewAccout.getAccountHeading.should('have.text','Account Created!')
        .should('be.visible');
        NewAccout.getAccountMessage.should('have.text','Congratulations! Your new account has been successfully created!')
        .should('be.visible');

        NewAccout.getAccountInfo.
        should('have.text','You can now take advantage of member privileges to enhance your online shopping experience with us.')
        .should('be.visible');
        
        NewAccout.getAccountContinueBtn.should('be.visible').click();

        HomePage.getSignupLink.should('be.visible')
        HomePage.getDeleteLink.should('be.visible').click();
        DeletePage.getDeleteHeading.should('be.visible').should('have.text', 'Account Deleted!')
        DeletePage.getDeleteInfo.should('be.visible').and('have.text','Your account has been permanently deleted!')
        DeletePage.getDeleteMsg.should('be.visible').and('have.text','You can create new account to take advantage of member privileges to enhance your online shopping experience with us.')
        DeletePage.getDeleteContiueBtn.should('be.visible').click()

    })

    it('login functionality',()=>{

        cy.get('.header-middle').should('be.visible');
        cy.get('.shop-menu > .nav > :nth-child(4) > a').should('be.visible').click();
        cy.get("div[class='login-form']")
        .find("h2")
        .should('have.text','Login to your account')
        .and('be.visible')
        cy.get('.signup-form > h2').should('have.text','New User Signup!')
        .and('be.visible')

        cy.get("input[data-qa='login-email']").should('be.visible')
        cy.get("input[placeholder='Password']").should('be.visible')
        cy.get('button[data-qa="login-button"]').should('be.visible')


        cy.get("input[data-qa='signup-name']").should('be.visible')
        cy.get("input[data-qa='signup-email']").should('be.visible')
        cy.get("button[data-qa='signup-button']").should('be.visible')

        cy.get("input[data-qa='login-email']").type('shakeel_kashmiri@outlook.com')
        cy.get("input[placeholder='Password']").type('Abcd@1234')
        cy.get('button[data-qa="login-button"]').click();

        cy.get('.shop-menu > .nav > :nth-child(4) > a')
        .should('be.visible').and('have.text',' Logout')
        cy.get('.shop-menu > .nav > :nth-child(5) > a').should('be.visible')
        .and('have.text',' Delete Account')
        cy.get('b').should('be.visible').and('have.text','Shakeel Ahmed')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();


    })

    it('login with incorrect credentials',()=>{

        cy.get('.header-middle').should('be.visible');
        cy.get('.shop-menu > .nav > :nth-child(4) > a').should('be.visible').click();
        cy.get("div[class='login-form']")
        .find("h2")
        .should('have.text','Login to your account')
        .and('be.visible')
        cy.get('.signup-form > h2').should('have.text','New User Signup!')
        .and('be.visible')

        cy.get("input[data-qa='login-email']").should('be.visible')
        cy.get("input[placeholder='Password']").should('be.visible')
        cy.get('button[data-qa="login-button"]').should('be.visible')


        cy.get("input[data-qa='signup-name']").should('be.visible')
        cy.get("input[data-qa='signup-email']").should('be.visible')
        cy.get("button[data-qa='signup-button']").should('be.visible')

        cy.get("input[data-qa='login-email']").type('shakeel_kashmiri@outlook.com')
        cy.get("input[placeholder='Password']").type('Abcd@123456')
        cy.get('button[data-qa="login-button"]').click();

        cy.get('.login-form > form > p').should('be.visible')
        .and('have.text','Your email or password is incorrect!')
        
})

it('Sign up with already register email',()=>{

    cy.get('.header-middle').should('be.visible');
    cy.get('.shop-menu > .nav > :nth-child(4) > a').should('be.visible').click();
    cy.get("div[class='login-form']")
    .find("h2")
    .should('have.text','Login to your account')
    .and('be.visible')
    cy.get('.signup-form > h2').should('have.text','New User Signup!')
    .and('be.visible')

    cy.get("input[data-qa='login-email']").should('be.visible')
    cy.get("input[placeholder='Password']").should('be.visible')
    cy.get('button[data-qa="login-button"]').should('be.visible')


    cy.get("input[data-qa='signup-name']").should('be.visible').type('Ahmed')
    cy.get("input[data-qa='signup-email']").should('be.visible').type('shakeel_kashmiri@outlook.com')
    cy.get("button[data-qa='signup-button']").should('be.visible').click()

    cy.get('.signup-form > form > p').should('be.visible')
    .and('have.text','Email Address already exist!')
})

it('Test Case 6: Contact Us Form',()=>{

    cy.get('.header-middle').should('be.visible');
    cy.get('.shop-menu > .nav > :nth-child(8) > a').should('be.visible').click();
    cy.get('.col-sm-12 > .title').should('be.visible').and('have.text','Contact Us')
    cy.get('div.contact-form > :nth-child(1)').should('be.visible').and('have.text','Note: Below contact form is for testing purpose.')
    cy.get('div.contact-form > .title').should('be.visible').and('have.text','Get In Touch')
    cy.get('[data-qa="name"]').type('Shakeel')
    cy.get('[data-qa="email"]').type('shakeel_kashmiri@outlook.com')
    cy.get('[data-qa="subject"]').type('Hello One')
    cy.get('[data-qa="message"]').type('Hello Onne')
    //cy.get(':nth-child(6) > .form-control')
    cy.get('[data-qa="submit-button"]').click();
    cy.get('.status').should('be.visible').and('have.text','Success! Your details have been submitted successfully.')
    cy.get('.nav > :nth-child(1) > a').click();
})

it('Test Case 7: Verify Test Cases Page',()=>{

    cy.get('.header-middle').should('be.visible');
    cy.get('.shop-menu > .nav > :nth-child(5) > a').should('be.visible').click();
    cy.get('b').should('be.visible').and('have.text','Test Cases')
})

it('Test Case 8: Verify All Products and product detail page',()=>{

    cy.get('.header-middle').should('be.visible');
    cy.get('.shop-menu > .nav > :nth-child(2) > a').should('be.visible').click();
    cy.get('.title').should('be.visible').and('have.text','All Products')
    cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').should('be.visible').click()
    cy.get('.product-information').should('be.visible')
    cy.get('.product-information > h2').should('be.visible')
    cy.get('.product-information > :nth-child(3)').should('be.visible')
    cy.get('[src="/static/images/product-details/rating.png"]').should('be.visible')
    cy.get(':nth-child(5) > span').should('be.visible')
    cy.get('label').should('be.visible')
    cy.get('.product-information > :nth-child(6)').should('be.visible')
    cy.get('.product-information > :nth-child(7)').should('be.visible')
    cy.get('.product-information > :nth-child(8)').should('be.visible')
    cy.get('.view-product > img').should('be.visible')
    cy.get(':nth-child(5) > .btn').should('be.visible').and('have.text','Add to cart')
})


it('Test Case 9: Search Product',()=>{

    cy.get('.header-middle').should('be.visible');
    cy.get('.shop-menu > .nav > :nth-child(2) > a').should('be.visible').click();
    cy.get('.title').should('be.visible').and('have.text','All Products')
    cy.get('#search_product').type('Blue top')
    cy.get('#submit_search').click()
    cy.get('.title').should('be.visible').and('have.text','Searched Products')
    cy.get('.productinfo > img').should('be.visible')
    cy.get('.productinfo > h2').should('be.visible')
    cy.get('.productinfo > p').should('be.visible')
    cy.get('.productinfo > .btn').should('be.visible')
    cy.get('.choose > .nav > li > a').should('be.visible')

})

it('Test Case 10: Verify Subscription in home page',()=>{

    cy.get('.header-middle').should('be.visible');
    cy.scrollTo('bottom')
    cy.get('.single-widget > h2').should('be.visible').and('have.text','Subscription')
    cy.get('#susbscribe_email').type('abcd@gmail.com')
    cy.get('#subscribe > .fa').should('be.visible').click()
    cy.get('.alert-success').should('be.visible').and('have.text','You have been successfully subscribed!')


})

it('Test Case 11: Verify Subscription in Cart page',()=>{

    cy.get('.header-middle').should('be.visible');
    cy.get('.shop-menu > .nav > :nth-child(3) > a').should('be.visible').click();
    cy.scrollTo('bottom')
    cy.get('.single-widget > h2').should('be.visible').and('have.text','Subscription')
    cy.get('#susbscribe_email').type('abcd@gmail.com')
    cy.get('#subscribe > .fa').should('be.visible').click()
    cy.get('.alert-success').should('be.visible').and('have.text','You have been successfully subscribed!')


})

it('Test Case 12: Add Products in Cart',()=>{

    cy.get('.header-middle').should('be.visible');
    cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    
    cy.get('.modal-title').should('be.visible').and('have.text','Added!')
    cy.get('.modal-body > :nth-child(1)').should('be.visible').and('have.text','Your product has been added to cart.')
    
    cy.get('.modal-footer > .btn').should('be.visible').click()
    cy.get('[style="height: auto !important; min-height: 0px !important;"] > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    cy.get('u').should('be.visible').and('have.text','View Cart').click()

    cy.get('#product-1 > .cart_price > p').should('be.visible').and('have.text','Rs. 500')
    cy.get('#product-2 > .cart_price > p').should('be.visible').and('have.text','Rs. 400')
})


it('Test Case 13: Verify Product quantity in Cart',()=>{

    cy.get('.header-middle').should('be.visible');
    cy.get(':nth-child(6) > .product-image-wrapper > .choose > .nav > li > a').click();
    cy.get('.product-information > h2').should('be.visible').and('have.text','Stylish Dress');
    cy.get(':nth-child(5) > span').should('be.visible').and('have.text','Rs. 1500');
    cy.get('#quantity').clear().type("4");
    cy.get(':nth-child(5) > .btn').click();
    cy.get('u').should('be.visible').and('have.text','View Cart').click()
    cy.get('.disabled').should('be.visible').and('have.text','4')
    cy.get('.cart_total_price').should('be.visible').and('have.text','Rs. 6000')

})

it('Test Case 14: Place Order: Register while Checkout',()=>{


    const first = generateRandomName();
    console.log(first,'_____');
    const last = generateLastName();
    console.log(last,'_____');
    const email = generateRandomEmail();
    console.log(email,'_____');

    cy.get('.header-middle').should('be.visible');
    cy.get(':nth-child(6) > .product-image-wrapper > .choose > .nav > li > a').click();
    cy.get('.product-information > h2').should('be.visible').and('have.text','Stylish Dress');
    cy.get(':nth-child(5) > span').should('be.visible').and('have.text','Rs. 1500');
    cy.get('#quantity').clear().type("4");
    cy.get(':nth-child(5) > .btn').click();
    cy.get('u').should('be.visible').and('have.text','View Cart').click()
    cy.get('.col-sm-6 > .btn').should('be.visible');
    cy.get('.col-sm-6 > .btn').click();
    cy.get('.modal-body > :nth-child(2) > a > u').click();

    cy.get("input[data-qa='signup-name']").type(first)
    cy.get("input[data-qa='signup-email']").type(email)
    cy.get("button[data-qa='signup-button']").click()

    cy.get("div[class='login-form']").should('be.visible')

    cy.get(':nth-child(3) > .top').click()
    cy.get('[data-qa="password"]').type('Abcd@1234')
    cy.get('[data-qa="days"]').type("2")
    cy.get('[data-qa="months"]').type('April')
    cy.get('[data-qa="years"]').type('1989')
    cy.get('[data-qa="first_name"]').type(first)
    cy.get('[data-qa="last_name"]').type(last)
    cy.get('[data-qa="company"]').type("ABCD Consulting")
    cy.get('[data-qa="address"]').type("ABCD street")
    cy.get('[data-qa="address2"]').type("ABCD street2")
    cy.get('[data-qa="country"]').type('Pakistan',{'force':'enter'})
    cy.get('[data-qa="state"]').type('Sindh')
    cy.get('[data-qa="city"]').type('Karachi')
    cy.get('[data-qa="zipcode"]').type('72010')
    cy.get('[data-qa="mobile_number"]').type('03020323233')
    cy.get('[data-qa="create-account"]').click()

    cy.get('b').should('have.text','Account Created!')
    .should('be.visible')
    cy.get('.col-sm-9 > :nth-child(2)').
    should('have.text','Congratulations! Your new account has been successfully created!')
    .should('be.visible')
    cy.get('.col-sm-9 > :nth-child(3)').
    should('have.text','You can now take advantage of member privileges to enhance your online shopping experience with us.')
    .should('be.visible')
    cy.get('[data-qa="continue-button"]').
    should('be.visible').click();

    cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
    cy.get('.col-sm-6 > .btn').should('be.visible').click();
    cy.get(':nth-child(7) > .btn').click();

    cy.get('[data-qa="name-on-card"]').type(first);
    cy.get('[data-qa="card-number"]').type('American');
    cy.get('[data-qa="cvc"]').type('311');
    cy.get('[data-qa="expiry-month"]').type('12');
    cy.get('[data-qa="expiry-year"]').type('2025');

    cy.get('[data-qa="pay-button"]').click();

    cy.get('[data-qa="order-placed"] > b').should('be.visible')
    .and('have.text','Order Placed!')
    cy.get('.col-sm-9 > p').should('be.visible')
    .and('have.text','Congratulations! Your order has been confirmed!')
    cy.get('[data-qa="continue-button"]').should('be.visible')
    .click();
    cy.get('.shop-menu > .nav > :nth-child(5) > a').should('be.visible').click();
    cy.get('b').should('be.visible').should('have.text', 'Account Deleted!')
    cy.get('.col-sm-9 > :nth-child(2)').should('be.visible').and('have.text','Your account has been permanently deleted!')
    cy.get('.col-sm-9 > :nth-child(3)').should('be.visible').and('have.text','You can create new account to take advantage of member privileges to enhance your online shopping experience with us.')
    cy.get('[data-qa="continue-button"]').should('be.visible').click()



 

})


it('Test Case 15: Place Order: Register before Checkout',()=>{


    const first = generateRandomName();
    console.log(first,'_____');
    const last = generateLastName();
    console.log(last,'_____');
    const email = generateRandomEmail();
    console.log(email,'_____');

    cy.get('.header-middle').should('be.visible');

    /**Creating a new account*/
    cy.get('.shop-menu > .nav > :nth-child(4) > a').should('be.visible').click();
    cy.get("input[data-qa='signup-name']").type(first)
    cy.get("input[data-qa='signup-email']").type(email)
    cy.get("button[data-qa='signup-button']").click()
    cy.get("div[class='login-form']").should('be.visible')
    cy.get(':nth-child(3) > .top').click()
    cy.get('[data-qa="password"]').type('Abcd@1234')
    cy.get('[data-qa="days"]').type("2")
    cy.get('[data-qa="months"]').type('April')
    cy.get('[data-qa="years"]').type('1989')
    cy.get('[data-qa="first_name"]').type(first)
    cy.get('[data-qa="last_name"]').type(last)
    cy.get('[data-qa="company"]').type("ABCD Consulting")
    cy.get('[data-qa="address"]').type("ABCD street")
    cy.get('[data-qa="address2"]').type("ABCD street2")
    cy.get('[data-qa="country"]').type('Pakistan',{'force':'enter'})
    cy.get('[data-qa="state"]').type('Sindh')
    cy.get('[data-qa="city"]').type('Karachi')
    cy.get('[data-qa="zipcode"]').type('72010')
    cy.get('[data-qa="mobile_number"]').type('03020323233')
    cy.get('[data-qa="create-account"]').click()
    cy.get('b').should('have.text','Account Created!')
    .should('be.visible')
    cy.get('.col-sm-9 > :nth-child(2)').
    should('have.text','Congratulations! Your new account has been successfully created!')
    .should('be.visible')
    cy.get('.col-sm-9 > :nth-child(3)').
    should('have.text','You can now take advantage of member privileges to enhance your online shopping experience with us.')
    .should('be.visible')
    cy.get('[data-qa="continue-button"]').
    should('be.visible').click();
    cy.get(':nth-child(6) > .product-image-wrapper > .choose > .nav > li > a').click();
    cy.get('.product-information > h2').should('be.visible').and('have.text','Stylish Dress');
    cy.get(':nth-child(5) > span').should('be.visible').and('have.text','Rs. 1500');
    cy.get('#quantity').clear().type("4");
    cy.get(':nth-child(5) > .btn').click();
    cy.get('u').should('be.visible').and('have.text','View Cart').click()
    cy.get('.col-sm-6 > .btn').should('be.visible');
    cy.get('.col-sm-6 > .btn').click();
    cy.get(':nth-child(7) > .btn').click();
    cy.get('[data-qa="name-on-card"]').type(first);
    cy.get('[data-qa="card-number"]').type('American');
    cy.get('[data-qa="cvc"]').type('311');
    cy.get('[data-qa="expiry-month"]').type('12');
    cy.get('[data-qa="expiry-year"]').type('2025');
    cy.get('[data-qa="pay-button"]').click();
    cy.get('[data-qa="order-placed"] > b').should('be.visible')
    .and('have.text','Order Placed!')
    cy.get('.col-sm-9 > p').should('be.visible')
    .and('have.text','Congratulations! Your order has been confirmed!')
    cy.get('[data-qa="continue-button"]').should('be.visible')
    .click();
    cy.get('.shop-menu > .nav > :nth-child(5) > a').should('be.visible').click();
    cy.get('b').should('be.visible').should('have.text', 'Account Deleted!')
    cy.get('.col-sm-9 > :nth-child(2)').should('be.visible').and('have.text','Your account has been permanently deleted!')
    cy.get('.col-sm-9 > :nth-child(3)').should('be.visible').and('have.text','You can create new account to take advantage of member privileges to enhance your online shopping experience with us.')
    cy.get('[data-qa="continue-button"]').should('be.visible').click()

})


it('Test Case 16: Place Order: Login before Checkout',()=>{

    cy.get('.header-middle').should('be.visible');
    /**Clicking on sing up link*/
    cy.get('.shop-menu > .nav > :nth-child(4) > a').should('be.visible').click();
    
    /**Given user name and password**/
    cy.get("input[data-qa='login-email']").type('shakeel_kashmiri@outlook.com')
    cy.get("input[placeholder='Password']").type('Abcd@1234')
    cy.get('button[data-qa="login-button"]').click();

    cy.get(':nth-child(6) > .product-image-wrapper > .choose > .nav > li > a').click();
    cy.get('.product-information > h2').should('be.visible').and('have.text','Stylish Dress');
    cy.get(':nth-child(5) > span').should('be.visible').and('have.text','Rs. 1500');
    cy.get('#quantity').clear().type("4");
    cy.get(':nth-child(5) > .btn').click();
    cy.get('u').should('be.visible').and('have.text','View Cart').click()
    cy.get('.col-sm-6 > .btn').should('be.visible');
    cy.get('.col-sm-6 > .btn').click();
    cy.get(':nth-child(7) > .btn').click();
    cy.get('[data-qa="name-on-card"]').type('ABCDD');
    cy.get('[data-qa="card-number"]').type('American');
    cy.get('[data-qa="cvc"]').type('311');
    cy.get('[data-qa="expiry-month"]').type('12');
    cy.get('[data-qa="expiry-year"]').type('2025');
    cy.get('[data-qa="pay-button"]').click();
    cy.get('[data-qa="order-placed"] > b').should('be.visible')
    .and('have.text','Order Placed!')
    cy.get('.col-sm-9 > p').should('be.visible')
    .and('have.text','Congratulations! Your order has been confirmed!')
    cy.get('[data-qa="continue-button"]').should('be.visible')
    .click();

})

it('Test Case 17: Remove Products From Cart',()=>{

    cy.get('.header-middle').should('be.visible');
    cy.get(':nth-child(6) > .product-image-wrapper > .choose > .nav > li > a').click();
    cy.get('.product-information > h2').should('be.visible').and('have.text','Stylish Dress');
    cy.get(':nth-child(5) > span').should('be.visible').and('have.text','Rs. 1500');
    cy.get('#quantity').clear().type("4");
    cy.get(':nth-child(5) > .btn').click();
    cy.get('u').should('be.visible').and('have.text','View Cart').click()
    cy.get('.col-sm-6 > .btn').should('be.visible');
    cy.get('.cart_quantity_delete').should('be.visible').click();
    cy.get('#empty_cart').should('be.visible');
})

it('Test Case 18: View Category Products',()=>{

    cy.get('.header-middle').should('be.visible');
    cy.get(':nth-child(1) > .panel-heading > .panel-title > a').click();
    cy.get('#Women > .panel-body > ul > :nth-child(1)').click();
    cy.get('.title').should('be.visible');
    cy.get(':nth-child(2) > .panel-heading > .panel-title > a').click();
    cy.get('#Men > .panel-body > ul > :nth-child(1) > a').click();
})






})