/// <reference types="cypress" />

describe('Handling web tables', () => {
    beforeEach(() => {
        // cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.visit(Cypress.env('url') + '/AutomationPractice/')
    })
    it('Handling web tables - using each command', () => {
        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
            const text = $el.text()

            if (text.includes('Python')) {
                cy.get('tr td:nth-child(2)')
                  .eq(index)
                  .next()
                  .then((price) => {
                    const priceText = price.text()
                    expect(priceText).to.equal('25')
                  })
            }
        })
    })
})
  