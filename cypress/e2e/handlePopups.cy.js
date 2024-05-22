/// <reference types="cypress" />

describe('Handling popups', () => {
    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.visit(Cypress.env('url') + '/AutomationPractice/')
    })
    it('Alert and Confirm buttons', () => {
        cy.get('#alertbtn')
          .click()

        // cy.get('#confirmbtn')
        cy.get('[value="Confirm"]')
          .click()

        // window:alert - cypress controls the DOM in Browser
        cy.on('window:alert', (str) => {
            // Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        // window:confirm - cypress controls the DOM in Browser
        cy.on('window:confirm', (str) => {
            // Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
    })
})
  