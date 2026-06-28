describe('Cypress Queries', () => {
  beforeEach(() => {
    cy.visit('https://qauto.forstudy.space/', {
      auth: { username: "guest", password: "welcome2qauto" }
    })
  })

  it('Assert that elements in the header exist', () => {
    cy.contains('.btn.header-link.-active', 'Home').should('exist');
    cy.contains('.btn.header-link', 'About').should('exist');
    cy.contains('.btn.header-link', 'Contacts').should('exist');
    cy.contains('[class="header-link -guest"]', 'Guest log in').should('exist');
    cy.contains('[class="btn btn-outline-white header_signin"]', 'Sign In').should('exist');
  })

  it('Assert that elements in the footer exist', () => {
   cy.get('[class="socials_icon icon icon-facebook"]').should('exist');
   cy.get('[class="socials_icon icon icon-telegram"]').should('exist');
   cy.get('[class="socials_icon icon icon-youtube"]').should('exist');
   cy.get('[class="socials_icon icon icon-instagram"]').should('exist');
   cy.get('[class="socials_icon icon icon-linkedin"]').should('exist');
   cy.contains('[class="contacts_link display-4"]', 'ithillel.ua').should('exist');
   cy.contains('[class="contacts_link h4"]', 'support@ithillel.ua').should('exist');

  })
})
