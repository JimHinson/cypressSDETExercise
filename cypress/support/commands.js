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
Cypress.Commands.add('createUser', (firstName, lastName, email, password) => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
    cy.get('[id=signup]').click();
    cy.get('[id=firstName]').type(firstName);
    cy.get('[id=lastName]').type(lastName);
    cy.get('[id=email]').type(email);
    cy.get('[id=password]').type(password);
    cy.get('[id=submit]').click();


});