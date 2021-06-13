const testURL = 'https://thinking-tester-contact-list.herokuapp.com/'


/*

localStorage.debug = 'cypress:*'
*/

define('capture a browser event', () => {
    cy.visit(testURL);
    cy.listenTo()
})