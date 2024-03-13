describe("OrderFormTest", () => {
    it("Adı Soyadı doldur", () => {
      cy.visit("http://localhost:5173/order-pizza");
      cy.get('[data-cy="fullname"]')
      .type('Can Özgürlük')
      .should('have.value', 'Can Özgürlük');
  });

  it("Ek Malzeme Seç", () => {
        cy.visit("http://localhost:5173/order-pizza");
        cy.get("[data-cy='checkbox-box0']").click();
        cy.get("[data-cy='checkbox-box1']").click();
        cy.get("[data-cy='checkbox-box2']").click();
        cy.get("[data-cy='checkbox-box3']").click();
        cy.get("[data-cy='checkbox-box4']").click();

    })
});

describe('sipariş ver', () => {
    it('formu gönder', () => {
      cy.visit("http://localhost:5173/order-pizza");
    
     
      cy.get('[data-cy="fullname"]').type('Can Özgürlük');
      cy.get('[data-cy="text"]').type("lorem lorem lorem lorem");
      cy.get('[data-cy="size-büyük"]').check();
      cy.get('[data-cy="thickness"]').select('İnce');
      cy.get("[data-cy='checkbox-box0']").click();
      cy.get("[data-cy='checkbox-box1']").click();
      cy.get("[data-cy='checkbox-box2']").click();
      cy.get("[data-cy='checkbox-box3']").click();
      cy.get("[data-cy='checkbox-box4']").click();
  
      cy.get("[data-cy='order-button']").click()
  
      cy.url().should('include', '/success');
    });
  });