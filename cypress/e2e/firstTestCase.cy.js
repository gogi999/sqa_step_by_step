/// <reference types="cypress" />

describe('First Test Case', () => {
  beforeEach(() => {
    // cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.visit(Cypress.env('url') + '/seleniumPractise/#/')
  })
  it('Search functionality', () => {
    // cy.get('input[placeholder="Search for Vegetables and Fruits"]')
    cy.get('.search-keyword')
      .type('Ca')
    
    // cy.get('button[type="submit"]')
    //  .click()

    cy.wait(2000)

    cy.get('.product')
      .should('have.length', 5)

    cy.get('.product:visible')
      .should('have.length', 4)

    // Parent child chaining
    cy.get('.products').as('productLocator') 
    cy.get('@productLocator')
      .find('.product')
      .should('have.length', 4)
    
    cy.get('@productLocator')
      .find('.product')
      .eq(-1)
      .contains('ADD TO CART')
      .click()
      .then(() => {
        console.log('Hello')
    })
    
    cy.get('@productLocator')
      .find('.product')
      .each(($el, index, $list) => {
        const textVeg = $el.find('h4.product-name').text()

        if (textVeg.includes('Cashews')) {
          $el.find('button').trigger('click')
        }
    })

    // Assert if logo text is correctly displayed
    cy.get('.brand.greenLogo').should('have.text', 'GREENKART')

    // This will print in logs
    cy.get('.brand.greenLogo')
      .then((logoElement) => {
        cy.log(logoElement.text())
    })
  })
})
