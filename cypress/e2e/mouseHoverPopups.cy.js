/// <reference types="cypress" />

describe('Handling mouse hover popups', () => {
    beforeEach(() => {
        // cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.visit(Cypress.env('url') + '/AutomationPractice/')
    })
    it.only('Mouse hover example - show method in jQuery', () => {
        cy.get('.mouse-hover-content')
          .invoke('show') // show method should be applied on immediate parent of hidden element
          
        cy.contains('Top')
          .click()

        cy.url().should('include', 'top')
    })

    it('Handling child windows', () => {
        // 1st method: remove target attribute

        // 2nd method: grab href attribute
        cy.get('#opentab')
          .then((el) => {
            const url = el.prop('href')
            cy.visit(url) // will not work!!!
          })
    })
})
  