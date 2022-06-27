Feature: As a admin, i want to view order details, to know complete information

  Background: Login into the admin portal
    Given Admin is on login page
    When Admin enter username and password
    And click on submit button
    Then Redirects to homepage
    And navigate to Sales->Orders in sidemenu

  @vieworderdetails
  Scenario Outline: select view button and update order status
    Given user enter orderid "<orderid>" orderstatus "<orderstatus>" customer "<customer>" total "<total>"
    When user clicks on view button
    Then user redirected to full order details
    And user update order status "<orderstatus2>" notifycustomer "<notifycustomer>" comment "<comment>"
    And click on add history
    And click on cancel

    Examples: 
      | orderid | orderstatus | customer        | total | orderstatus2 | notifycustomer | comment                                                                |
      |     774 | Canceled    | Rahul AVUDURTHI |  1500 | Shipped     | Yes            | Your item was shipped                                                  |
      |     677 | Canceled    | Arpithaa M      |  1500 | Complete    | Yes            | Congrats.. Please review and rate the product for us to serve u better |
