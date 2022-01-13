/// <reference types="cypress" />

describe('Amazon Add TO Cart', function() {
w
    it('Assessment', function() {
        
        //login
        cy.visit('https://www.amazon.in/')
        cy.get('#nav-link-accountList').click()
        cy.get('#ap_email').type(username)
        cy.get('.a-button-inner > #continue').click()
        cy.get('#ap_password').type(password)
        cy.get('#signInSubmit').click()

        //add to cart
        cy.get('._buy-again-gateway-desktop_style_quadrants__xtehm > :nth-child(1) > .a-link-normal').click()
        cy.get('._YnV5L_addToCartContainer_1dUSj > ._YnV5L_atcButtonContainer_y5ID2 > #atcWrapper-B0868HPSSW > #atcButton-B0868HPSSW > .a-button-inner > .a-button-input').click()
        cy.get('._YnV5L_addToCartContainer_1dUSj > .a-row > #atcMessage-B0868HPSSW > #atcSuccess-B0868HPSSW > .a-box-inner > .a-alert-content').contains("Added")
    
        //verify product added to cart
        cy.get('#nav-cart').click()
        cy.get('.a-col-right > .a-unordered-list > :nth-child(1) > .a-list-item > .a-link-normal > .a-color-base > .a-truncate > .a-truncate-cut').contains("Pampers")
        
        console.log("---End of test---")
    })

})