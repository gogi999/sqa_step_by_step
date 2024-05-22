/// <reference types="cypress" />

describe('Hooks in cypress - Before example', () => {
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
    })
})
  