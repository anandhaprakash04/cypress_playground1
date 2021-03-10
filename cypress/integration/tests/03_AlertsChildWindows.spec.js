
describe("Handling Alerts and child windows", () => {

    before(()=> {
        cy.fixture("site-data.json").as("siteData").then((siteData)=> {
            cy.visit(siteData.testSite3);
        })
    });

    it("Check alert ok button and confirm button",()=>{
        // Cypress does auto accept any alert
        cy.get('#alertbtn').click();
        cy.get('#confirmbtn').click();
    });

    it("Check the alert text using the window:alert event",()=>{
        cy.get('#alertbtn').click();
        cy.on('window:alert', (alertText) => {
            // cy.log(alertText);
            expect(alertText).to.equal('Hello , share this practice page and share your knowledge');
        });
    });

    it("Check the comfirmation alert using the window:confirm event",()=>{
        cy.get('#confirmbtn').click();
        cy.on('window:confirm', (alertText) => {
            // cy.log(alertText);
            expect(alertText).to.equal('Hello , Are you sure you want to confirm?');
        });
    });

    it("handling child windows limitations",()=>{
        cy.get('#opentab').invoke('removeAttr', 'target').click(); // This will open the link on the same page and you can continue the test with the new page
        cy.go('back');
    });

    it("Navigating between pages",()=>{
        cy.get('#opentab').invoke('removeAttr', 'target').click(); // This will open the link on the same page and you can continue the test with the new page
        cy.go('back');
        cy.url().should('contain','rahulshettyacademy');
    });

});
