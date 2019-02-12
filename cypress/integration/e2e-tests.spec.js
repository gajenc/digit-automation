const users = require('../fixtures/users');
const config = require('../../config').get(Cypress.env('testenv'));

describe('About You E2E Tests', () => {
      
    before('Navigate to LeadCycle URL',() => {
        cy.viewport('iphone-6+')
        cy.visit(`${config.appUrl}`)
        cy.contains('ABOUT YOU')  
        cy.get('.CookieBanner__AbsoluteContainer-sc-1xf3w9f-2 > .AyIcon-rsvx9p-0').click().end()
        //cy.get('.AppInstallTeaser__Text-g5wv6f-2').scrollIntoView()
        //cy.get('.AppDownloadTeaser__DownloadAppButton-hcwsmi-4').scrollIntoView()
    })

    //const uuid = () => Cypress._.random(0, 1e6) 

    it('HomePage => Search', () => {
        //cy.scrollTo('top')
        cy.get('HeaderIconWithBadge__Container-sc-6qorph-0 igCIpC').click()
        cy.get('.Certificates__CertificateLink-sc-14s4oyn-5').scrollIntoView()
        //cy.get('.Recommendations__Title-sc-1eov22s-1').contains()

        cy.get('Header__HeaderIconLink-ryefjo-5 cNaaAJ').click()
        cy.get('input[placeholder="Suche nach Marken, Artikeln und mehr…"').type('Shirt')
        cy.get('[data-cy-id="topSearchTerm_Shirts"]').click()

    }) 

    it('Sign-up New user', () => {
        cy.get('.BurgerIcon-sc-1dtmlmh-0').click()
        cy.get('.Offcanvas__Center-lf7oqa-5').click()

        var email = Cypress._.random(0, 100) + users['default'].email + Cypress._.random(0, 100) + 'aboutyou.com'
        var password = Cypress._.random(0, 5) + users['default'].password + Cypress._.random(0, 5)

        // iFrame
        console.log(cy.get('.Account__StyledIframe-pnr7km-1'))

        cy.get('.Account__StyledIframe-pnr7km-1').then($element => {

        const $body = $element.contents().find('document')  //body

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


    it('Search products', () => {

    })

    it('Apply Filters', () => {

    }) 

    it('Choose the product and browse through various details', () => {

    })

    it('Select the size and the colour', () => {

    })

    it('Add to cart and Check the cart value and the Item quantity', () => {

    })

    it('Checkout', () => {

    })

    it('Choose Payment Option', () => {

    }) 


    it('Apply Coupon ', () => {

    }) 

    it('Verify for the Final price and proceed', () => {

    })


    it('Wait for the Financial Details Page and provide credentials', () => {

    })

    it('Wait for the Financial Data Page', () => {

    })

    it('Wait for the Bank Selection Page', () => {

    })
    
    it('Wait for the Konto Page', () => {

    })

    it('Wait for Final Offer Confiramation', () => {

    })

    it('Wait for Confirm with the OTP', () => {

    }) 
})