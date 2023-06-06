class DeletePage{
    get getDeleteHeading(){
        return cy.get('b');
    }

    get getDeleteInfo(){
        return cy.get('.col-sm-9 > :nth-child(2)');
    }

    get getDeleteMsg(){
        return cy.get('.col-sm-9 > :nth-child(3)');
    }

    get getDeleteContiueBtn(){
        return cy.get('[data-qa="continue-button"]');
    }

}

export default new DeletePage();