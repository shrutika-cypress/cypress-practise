/// <reference types="Cypress" />
beforeEach(() => {
    cy.LoginIn();
})

describe("Login to designmodo app", {
        retries: {
            runMode: 2,
            openMode: 1,
        }
    }, function(){
    it("Select products",()=>{
        cy.xpath("//a[@class='menu-link' and text()='Products']").click();
        cy.xpath("//ul[@class='flex noSpaces align-left hoverable']//li").then(($selectedElement) => {
             expect($selectedElement).has.length('6')
        })
    });

    it("Edit Billing Address",
    // {
    //     retries: {
    //         runMode: 2,
    //         openMode: 1,
    //     },
    // },
    () =>{
        cy.scrollTo('center');
        cy.get("a[href='https://designmodo.com/my-account/edit-address/billing/']").click();
        cy.get("#billing_country").select("IN");
        cy.get("#billing_address_1").clear();
        cy.get("#billing_address_1").type("Sample demo address changed..");
        cy.get("#billing_city").clear();
        cy.get("#billing_city").type("Pune");
        cy.get("#billing_state").select("MH");
        cy.get("#billing_postcode").clear();
        cy.get("#billing_postcode").type("411045");
        cy.get("#billing_phone").clear();
        cy.get("#billing_phone").type("998877");
        //cy.get(".element").click();
        cy.xpath("//button[text()='Save addressa']").click();
    })
});
