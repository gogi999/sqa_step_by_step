/// <reference types="cypress" />

describe('Visible and invisible elements', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('url') + '/AutomationPractice/')
    })
    it('Displayed text - show - hide', () => {
        cy.get('#displayed-text')
          .should('be.visible')

        cy.get('#hide-textbox')
          .click()

        cy.get('#displayed-text')
          .should('not.be.visible')

        cy.get('#show-textbox')
          .click()

        cy.get('#displayed-text')
          .should('be.visible')
    })

    it('Radio buttons', () => {
        cy.get('[value="radio2"]')
          .check()
          .should('be.checked')
    })
})
  