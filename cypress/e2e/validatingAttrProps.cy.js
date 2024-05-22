/// <reference types="cypress" />

describe('Validating attribute properties and their behavior with cypress assertion', () => {
    before(() => {
        // Runs once before all tests in the block
        cy.fixture('example')
          .then(function(data) {
            this.data = data
          })
    })
    it('Shop page example', function() {
        // cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.visit(Cypress.env('url') + '/angularpractice/')

        cy.get('input[name="name"]:nth-child(2)')
          .type(this.data.name)

        cy.get('#exampleFormControlSelect1')
          .select(this.data.gender)

        cy.get(':nth-child(4) > .ng-untouched')
          .should('have.value', this.data.name)

        cy.get('input[name="name"]:nth-child(2)')
          .should('have.attr', 'minLength', '2')

        cy.get('#inlineRadio3')
          .should('be.disabled')
    })
})
  