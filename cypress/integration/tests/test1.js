
describe("My first test suite", () => {
    it("My first test case",()=>{
        cy.fixture("site-data.json").as("siteData").then((siteData)=> {
            cy.visit(siteData.testSite2);
        });
    })
})
