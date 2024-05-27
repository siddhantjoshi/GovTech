const fs = require('fs');
const path = require('path');

class Util {
    static getLocator(page, element) {
        return cy.readFile('cypress/e2e/pom/locator/locators.json').then((locators) => {
            return locators[page][element];
        });
    }

    static log(message) {
        const timeStamp = new Date().getTime();
        const logFilePath = `cypress/logs/log_${timeStamp}.txt`;
        cy.writeFile(logFilePath, `${new Date().toISOString()}: ${message}\n`);
    }

    static report(message) {
        const reportFilePath = `cypress/reports/report_${new Date().getTime()}.txt`;
        cy.writeFile(reportFilePath, `${new Date().toISOString()}: ${message}\n`);
    }

    static generateHTMLReport() {
        // Execute Cypress command to generate HTML report using the configured reporter
        cy.task('generateHTMLReport');
    }

    static takeScreenshot(stepName) {
        const timestamp = new Date().toISOString().replace(/:/g, "-");
        const screenshotName = `${stepName}_${timestamp}_.png`;
        const screenshotPath = path.join(`${new Date().toISOString()}`, screenshotName);
        cy.screenshot(screenshotPath);
    }
}

module.exports = Util;
