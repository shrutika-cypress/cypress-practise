class loginPage{
    emailId(){
        return cy.get("#username");
    }
    password(){
        return cy.get("#password");
    }
    loginButton(){
        cy.get("button[class='button small green pair-button woocommerce-button woocommerce-form-login__submit']").click();
       // cy.debug();
    }
    rememberMeUncheck(){
        cy.get(".woocommerce-form__label").click();
    }
    agreeCheck(){
        cy.get(":nth-child(4) > label > .element").click();
    }
}
 export default loginPage;