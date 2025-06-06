describe('template spec', () => {
  it('passes', () => {
    cy.visit(Cypress.env('BASE_URL') ?? 'http://localhost:4200');
  });
});
