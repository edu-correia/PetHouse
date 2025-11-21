describe('Sign-up and login flow', () => {
  it('logs in and performs sign-up', () => {
    // Realiza o login uma vez antes de todos os testes
    cy.visit('http://localhost:3000/');
    cy.get('#email').type('eduardo@mail.com');
    cy.get('#password').type('123456*aB');
    cy.get('.access-button').click();

    // Verifica se o login foi bem-sucedido redirecionando para a página principal
    cy.url().should('eq', 'http://localhost:3000/');
  });
});