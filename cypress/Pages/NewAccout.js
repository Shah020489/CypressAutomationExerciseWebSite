class NewAccount{

    get getAccountHeading(){
        return cy.get('b');
    }

    get getAccountMessage(){
        return cy.get('.col-sm-9 > :nth-child(2)');
    }

    get getAccountInfo(){
        return cy.get('.col-sm-9 > :nth-child(3)');
    }

    get getAccountContinueBtn(){
        return cy.get('[data-qa="continue-button"]');
    }
}

export default new NewAccount();