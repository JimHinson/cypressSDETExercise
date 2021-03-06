const { describe } = require("mocha");
// const requiredProperties = req

import { it } from "mocha";

const testURL = 'https://thinking-tester-contact-list.herokuapp.com/';
const firstName = "George";
const lastName = "Jetson";
const email = "george.jetson@thejetsons.com"
const pwd = "password";

describe('Sign up', () => {
    var userData;
    //tests should not depend on each other
    //instead, create the data in before()
    before( function() { 
        cy.createUser(firstName, lastName, email, pwd);   
        //ignore error if user already exists
    })              

    it('Skip login page', () => {
        cy.intercept({
            url: '*herokuapp.com',
        },
        [
        ])
    })
    

    it('Test Create Valid Unique User', () => {
        var tempMail = 'jim.bond' + Date.now ().toString () + '@bond.com';
        cy.createUser('James',  'Bond', tempMail, 'JamesBond1');
        cy.get('[id=error]').should('not.exist');
    });
   
    it('Test create invalid user', () =>{
        cy.visit(testURL);
        cy.createUser('George', 'Jetson', 'a', 'b');
        cy.get('[id=error]').contains('User validation failed: email: Email is invalid, password: Path `password` (`b`) is shorter than the minimum allowed length (7).');
    });

    it('Should log in', () => {
        cy.visit(testURL);
        cy.login(email, pwd);
        cy.get('[id=error]').should('not.exist'); //duplicate email error
    })
})


describe('Contact Creation', () => {
    before("Log in once to save time", () => {
        cy.visit(testURL);
        cy.login('user@user.com', 'password');
        cy.get('[id=error]').should('not.exist');
    })

    function myFunction()  {
        console.log('my function');
    }
    
    it('Should create contact', ()  => {
        // cy.createContact();
        cy.createContact();
        cy.get('[id=error]').should('not.exist');
        cy.get('[id=myTable]').contains('First Last');
        cy.get('[id=error]')
            .should('not.exist');
    })

    it('Should not allow duplicates', () => {
        cy.createContact('George', 'Jetson');
        cy.createContact();
        cy.get('[id=error]')
            .should('exist');
    })
    after("log out", ()=> {
        cy.get(['#logout']).click;
    })
    
})