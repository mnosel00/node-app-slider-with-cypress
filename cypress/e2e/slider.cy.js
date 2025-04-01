describe("Swiper Gallery Test", function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit("http://localhost:3000");
    cy.get(".swiper-button-next").click();
    cy.get(".swiper-slide-active").should("contain", "United Kingdom");
  });
});

describe("Swiper Gallery Test", function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit("http://localhost:3000");
    cy.get(".swiper-button-next").click();
    cy.wait(2000);
    cy.get(".swiper-button-next").click({ force: true });
    cy.wait(2000);
    cy.get(".swiper-slide-active").should("contain", "Paris");
  });
});

describe("Swiper Gallery Test", function () {
  it("Checks slide navigation and slide contents", function () {
    cy.visit("http://localhost:3000");

    cy.get(".swiper-button-next").click();
    cy.get(".swiper-slide-active").should("contain", "United Kingdom");

    cy.wait(2000);
    cy.get(".swiper-button-next").click({ force: true });
    cy.wait(2000);
    cy.get(".swiper-slide-active").should("contain", "Paris");

    cy.get(".swiper-slide-active")
      .invoke("text")
      .then((firstSlideText) => {
        cy.get(".swiper-button-next").click();
        cy.wait(1000);
        cy.get(".swiper-slide-active")
          .invoke("text")
          .should("not.eq", firstSlideText);
      });

    cy.get(".swiper-slide-active")
      .invoke("text")
      .then((secondSlideText) => {
        cy.get(".swiper-button-prev").click();
        cy.wait(1000);
        cy.get(".swiper-slide-active")
          .invoke("text")
          .should("eq", firstSlideText);
      });
  });
});
