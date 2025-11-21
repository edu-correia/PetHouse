describe('Sign-up and login flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.get('#email').type('joao@email.com');
    cy.get('#password').type('123456*aB');
    cy.get('.access-button').click();
  });

  describe('Sign-up page', () => {
    it('creates an account with valid inputs', () => {
      cy.visit('http://localhost:3000/signup');
      cy.get('#nome').type('Joao da Silva');
      cy.get('#email').type('joao@email.com');
      cy.get('#password').type('123456*aB');
      cy.get('#confirm-password').type('123456*aB');
      cy.get('.access-button').click();
    });
  });

  describe('Login page', () => {
    it('logs in with valid credentials', () => {
      cy.url().should('eq', 'http://localhost:3000/');
    });
  });
});
