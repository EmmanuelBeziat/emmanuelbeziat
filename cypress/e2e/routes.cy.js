describe('Route Testing', () => {
  it('Home page should have the correct title', () => {
    cy.visit(`${Cypress.env('host')}`);
    cy.title().should('include', 'Hello World');
  });

  it('Blog page should have the correct title', () => {
    cy.visit(`${Cypress.env('host')}blog`);
    cy.title().should('include', 'Blog');
  });

  it('Portfolio page should have the correct title', () => {
    cy.visit(`${Cypress.env('host')}portfolio`);
    cy.title().should('include', 'Portfolio');
  });

	it('About me page should have the correct title', () => {
    cy.visit(`${Cypress.env('host')}moi`);
    cy.title().should('include', 'À propos de moi');
  });

	it('404 page should have the correct title', () => {
    cy.visit(`${Cypress.env('host')}non-existing-route`);
    cy.title().should('include', 'Erreur !');
  });
});
