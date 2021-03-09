
describe("First Test suite", () => {
    it("My first test case: Getting Started",()=>{
        cy.fixture("site-data.json").as("siteData").then((siteData)=> {
            cy.visit(siteData.testSite2);
            cy.get('.ProductCardComponent .details__header--title').should("have.length", 20);
            // cy.get('.ProductCardComponent .details__header--title').contains("Buildium").click();
            cy.get('.ProductCardComponent .details__header--title').each((el) => {
                if(el.text() === "Buildium"){
                    el.click();
                }
            })
        });
    })
})
