#language: en

Feature: To do Login 

Scenario: To do login with valid credentials
    Given user are in login page
    When user input valid credenciais
    Then the user should be redirected to the homepage
