
describe("Handling Mouse Over", () => {

    before(()=> {
        cy.fixture("site-data.json").as("siteData").then((siteData)=> {
            cy.visit(siteData.testSite3);
        })
    });

    it("Test Mouse Over Text",()=>{
        cy.get('.mouse-hover-content').invoke('show');
        cy.contains('Top').click();
        cy.url().should('include', 'top');
    });

    it.only("Force clicking the hidden element",()=>{
        cy.contains('Reload').click({force: true});
        // cy.url().should('include', 'top');
    });

});
