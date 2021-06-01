const { describe } = require("mocha");

import { it } from "mocha";

describe('Contact List App', () => {
    it.only('Test Create Valid User', () => {
        cy.createUser('James',  'Bond', 'jim.bond@bond.com', 'JamesBond1');
        // cy.get('[id=error]').contains('User validation failed: email: Email is invalid, password: Path `password` is required.');
        //TODO: Do we want to check all validations?

        // User validation failed: email: Email is invalid, password: Path `password` is required.
    });
    it('Test valid create user', () =>{
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
        // cy.get('[]')
    })
})