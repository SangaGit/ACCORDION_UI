describe('Test Initial Page Load', () => {
  it('Visits the initial page', () => {
    cy.visit('/')
    cy.contains('HAVE A QUESTION? WE CAN HELP')
  });

  it('Should expand first Q&A by default', () => {
    cy.visit('/')
    cy.contains('What vehicles are covered?')
    cy.get('header:first').should('have.class','active')
  });

  it('Should collapse first Q&A by clicking on header', () => {
    cy.visit('/')
    cy.contains('What vehicles are covered?')
    cy.get('header:first').click()
    cy.get('header:first').should('not.have.class','active')
  });

  it('Should expand any Q&A (3rd) by clicking on header', () => {
    cy.visit('/')
    cy.contains("You say you don't charge for specialist equipment, what does that mean?")
    cy.get('header').eq(2).click()
    cy.get('header').eq(2).should('have.class','active')
  });

  it('Should collapse any Q&A (3rd) by clicking on header', () => {
    cy.visit('/')
    cy.contains("You say you don't charge for specialist equipment, what does that mean?")
    cy.get('header').eq(2).click()
    cy.get('header').eq(2).should('have.class','active')
    cy.get('header').eq(2).click()
    cy.get('header').eq(2).should('not.have.class','active')
  });
})
