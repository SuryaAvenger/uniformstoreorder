Feature: As a admin i want order list

  Background: Login into the admin portal
    Given Admin is on login page
    When Admin enter username and password
    And click on submit button
    Then Redirects to homepage
    And navigate to Sales->Orders in sidemenu

  @orderlistfilter
  Scenario: check order list fetch
    When order list fetched
    Then displayed in table

  @orderlistfilter
  Scenario Outline: check search filter
    Given user check order list
    When user enter orderid "<orderid>" orderstatus "<orderstatus>" customer "<customer>" total "<total>"
    Then click on filter button

    Examples: 
      | orderid | orderstatus | customer        | total |
      |     774 | Canceled    | Rahul AVUDURTHI |  1500 |
      |         |             | Rahul AVUDURTHI |  1500 |
      |         |             |                 |  1500 |
      |         |             | Rahul AVUDURTHI |       |
      |         | Complete    |                 |       |
      |         | Pending     |                 |       |
