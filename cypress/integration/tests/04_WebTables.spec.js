
describe("Handling Web Tables", () => {

    before(()=> {
        cy.fixture("site-data.json").as("siteData").then((siteData)=> {
            cy.visit(siteData.testSite3);
        })
    });

    it("Crawl thru the web table to check a row and a column",()=>{
        cy.get('.table-display td:nth-child(2)').each((courseName, i) => {
            cy.log(courseName.text());
            if(courseName.text().includes('Python')){
                const priceEl = Cypress.$('.table-display tr td:nth-child(3)').eq(i).text();
                cy.log(priceEl)
                expect(Number(priceEl)).to.equal(25);
            }
        });
    });

});
