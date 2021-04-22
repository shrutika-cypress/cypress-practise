// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { italic } from "ansi-styles";

Cypress.Commands.add("LoginIn", () => {
    //cy.viewport(1382,744);
    cy.visit("/"); // It will take default baseUrl
    cy.get("#username").type("shrutikagupta21@gmail.com");
    cy.get("#password").type("demo@1234");
    cy.get(".woocommerce-form__label").click();
    cy.get(":nth-child(4) > label > .element").click();
    cy.get("button[class='button small green pair-button woocommerce-button woocommerce-form-login__submit']").click();
    cy.url().should('include','my-account');
});


