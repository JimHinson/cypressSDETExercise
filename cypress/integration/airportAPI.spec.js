const myToken = 'iBytKTc4KaiRmBcTs7soSxus';
const token = "iBytKTc4KaiRmBcTs7soSxus";
const authorization = `bearer ${ token }`;

const { describe } = require("mocha");

import { it } from "mocha";

const testURL = 'https://airportgap.dev-tester.com/api';
                 //'https://airportgap.dev-tester.com/api'
const requestHeader = "Authorization: Bearer token=iBytKTc4KaiRmBcTs7soSxus";

describe('Testing the AirplaneAPI App', () => {

    it('GET Papua New Guine airport in Madang',()=>{
        var user = {
            "name": "Vandana Yadav",
            "job": "QA"
        }
        var testFavorites = testURL + "/favorites";
        const options = {
            method: 'GET',
            url: 'https://airportgap.dev-tester.com/api/airports/MAG',
            headers: {
                authorization,
            },
            // log: true
            };
            cy.request(options).then((response) => {
                cy.expect(response.status).to.eq(200)
                cy.expect(response).to.have.property('headers');
                cy.expect(response).to.have.property('body')
                .to.have.property('data')
                .to.have.property('attributes')
                // .to.have.property
                .property('city')
                .equals('Madang')
            })         
            
        },
    );



    //https://airportgap.dev-tester.com/api/airports/distance
    it.skip('POST Get distance', () => {
        var testFavorites = testURL + "/airports/distance";
        const testHeaders = authorization + " -dfrom=GOH&to=PFJ"
        const options = {
            method: 'POST',
            url: 'https://airportgap.dev-tester.com/api/airports/distance',
            headers: {
                testHeaders,
            },
        };
        cy.request(options).then((response) => {
            cy.expect(response.status).to.eq(200)
        })
        }
    )

    it.skip('PUT ')

    it.skip('PATCH Get favorites', () => {
        var testFavorites = testURL + "/airports/distance";
        const headers = authorization + " -dfrom=GOH&to=NRT"
        const options = {
            method: 'POST',
            url: 'https://airportgap.dev-tester.com/api/airports/distance',
            headers: {
                headers
            },
        };
        cy.request(options).then((response) => {
            cy.expect(response.status).to.eq(200)
        })}

    )
    
    it.skip('DELETE favorite', () => {
        var testFavorites = testURL + "/airports/distance";
        const headers = authorization + " -dfrom=GOH&to=NRT"
        const options = {
            method: 'POST',
            url: 'https://airportgap.dev-tester.com/api/airports/distance',
            headers: {
                headers
            },
        };
        cy.request(options).then((response) => {
            cy.expect(response.status).to.eq(200)
        })}

    )

})