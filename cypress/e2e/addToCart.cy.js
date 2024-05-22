/// <reference types="cypress" />

describe('Add to cart test case', () => {
  beforeEach(() => {
    // cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.visit(Cypress.env('url') + '/seleniumPractise/#/')
  })
  it('Search and to cart functionality', () => {
    // cy.get('input[placeholder="Search for Vegetables and Fruits"]')
    cy.get('.search-keyword')
      .type('ca')
    
    // cy.get('button[type="submit"]')
    //  .click()

    cy.wait(2000)

    // Parent child chaining
    cy.get('.products').as('productLocator') 
    
    cy.get('@productLocator')
      .find('.product')
      .each(($el, index, $list) => {
        const textVeg = $el.find('h4.product-name').text()

        if (textVeg.includes('Cashews')) {
          $el.find('button').trigger('click')
        }
    })

    cy.get('.cart-icon > img')
      .click()

    cy.contains('PROCEED TO CHECKOUT')
      .click()

    cy.contains('Place Order')
      .click()
  })
})
