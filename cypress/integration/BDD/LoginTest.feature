@Feature-001 
Feature: Health Survey Feature
pre

    @Regression @smoke
    Scenario: Verify user under 18 can fill out health survey
        Given the user lands on the "https://docs.google.com/forms/d/e/1FAIpQLScPfEbpaoUu3WVwSDM9wIFX5uo1XQ1xpuHNtP7cF_rkR-o8Zg/viewform"
        And the user enters "value" in the name input field
        And the user clicks on the radio button "Under 18"    
        # And the user selects "Yes" from the dropdown
        # When the user clicks on the submit button 
        # Then the user should validate the presence of text "Your response has been recorded"
        # And the user close the browser
    
    # @regression 
    # Scenario: Verify user above 18 can fill out health survey
    #     Given the user lands on the URL
    #     And the user verifies the page title
    #     And the user enters a name in the name input field
    #     And the user clicks on the radio button for above_18    
    #     And the user selects "No" from the dropdown 
    #     When the user clicks on the submit button 
    #     Then the user should validate the presence of text "Your response has been recorded"
    #     And the user should validate the presence of a link for another response
    #     And the user close the browser
    