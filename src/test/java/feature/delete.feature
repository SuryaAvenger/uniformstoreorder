Feature: As a admin, i want delete option, to delete the orders

  Background: Login into the admin portal
    Given Admin is on login page
    When Admin enter username and password
    And click on submit button
    Then Redirects to homepage
    And navigate to Sales->Orders in sidemenu

  @delete
  Scenario Outline: to delete the orders
    Given user enter orderid "<orderid>" orderstatus "<orderstatus>" customer "<customer>" total "<total>"
    And click on filter button
    When user clicks on delete button
    Then alert message display
    And user confirm ok

    Examples: 
      | orderid | orderstatus | customer | total |
      |     608 |             |          |       |
      |     606 |             |          |  1500 |
