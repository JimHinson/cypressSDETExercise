import { cyan } from "color-name"

const url = 'https://thinking-tester-contact-list.herokuapp.com/'

describe('Contact List App', () => {
    it.only('Test Create Valid User', () => {
        cy.visit(url);
        // cy.fixture('TestData/users.json').as('loginCredentials');
        cy.fixture('example.json').as('loginCredentials');
        cy.get('@loginCredentials').then((user) => {
            var data = item => (item.UserType == UserTypeValue);
            var propValue;
            cy.log('abc');
            for (var propname in data[0]) {
                cy.log('starting')
                cy.log(propname, propValue);
                cy.log('ending');
            }
        })
    })
})