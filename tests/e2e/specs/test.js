// https://docs.cypress.io/api/introduction/api.html

describe('Authentication Page Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.get('input:first').should('have.attr', 'placeholder', 'Username');
    cy.get('input:last').should('have.attr', 'placeholder', 'Password');
    cy.contains('a', 'Forgot password ?');
  });
});
