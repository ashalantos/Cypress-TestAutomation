/// <reference types="cypress" />

class HomePage
{
   
    addToCart(){
        cy.get('._buy-again-gateway-desktop_style_quadrants__xtehm > :nth-child(1) > .a-link-normal').click()
        cy.get('._YnV5L_addToCartContainer_1dUSj > ._YnV5L_atcButtonContainer_y5ID2 > #atcWrapper-B0868HPSSW > #atcButton-B0868HPSSW > .a-button-inner > .a-button-input').click()
        cy.get('._YnV5L_addToCartContainer_1dUSj > .a-row > #atcMessage-B0868HPSSW > #atcSuccess-B0868HPSSW > .a-box-inner > .a-alert-content').contains("Added")
     }

     verifyAddedToCard(){
        cy.get('#nav-cart').click()
        cy.get('.a-col-right > .a-unordered-list > :nth-child(1) > .a-list-item > .a-link-normal > .a-color-base > .a-truncate > .a-truncate-cut').contains("Pampers")
        
    }
}

export default HomePage