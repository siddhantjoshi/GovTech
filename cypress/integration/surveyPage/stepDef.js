const { Given, And, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given('the user lands on the {URL}', (URL) => {
    cy.visit(URL);
});

And('the user enters {text} in the name input field', (text) => {
    cy.get("input[type='text']").type(text);
});

And('the user clicks on the radio button {string}', (ageGroup) => {
        cy.get("div[role='radio'][data-value*='"+ageGroup+"']").click();
   });

And('the user selects {string} from the dropdown', (option) => {
    cy.get('#dropdown').select(option);
});

When('the user clicks on the submit button', () => {
    cy.get('#submit').click();
});

Then('the user should validate the presence of text {text}', (text) => {
    cy.contains(text).should('be.visible');
});

And('the user closes the browser', () => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.window().then(win => {
        win.close();
    });
});