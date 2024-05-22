/// <reference types="cypress" />
import HomePage from "../support/pageObjects/HomePage.cy"
import ProductPage from "../support/pageObjects/ProductPage.cy"

describe('Building customized cypress commands for reusing code', () => {
    before(() => {
        // Runs once before all tests in the block
        cy.fixture('example')
          .then(function(data) {
            this.data = data
          })
    })
    it('Shop page example', function() {
        const homePage = new HomePage()
        const productPage = new ProductPage()

        cy.visit(Cypress.env('url') + '/angularpractice/')

        // cy.get('input[name="name"]:nth-child(2)') // instead this we use HomePage object ->
        homePage.getEditBox().type(this.data.name)

        // cy.get('#exampleFormControlSelect1') // instead this we use HomePage object ->
        homePage.getGender().select(this.data.gender)

        // cy.get(':nth-child(4) > .ng-untouched') // instead this we use HomePage object ->
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)

        // cy.get('input[name="name"]:nth-child(2)') // instead this we use HomePage object ->
        homePage.getEditBox().should('have.attr', 'minLength', '2')

        // cy.get('#inlineRadio3') // instead this we use HomePage object ->
        homePage.getEntrepreneaur().should('be.disabled')

        Cypress.config('defaultCommandTimeout', 8000)
        // cy.get(':nth-child(2) > .nav-link') // instead this we use HomePage object ->
        homePage.getShopTab().click()

        // Parameterizing the test Data from Json files using each command
        this.data.productName.forEach((el) => {
            cy.selectProduct(el)
        })

        // Implementing global configuration changes to Cypress framework
        productPage.checkoutButton().click()

        // Implementing the Sum of products functionality
        var sum = 0
        cy.get('tr td:nth-child(4) strong')
          .each(($el, index, $list) => {
            const amount = $el.text()
            var res = amount.split(' ')
            res = res[1].trim()
            sum = Number(sum) + Number(res)
          }).then(() => {
            cy.log(sum)
          })
        cy.get('h3 strong').then((el) => {
            const amount = el.text()
            var res = amount.split(' ')
            var total = res[1].trim()
            expect(Number(total)).to.equal(sum)
        })  
        cy.contains('Checkout').click()
        cy.get('#country').type('India')
        cy.get('div.container app-checkout.row div:nth-child(3) div.suggestions:nth-child(2) ul:nth-child(1) li:nth-child(1) > a:nth-child(1)').click()
        cy.get('#checkbox2').click({ force: true })
        cy.get('input[type="submit"]').click()
        // cy.get('.alert.alert-success.alert-dismissible')
          // .contains('Success! Thank you! Your order will be delivered in next few weeks :-).')
        cy.get('.alert.alert-success.alert-dismissible')
          .then((el) => {
            const actualText = el.text()
            expect(actualText.includes('Success')).to.be.true
          })
        })
})
  