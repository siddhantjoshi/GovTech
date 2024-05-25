const Util = require('../utilities/util');

class SurveyPage {
    visit() {
        cy.visit('https://docs.google.com/forms/d/e/1FAIpQLScPfEbpaoUu3WVwSDM9wIFX5uo1XQ1xpuHNtP7cF_rkR-o8Zg/viewform');
        Util.takeScreenshot('visit');
    
    }

    fillSurveyDetailsName(details) {
        cy.get(Util.getLocator('surveyPage', 'name_input_field')).type(details);
        Util.takeScreenshot('fillSurveyDetailsName');
        
    }
    fillSurveyDetailsAge() {
        cy.get(Util.getLocator('surveyPage', 'under_age_radio_button')).click();
        Util.takeScreenshot('fillSurveyDetailsAge');

    }
    fillSurveyDetailsExercise(option) {
        cy.get(Util.getLocator('surveyPage', 'exercise_drop_down')).click();
        if (option.toLowerCase === 'yes') {
            cy.get(Util.getLocator('surveyPage', 'exercise_yes')).click();
        } else if (option.toLowerCase === 'no') {
            cy.get(Util.getLocator('surveyPage', 'exercise_no')).click();
        }
        Util.takeScreenshot('fillSurveyDetailsExercise');

    }
    submit() {
        cy.get(Util.getLocator('surveyPage', 'submitButton')).submit();
        Util.takeScreenshot('submit');
        
    }
    verifySbmition(message) {
        cy.url().should('include', '/formResponse');
        cy.get(Util.getLocator('surveyPage', 'survey_confirm')).contains(message).should('be.visible');
        Util.takeScreenshot('verifySbmition');
        
    }
    closeBrowser() {
        cy.clearCookies();
        cy.clearLocalStorage();
        Util.takeScreenshot('closeBrowser');
        cy.window().then(win => {
            win.close();
        });
    }
}

module.exports = new SurveyPage();
