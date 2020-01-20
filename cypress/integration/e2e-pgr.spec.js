import TestData from '../fixtures/testData';
const config = require('../../config').get(Cypress.env('testenv'));

describe('mSeva mobile', () => {   
    before('Navigate to mSeva URL=>Language=>login',() => {
        cy.navigate(TestData['dev'].device, config.appUrl)
        cy.citizenChooseLanguage(TestData['dev'].language)
        cy.citizenLogin(TestData['dev'].mobileNumber, TestData['dev'].mobileOtp)       
    })

    it('Check PGR E2E flow',() => {
        
    })

})



// ------- Triggering XHR Manually
// const xhr = new XMLHttpRequest

// xhr.open('GET', '/TestData/1' )

// xhr.onload = function () {
//   const token = this.getResponseHeader('x-token')

//   console.log(token) // => abc-123-foo-bar
// }

// xhr.send()


// ---- Read multiple URL

// cy.wait(['@getTestData', '@getActivities', '@getComments']).then((xhrs) => {
//     // xhrs will now be an array of matching XHR's
//     // xhrs[0] <-- getTestData
//     // xhrs[1] <-- getActivities
//     // xhrs[2] <-- getComments
// })