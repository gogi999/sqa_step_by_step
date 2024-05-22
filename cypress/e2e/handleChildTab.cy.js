/// <reference types="cypress" />

describe('Handling child tab', () => {
    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.visit(Cypress.env('url') + '/AutomationPractice/')
    })
    it('Switch tab example', () => {
        cy.get('#opentab')
          .invoke('removeAttr', 'target')
          .click()

        // Navigating browser controls - using "go" command
        cy.url()
          .should('include', 'qaclickacademy')

        cy.go('back')
    })
})
  