const fs = require('fs');

class Util {
    static getLocator(page, element) {
        const locators = JSON.parse(fs.readFileSync('cypress/e2e/pom/locator/locators.json'));
        return locators[page][element];
    }

    static log(message) {
        cy.task('log', message);
    }

    static report(message) {
        cy.task('report', message);
    }
    static takeScreenshot(stepName) {
        const screenshotDir = 'cypress/screenshots';
        if (!fs.existsSync(screenshotDir)) {
            fs.mkdirSync(screenshotDir, { recursive: true });
        }
        cy.screenshot(path.join(screenshotDir, stepName));
    }
}

module.exports = Util;
