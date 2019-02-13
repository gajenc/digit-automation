const users = require('../fixtures/users');
const config = require('../../config').get(Cypress.env('testenv'));

describe('ABOUT YOU E2E Tests', () => {
      
    before('Navigate to LeadCycle URL',() => {
        cy.viewport('iphone-6+')
        cy.visit(`${config.appUrl}`)
        
        // Check the XHR response for the successful loading of the categories on the Home page
        cy.server()
        cy.route('**/v1/categories/**').as('getCategories')
        cy.wait('@getCategories', {timeout: 250000})
        cy.server({ enable: false })

        cy.contains('ABOUT YOU')  // Quick check if the ui elements are loaded
        cy.get('.CookieBanner__AbsoluteContainer-sc-1xf3w9f-2 > .AyIcon-rsvx9p-0').click().end()
    })

    it('HomePage => Check the cart => Then Search product category', () => {
        cy.get('.Header__HeaderIconLink-ryefjo-5').last().click()  // Click the Cart
        
        cy.wait(5000)
        cy.get('.Header__HeaderIconLink-ryefjo-5').eq(1).click()  // Click wishlist
    
        cy.server()
        cy.route('**/wishlist/**').as('getWishlist')
        cy.wait('@getWishlist', {timeout: 250000})
        cy.server({ enable: false })
    
        cy.get('.Header__HeaderIconLink-ryefjo-5').first().click()  // Click Search

        cy.server()
        cy.route('**/search/**').as('getSearch')
        cy.wait('@getSearch', {timeout: 250000})
        cy.server({ enable: false })

        cy.get('input[placeholder="Suche nach Marken, Artikeln und mehr…"]').type(users['default'].productToSearch) // Enter the product to search

        cy.get('[data-cy-id="topSearchTerm_Shirts"]').click() // Select the Top search category

        cy.server()
        cy.route('**/recommendations/**').as('getRecommendations')
        cy.wait('@getRecommendations', {timeout: 250000})
        cy.server({ enable: false })
    }) 

    it('Apply Filters for the category', () => {
        //To-Do: add validations
        cy.get('.StreamFilterButton__FilterButtonText-qfnodg-1').click() //Filter

        cy.get(':nth-child(5) > .Button-sc-1kjlfn7-0').click() // New arrival

        cy.get('.InputSwitchStyled__Toggle-kygbqg-0').click() // Click toggle to only sales

        cy.get('.Filters__Column-rqdxgp-0 > :nth-child(11)').click()  // Choose material

        cy.get('.EntitySelectStyled__EntityContainer-sc-12vcf0k-9 > :nth-child(1)').click() // Choose 1
        cy.get('.EntitySelectStyled__EntityContainer-sc-12vcf0k-9 > :nth-child(2)').click() // Choose 2
        cy.get('.EntitySelectStyled__EntityContainer-sc-12vcf0k-9 > :nth-child(3)').click() // Choose 3

        cy.get('.EntitySelectStyled__ButtonContainer-sc-12vcf0k-7 > .Button-sc-1kjlfn7-0').click() //Click back button

        //cy.get('.CookieBanner__AbsoluteContainer-sc-1xf3w9f-2 > .AyIcon-rsvx9p-0').click() //dismiss coookies banner
        
        // cy.server()
        // cy.route('**/filters').as('getFilters')
        // cy.wait('@getFilters', {timeout: 50000})
        // cy.server({ enable: false })

        cy.get('.SearchFilter__ButtonContainer-sc-1eqnh1i-2 > .Button-sc-1kjlfn7-0').click() //click show results for the newly set filter
    }) 

    it('Choose the product and browse through various details', () => {
        //To-Do: add validations
        cy.get(':nth-child(1) > .ProductTile__HeartContainer-sc-1qrnmyl-0 > .WishlistButton__Container-sc-28dj91-0 > .AyIcon-rsvx9p-0').first().click() //add to wishlist
        cy.get(':nth-child(1) > .ProductTile__ImageContainer-sc-3vndnt-2 > .CdnImage__StyledImg-upef3-0').first().click()  // select the first product
        cy.wait(5000)
        cy.get('.DisplayPrice__DefaultPrice-sc-1f1804x-3')   //price
    })

    it('Select the size and the colour', () => {
    //To-Do: add validations
        cy.get('.ColorSelectionItem__ImageHolder-sc-1l4fvoo-1').first().click()  //change colour
        cy.get('[data-cy-id="size_38"]').click() //select 38 size
        
        // TODO: Need to add Size Conditions
        // if (cy.get('[data-cy-id="size_L"]')) {
        //     cy.get('[data-cy-id="size_L"]').click() //select L size
        // } else {
        //     cy.get('[data-cy-id="size_38"]').click()
        //     cy.get('[data-cy-id="size_38"]').click()
        // }
        
       cy.get(':nth-child(2) > .Accordion__Container-sc-13l9x97-1 > .Accordion__Header-sc-13l9x97-0 > .Accordion__CollapseIndicator-sc-13l9x97-3').click()


    })

    it('Add to cart and Check the cart value and the Item quantity', () => {
    //To-Do: add validations
        cy.get('.AddToBasketButtonStyled__StyledAddToBasketButton-zit1m8-1').click() 
        cy.get('.Header__HeaderIconLink-ryefjo-5').last().click()  // Click cart
    })

    it('Checkout', () => {
    //To-Do: add validations
        //cy.get('.VoucherButton__Cta-sc-1vaoun8-2').click() //copy the promo code
        cy.get('.Button-sc-1kjlfn7-0').first().click() //click checkout
    })

    it('Sign-up New user', () => {
        // To-Do: Signup invokation
        //cy.get('.BurgerIcon-sc-1dtmlmh-0').click()   -- Todo as a function to handle if singup is in the begining/later
        //cy.get('.Offcanvas__Center-lf7oqa-5').click()

        var email = Cypress._.random(0, 100) + users['default'].email + Cypress._.random(0, 100) + 'aboutyou.com'
        var password = Cypress._.random(0, 5) + users['default'].password + Cypress._.random(0, 5)

        // iFrame to Facebook oath credntials and Signup -- TODO

        cy.wait(5000)

        // Enter user details
        cy.get('.gender-toggle > > label').last().click()
        cy.get('.form-input-email > input').type(email)
        cy.get('.fieldset-gender-name > > input').first().type(users['default'].firstname)
        cy.get('.fieldset-gender-name > > input').last().type(users['default'].lastname)
        cy.get('.form-input-password > > input').first().type(password)
        cy.get('.newsletter-signup-label').click()
        cy.get('.primary').click() 
    })

    it('Enter shipping address', () => {

        cy.server()   // Wait for the Address API 
        cy.route('**/address/**').as('getAddress')
        cy.wait('@getAddress', {timeout: 50000})
        cy.server({ enable: false })

        // Enter the shipping address
        cy.get('.form-input-text > input').eq(2).type(users['default'].addressStreet)
        cy.get('.form-input-text > input').eq(3).type(Cypress._.random(0, 5))
        cy.get('.form-input-text > input').eq(4).type(users['default'].addressPostal)
        cy.get('.form-input-city > input').type(users['default'].addressCity)
        cy.get('.form-input-date > input').first().type(users['default'].dob)
        cy.get('.primary').click() 
    })   

    it('Choose Payment Option', () => {
    
        cy.server()    // Wait for the payment API response
        cy.route('**/payment').as('getPayment')
        cy.wait('@getPayment', {timeout: 50000})
        cy.server({ enable: false })

        cy.get('.payment-method-svg').eq(7).click()  //Select Sofort Payment option
    }) 

    it('Apply Coupon ', () => {
        //To-Do: add validations
        //cy.get('#voucherCode').
        //cy.get('.tertiary').click()
    }) 

    it('Verify for the Final price and proceed', () => {
        //To-Do: add validations
        cy.get('.order-submit').click()   // Proceed to pay through partner channel
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

    it('Wait for Final Confiramation', () => {
    //To-Do: add validations
    })

    it('Wait for Confirm', () => {
    //To-Do: add validations
    }) 
})