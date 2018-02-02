# e2e/features/app.feature
Feature: Greet the user
  As a user of the page
  I should get a customized greet

  Scenario: Get a customized greet
    Given I am on the Home page
    When I click on "greet" button
    Then the greeting should be "Welcome!"