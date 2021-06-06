const { describe } = require("mocha");

import { it } from "mocha";

const testURL = 'https://thinking-tester-contact-list.herokuapp.com/';

describe('Sign up', () => {
    //tests should not depend on each other
    //instead, create the data in before()
    //this will skip the other tests which would fail anyway
    before( () => {
        cy.createUser('A', 'valid', 'user@user.com', 'password');
        //ignore any errors
        // cy.get('[id=error]').should('not.exist'); //duplicate email error
    })});

    it.skip('Test Create Valid User', () => {
        cy.createUser('James',  'Bond', 'jim.bond@bond.com', 'JamesBond1');
        cy.get('[id=error]').should('not.exist'); //duplicate email error

        // cy.get('[id=error]').contains('User validation failed: email: Email is invalid, password: Path `password` is required.');
        //TODO: Do we want to check all validations?
        // User validation failed: email: Email is invalid, password: Path `password` is required.
    });
    
    it('Test create invalid user', () =>{
        cy.visit(testURL);
        cy.createUser('George', 'Jetson', 'a', 'b');
        // cy.get('[]');
    });


describe.skip('Log in', () => {
    it('Should log in', () => {
        cy.visit(testURL);
        cy.login('user@user.com', 'password');
        cy.get('[id=error]').should('not.exist'); //duplicate email error

    })
})

describe('Contact Creation', () => {
    before("Log in once to save time", () => {
        cy.visit(testURL);
        cy.login('user@user.com', 'password');
        cy.get('[id=error]').should('not.exist');
    })

    it('Should create contact', ()  => {
        // cy.visit(testURL);
        // cy.login('user@user.com', 'password');
        // cy.checkForError();
        cy.get('[id=error]')
        .should('not.exist');
        cy.get('[id=add-contact]').click();
        cy.get('[id=submit]').click();
        cy.get('[id=error]').should('exist');
        cy.get('[id=firstName]').type('First');
        cy.get('[id=lastName]').type('Last');
        cy.get('[id=submit]').click();
        cy.get('[id=error]').should('not.exist');
        cy.get('[id=myTable]').contains('First Last');
    })
    
})