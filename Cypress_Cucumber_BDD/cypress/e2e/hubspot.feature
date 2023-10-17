Feature: Hubspot user interaction

 User wants to navigate through the different features

 Background: Launching application
  Given User launches the application

    @smoke
    Scenario: User should be able to browse the application
      When User accept the cookies
      Then User clicks on "Software" link

    @regression
    Scenario: User should be able to click on software link
      When User accept the cookies
      Then User clicks on "Software" link