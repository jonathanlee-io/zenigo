describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('FRONT_END_URL' ?? 'http://localhost:4200'));
  });

  it('should load the landing page', async () => {
    cy.url().should('include', '/');
  });
})
