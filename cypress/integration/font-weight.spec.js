describe('font weight tests', () => {
  beforeEach(() => cy.visit('localhost:5500'))

  context('normal weights', () => {
    it('evaluates normal weights the same', () => {
      cy.get('[data-cy="normal"]')
        .within(() => {
          cy.get('#normal')
            .should('have.css', 'font-weight', '400')
            // this fails locally
            // .should('have.css', 'font-weight', 'normal')
          cy.get('#400')
            .should('have.css', 'font-weight', '400')
          cy.get('#500')
            .should('have.css', 'font-weight', '500')
          cy.get('#600')
            .should('have.css', 'font-weight', '600')
        })
    })
  })

  context('bold weights', () => {
    it('evaluates bold weights the same', () => {
      cy.get('[data-cy="bold"]')
        .within(() => {
          cy.get('#bold')
            .should('have.css', 'font-weight', '700')
          // this fails locally
          // .should('have.css', 'font-weight', 'bold')
          cy.get('#700')
            .should('have.css', 'font-weight', '700')
        })
    })
  })

  context('bolder weights', () => {
    it('evaluates bolder weights the same', () => {
      cy.get('[data-cy="bolder"]')
        .within(() => {
          cy.get('#bolder')
            .should('have.css', 'font-weight', '700')
          // this fails locally
          // .should('have.css', 'font-weight', 'bolder')
          cy.get('#800')
            .should('have.css', 'font-weight', '800')
          cy.get('#900')
            .should('have.css', 'font-weight', '900')
        })
    })
  })

  context('lighter weights', () => {
    it('evaluates lighter weights the same', () => {
      cy.get('[data-cy="lighter"]')
        .within(() => {
          cy.get('#lighter')
            .should('have.css', 'font-weight', '100')
          // this fails locally
          // .should('have.css', 'font-weight', 'lighter')
          cy.get('#100')
            .should('have.css', 'font-weight', '100')
          cy.get('#200')
            .should('have.css', 'font-weight', '200')
          cy.get('#300')
            .should('have.css', 'font-weight', '300')
        })
    })
  })

})