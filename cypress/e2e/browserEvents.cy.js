const testURL = 'https://thinking-tester-contact-list.herokuapp.com/'


/*
https://docs.cypress.io/api/events/catalog-of-events#Logging-All-Events
Cypress uses the debug node module for both the back end server process, and for everything running in the browser (called the driver).

If you'd like to see (the huge) stream of events that Cypress emits you can pop open your Dev Tools and write this line in the console.
localStorage.debug = 'cypress:*'

*/

define('capture a browser event', () => {
    it('capture an event', () => {
        cy.visit(testURL);
        // cy.listenTo()
    
    })
})