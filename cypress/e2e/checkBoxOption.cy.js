/// <reference types="cypress" />

describe('Checkbox option test case', () => {
  beforeEach(() => {
    // cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.visit(Cypress.env('url') + '/AutomationPractice/')
  })
  it('Checkbox options functionality', () => {
    cy.get('#checkBoxOption1')
      .check()
      .should('be.checked')
      .and('have.value', 'option1')

    cy.get('#checkBoxOption1')
      .uncheck()
      .should('not.be.checked')

    cy.get('input[type="checkbox"]')
      .check(['option2', 'option3'])
  })

  it('Static dropdown functionality', () => {
    cy.get('select')
      .select('option2')
      .should('have.value', 'option2')
  })

  it.only('Dynamic dropdown functionality', () => {
    cy.get('#autocomplete')
      .type('ind')
    
    cy.get('.ui-menu-item div')
      .each(($el, index, $list) => {
        if ($el.text() === 'India') {
          $el.click()
        }
      })

    cy.get('#autocomplete')
      .should('have.value', 'India')
  })
})
