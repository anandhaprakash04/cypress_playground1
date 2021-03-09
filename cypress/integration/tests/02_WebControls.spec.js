
describe("Handling Web Controls", () => {

    before(()=> {
        cy.fixture("site-data.json").as("siteData").then((siteData)=> {
            cy.visit(siteData.testSite3);
        })
    });

    it("Check the first checkbox",()=>{
        cy.get('#checkBoxOption1')
            .check()
            .should('be.checked')
            .and('have.value', 'option1')
            .uncheck()
            .should('not.be.checked')
    });

    it("Check a specific checkbox and select multiple checkbox at a time",()=>{
        cy.get('input[type="checkbox"]')
            .check(['option1', 'option3']);
    });

    it("Static dropdowns - Select Tags",()=>{
        cy.get('select')
            .select('option2')
            .should('have.value', 'option2')
    });

    it("Dynamic dropdowns - Select Tags",()=>{
        cy.get('#autocomplete').type('ind')

        cy.get('.ui-menu-item div').each( (el, i, list) => {
            cy.log(el.text());
            if(el.text() == 'India'){
               el.click();
            }
        });

        cy.get('#autocomplete').should('have.value', 'India')

    });

    it('Check visible and invisible elements' , () => {
        cy.get('#displayed-text').as('inputText').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('@inputText').should('not.be.visible');
        cy.get('#show-textbox').click().should('be.visible');
    })

    it('Play with Radio buttons' , () => {
        cy.get('input[value="radio1"]').as('radioBtn1').check().should('be.checked');
    })

});
