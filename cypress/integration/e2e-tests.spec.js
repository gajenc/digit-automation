const users = require('../fixtures/users');
const config = require('../../config').get(Cypress.env('testenv'));

describe('About You E2E Tests', () => {
      
    before('Navigate to LeadCycle URL',() => {
        cy.viewport('iphone-6+')
        cy.visit(`${config.appUrl}`)
        cy.contains('ABOUT YOU')  // Quick check if the ui elements are loaded
        cy.get('.CookieBanner__AbsoluteContainer-sc-1xf3w9f-2 > .AyIcon-rsvx9p-0').click().end()
        

        // Check the XHR response for the successful loading of the categories on the Home page
        cy.server()
        cy.route('**/v1/categories/').as('getCategories')
        cy.wait('@getCategories', {timeout: 250000})
        cy.server({ enable: false })

        //cy.get('.AppInstallTeaser__Text-g5wv6f-2').scrollIntoView()
        //cy.get('.AppDownloadTeaser__DownloadAppButton-hcwsmi-4').scrollIntoView()  

    })

    it('Sign-up New user', () => {
        cy.get('.BurgerIcon-sc-1dtmlmh-0').click()
        cy.get('.Offcanvas__Center-lf7oqa-5').click()

        var email = Cypress._.random(0, 100) + users['default'].email + Cypress._.random(0, 100) + 'aboutyou.com'
        var password = Cypress._.random(0, 5) + users['default'].password + Cypress._.random(0, 5)

        // iFrame to Facebook oath credntials and Signup
        console.log(cy.get('.Account__StyledIframe-pnr7km-1'))

        cy.get('.Account__StyledIframe-pnr7km-1 > iframe').then($element => {

        const $body = $element.contents().find('body')  //body

        let stripe = cy.wrap($body)

        cy.wrap($body).find('input[id="gendar-male"]').eq(0).click()
        cy.wrap($body).find('input[name="firstname"]').eq(0).click().type(users['default'].firstname)
        cy.wrap($body).find('input[name="firstname"]').eq(0).click().type(users['default'].lastname)
        cy.wrap($body).find('input[name="email"]').eq(0).click().type(email)
        cy.wrap($body).find('input[name="password"]').eq(0).click().type(password)
        cy.wrap($body).find('input[class="checkbox-custom"]').eq(0).click()

        // Address details 
        // TODO

        })
    })

    it('HomePage => Check the cart value => Then Search category', () => {
     
        cy.get('HeaderIconWithBadge__Container-sc-6qorph-0 igCIpC').click()  // Click the Cart
        cy.get('.Certificates__CertificateLink-sc-14s4oyn-5').scrollIntoView() 
        cy.get('.Recommendations__Title-sc-1eov22s-1').contains() //Verify of the cart is empty

        //To-Do: add validations to verify the cart if empty

        cy.get('Header__HeaderIconLink-ryefjo-5 cNaaAJ').click()  // Click Search
        cy.get('input[placeholder="Suche nach Marken, Artikeln und mehr…"').type(users['default'].productToSearch) // Enter the product to search
        cy.get('[data-cy-id="topSearchTerm_Shirts"]').click() // Select the Top search category

    }) 

    it('Apply Filters for the category', () => {
        //To-Do: add validations
    }) 

    it('Choose the product and browse through various details', () => {
    //To-Do: add validations
    })

    it('Select the size and the colour', () => {
    //To-Do: add validations
    })

    it('Add to cart and Check the cart value and the Item quantity', () => {
    //To-Do: add validations
    })

    it('Checkout', () => {
    //To-Do: add validations
    })

    it('Choose Payment Option', () => {
    //To-Do: add validations
    }) 

    it('Apply Coupon ', () => {
    //To-Do: add validations
    }) 

    it('Verify for the Final price and proceed', () => {
    //To-Do: add validations
    })

    it('Wait for the Financial Details Page and provide credentials', () => {
    //To-Do: add validations
    })

    it('Wait for the Financial Data Page', () => {
    //To-Do: add validations
    })

    it('Wait for the Bank Selection Page', () => {
    //To-Do: add validations
    })
    
    it('Wait for the Konto Page', () => {
    //To-Do: add validations
    })

    it('Wait for Final Offer Confiramation', () => {
    //To-Do: add validations
    })

    it('Wait for Confirm with the OTP', () => {
    //To-Do: add validations
    }) 
})