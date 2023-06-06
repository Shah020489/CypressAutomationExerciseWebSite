class SignUp{
    get getLoginText(){
        return cy.get("div[class='login-form']").find("h2");
    }

    get getSignUpText(){
        return cy.get('.signup-form > h2');
    }

    get getLoginEmail(){
        return cy.get("input[data-qa='login-email']")
    }

    get getLoginPassword(){
        return cy.get("input[placeholder='Password']")
    }

    get getLoginBtn(){
        return cy.get('button[data-qa="login-button"]')
    }

    get getSignUpName(){
        return cy.get("input[data-qa='signup-name']");
    }

    get getSignUpEmail(){
        return cy.get("input[data-qa='signup-email']");
    }

    get getSignUpBtn(){
        return cy.get("button[data-qa='signup-button']");
    }

    get getSignUpForm(){
        return cy.get("div[class='login-form']");
    }

    get getMRType(){
        return cy.get(':nth-child(3) > .top');
    }

    get SignUpPassword(){
        return cy.get('[data-qa="password"]')
    }

    get getBODDays(){
        return cy.get('[data-qa="days"]');
    }

    get getBODMonth(){
        return cy.get('[data-qa="months"]');
    }

    get getBODYear(){
        return cy.get('[data-qa="years"]');
    }

    get getSignUpFirstName(){
        return cy.get('[data-qa="first_name"]');
    }

    get getSignUpLastName(){
        return cy.get('[data-qa="last_name"]');
    }
    
    get getSignUpCompayName(){
        return cy.get('[data-qa="company"]');
    }
    get getSignUpAddressOne(){
        return cy.get('[data-qa="address"]');
    }
    get getSignUpAddressTwo(){
        return cy.get('[data-qa="address2"]');
    }
    get getSignUpCountry(){
        return cy.get('[data-qa="country"]');
    }
    get getSignState(){
        return cy.get('[data-qa="state"]');
    }
    get getSignUpCity(){
        return cy.get('[data-qa="city"]');
    }
    get getSignUpZipCode(){
        return cy.get('[data-qa="zipcode"]');
    }
    get getSignUpMobileNumber(){
        return cy.get('[data-qa="mobile_number"]');
    }
    get getSignUpCreateAccount(){
        return cy.get('[data-qa="create-account"]');
    }


}



export default new SignUp();