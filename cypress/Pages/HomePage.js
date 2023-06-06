class HomePage{

    get getHeaderMiddle(){
        return cy.get('.header-middle');
    }

    get getSignupLink(){
        return cy.get('.shop-menu > .nav > :nth-child(4)');
    }

    get getDeleteLink(){
        return cy.get('.shop-menu > .nav > :nth-child(5) > a');
    }

}

export default new HomePage();
