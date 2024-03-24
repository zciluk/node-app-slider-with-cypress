describe('Swiper Gallery Test', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })
  
  it('Checks if second slide contains "United Kingdom"', () => {
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });

  it('Checks if third slide contains "Paris"',() => {
    cy.get('.swiper-button-next').click();
    cy.wait(300);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(300);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });

  it('Checks if every slide has correct title', () => {
    const slideNames = [ "Rome","London", "Paris" ];
    slideNames.forEach((item) => {
      cy.get('.swiper-slide-active').should('contain', item);
      cy.get('.swiper-button-next').click({ force: true });
      cy.wait(300)
    });
  });
});