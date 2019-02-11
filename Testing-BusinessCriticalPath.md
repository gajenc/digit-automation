# About-you QA-challenge

List of Critical paths to test: (Not specifiying tests for Negative flows or invalid data)

1. Signup(New user) Experiance: (very important as we are on-boarding new customer and need to ensure the seamless user experiance)
    1. Succesfull Registration with valid details and credentials set, and by accepting the concent.
        * User should be logged in and user profile reflects as provided.
        * User receives email with the successfull registration message and verify email link.
        * Logout and relogin with the credentials, 
    2. Succesful Registration with Facebook oauth 
        * URL redirect to facebook and upon valid facebook credentials user should be able to sign-up.
        * Redirecting back to "About You" with user profile being captured.
        * If a user changes his mind not to use facebook login, clicking on "not now" should redirect back to "About you" sign-up page.
    3. Concent message to receive promotional emails and also message that user can deregister should be clearly visible and being able to select/deselect.
    4. Singup page => already have account => Sign-in => Sign-up page seemless navigation experiance.
    5. User is still allowed to browse through the products backand forth, add-to-cart, wish-list until checkout page.=> Sign Up page. 
    6. Ensure the performance of the new user onboarding flow is reasonably fast still on network latency simulation env. 
    7. New user conversion experiance should be seamless in terms of ease and quickness.
    
2. Sign-in (Existing) user experiance:
    1.  Being able to sign-in with the facebook credetials if opted, and the user profile details are reflecting in About You appropriately.
    2.  If created user profile with about you sign-up, validate the correctness of the user details.
    
3. Home page - Products browsing experiance:
    1.  Extensive tests with varity of testdata and search criteria to validate the product listing correctness from the QuickLinks, Search and Filters.
    2.  Search results validation based on Product name, brand name or something more broadly.
    3.  Different sort options have to be available- based on Brand, Price, and Reviews/ratings etc.
    4.  Pagination with the most relevant products being shown in the first page.
    5.  Need to automate various search criteria per category randomely being triggered and validate expected results with every small details (Size, quantity, Colour, Available are clickable, non-avialable are grayed out)
    6.  Check the user coming back to the page, gets the products being browsed recently highlighted, notified.
    7.  Add products to wishlist cart => Check the wishlist and cartlist => Being able to move items from wishlist => cart
    
4. Product details Page : (Automate with the specific products and randomnly changing prices, quantity, stock/outofstock)
    1. Images, Price, specifications, Reviews, Check out options, variations options
    2. Delivery options, Shipping information, In stock/Out of stock
    3. Breadcrumb navigation for the categories and user should be able to switch back and forth
    4. Manually check the zoom-in/out on varity of screen sizes and resolutions
    
5. Checkout experiance:
    1.  Final order view relevant number of products, quality and prices.
    2.  Test the accuracy of the price recalculation with vaious discounts/coupons (internal & thrid-party).
    3.  Test the taxes (country or state specific), shipping availabiltiy and cost.
    4.  Estimated time of delivery, address confirmation, option to edit or add addresses before final checkout.
    5.  Being still be able to change the quantity and go back to change size, color of the products.
    6.  User may choose to purchase later and upon comming back, notfication to procees with the checkout or to continue shipping.

6. Payments:
    1.  Guest users asked for resigtration and being able to direcltly land to checkout.
    2.  Test all the possible integration with the payment gateways, Banks, wallets, etc with the mock responses/test accounts, etc.
    2.  Partner interface/iframe or website Session timeout testing and redirect back to about you.
    3.  Positive and interupption flow simulation and test against intended response codes and messages.
    4.  Concent acceptance for the financial information/data security
    5.  security testing with accepted PCI compalint or likewise
    6.  Email/order notification upon both successful/non-successful transaction with the referance number.


Good to-Test:
 - Test the functional flow along with the browser console logs, netwrok XHR Responses.
 - Links test automation (Images and broken links)
 - Security testing, cross site, SQL injection, etc.
 - CSS, Img loading, JS/TS errors
 - Cookies validation
 - Session ID, tokens
 - Focus on automating top and most common user paths captured through "Google Analytics" or likewise tools
 - We can't automate product search expeirance, but have varity of Test data, mock responses whcih can be randomly configured and tested. 
 - Performance testing of PageLoad time, response time with simulated latency, concurrency and load.
 - If services are configured auto-scalling, test resiliency, metrics, health.
 - Test the integration between services and integrations broadly. Possibly automate through contracts/mock responses, etc..
 - Need to ensure the Unit/Integration tests are broadly covered.
 - Need to ensure the code quality, ESLint, checkstyle and PMD data are being captured and meeting the expected thresholds.
 - 
 
While testing the randomly I could see the page is broken:

https://gitlab.com/gajendranc/about-you-qa-challenge/blob/master/PHOTO-2019-02-12-00-14-42.jpg

https://gitlab.com/gajendranc/about-you-qa-challenge/blob/master/PHOTO-2019-02-12-00-15-19.jpg