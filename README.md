For the E2E flow automation execution details, please refer the dashboard for results, screenshots and the video.

https://dashboard.cypress.io/#/projects/fn49y8/runs/20/specs


The Code can be optimized to have the below features:
    - object locator at one place for a easy maintenance
    - Create reusable functions(eg: size selector, color selector), Filtering, etc..
    - Need to have many API level validations

Sample Report:
────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running: e2e-tests.spec.js...                                                            (1 of 1) 
  Estimated: 56 seconds


  ABOUT YOU E2E Tests
    ✓ HomePage => Check the cart => Then Search product category (27691ms)
    ✓ Apply Filters for the category (3062ms)
    ✓ Choose the product and browse through various details (8170ms)
    ✓ Select the size and the colour (2167ms)
    ✓ Add to cart and Check the cart value and the Item quantity (1648ms)
    ✓ Checkout (1026ms)
    ✓ Sign-up New user (38726ms)
    ✓ Enter shipping address (5236ms)
    ✓ Choose Payment Option (6186ms)
    ✓ Apply Coupon  (188ms)
    ✓ Verify for the Final price and proceed (571ms)
    ✓ Wait for the Financial Details Page and provide credentials (177ms)
    ✓ Wait for the Financial Data Page (106ms)
    ✓ Wait for the Bank Selection Page (94ms)
    ✓ Wait for the Konto Page (263ms)
    ✓ Wait for Final Confiramation (64ms)
    ✓ Wait for Confirm (67ms)


  17 passing (2m)


  (Results)

  ┌────────────────────────────────────┐
  │ Tests:        17                   │
  │ Passing:      17                   │
  │ Failing:      0                    │
  │ Pending:      0                    │
  │ Skipped:      0                    │
  │ Screenshots:  0                    │
  │ Video:        true                 │
  │ Duration:     1 minute, 39 seconds │
  │ Estimated:    56 seconds           │
  │ Spec Ran:     e2e-tests.spec.js    │
  └────────────────────────────────────┘


  (Video)

  - Started processing:   Compressing to 32 CRF
  - Compression progress:  53%
  - Finished processing:  /Users/gajendranc/pgit/about-you-cypress-tests/cypress/videos/e2e-tests.spec.js.mp4 (19 seconds)


  (Uploading Results)

  - Done Uploading (1/1) /Users/gajendranc/pgit/about-you-cypress-tests/cypress/videos/e2e-tests.spec.js.mp4