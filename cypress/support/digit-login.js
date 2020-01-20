
Cypress.Commands.add('navigate', (device, url) => {

  switch(device) {
    case 'Desktop':
        cy.viewport(1024, 768) // Windows PC
      break;
    case 'Laptop':
        cy.viewport(1280, 800) // macbook-13
      break;
    default: //mobile
        cy.viewport('iphone-6+')  //360x760   iPhone 6+ 414x736 
  }
  cy.visit(`${url}`)
})

Cypress.Commands.add('citizenChooseLanguage', (language) => {
  cy.url().should('include', '/citizen')
  cy.contains('English').then (() => {
      switch(language) {
          case 'Local':
              cy.get('#button-item-2').click().end()
            break;
          case 'Hindi':
              cy.get('#button-item-1').click().end()
            break;
          default: //English
              cy.get('#button-item-0').click().end()
      }

      cy.get('.button-label-container').then(($continueBtn) => {
          $continueBtn.click().end() 
      })
  })  
  cy.url().should('include', '/citizen/user/register')
})

Cypress.Commands.add('citizenLogin', (mobileNumber, otp) => {
  cy.contains('REGISTER').then (() => {
      cy.get('#otp-resend').click().end()
      cy.url().should('include', '/citizen/user/login') 
  })

  cy.contains('LOGIN').then (() => {
      cy.get('#person-phone').type(mobileNumber) //TestData['default'].mobileNumber)
      cy.get('#login-submit-action').click().end() 
      cy.url().should('include', '/citizen/user/otp')
      cy.wait(2000) 
  })

  cy.contains('ENTER OTP').then (() => {
      cy.get('.textfield > #otp').type(otp) //TestData['default'].mobileOtp)

      cy.server()
      cy.route({ method: 'POST', url: '/user/oauth/token'}).as('apiCheckOAUTH')

      cy.get('#otp-start').click().end() 

      cy.wait('@apiCheckOAUTH').then((xhr) => {
          expect(xhr.status).to.eq(200) //xhr.response.status.to.eq(200)
          expect(xhr.duration).to.be.least(200).and.most(500) //Performance Test
          expect(xhr.responseBody).to.have.property('access_token')
          console.log(xhr.responseBody.userName)
      })
          cy.server({ enable: false })  
      })   
})


// cy.exec(`echo ${JSON.stringify(xhr.responseBody)} >cypress/fixtures/comment.json`)
// cy.fixture('comment.json').should('deep.eq', xhr.responseBody)