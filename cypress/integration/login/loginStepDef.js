///<reference types="Cypress" />

import loginPage from "../pageObjects/loginPage";
const login = new loginPage();

Given("Navigate to Designmodo Url", () => {
    cy.visit("https://designmodo.com/my-account/sign-in/");
});

When("User enter username and password and click on login button", () => {
    cy.fixture("loginDetails").then(data => {
        login.emailId().type(data.username);
        login.password().type(data.password);
    });
    login.rememberMeUncheck();
    login.agreeCheck();
    login.loginButton();
});

Then("User should successfully logged in", () => {
    cy.url().should('include','my-account');
});