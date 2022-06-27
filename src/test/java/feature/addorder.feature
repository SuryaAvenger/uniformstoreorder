Feature: As a admin, i want add order, so i can add orders manually

  Background: Login into the admin portal
    Given Admin is on login page
    When Admin enter username and password
    And click on submit button
    Then Redirects to homepage
    And navigate to Sales->Orders in sidemenu

  @addorder
  Scenario Outline: to add order
    Given user is in order details page
    When user clicks on add new button
    Then enter order details firstname "<firstname>" lastname "<lastname>" email "<email>" telephone "<telephone>" product "<product>" quantity "<quantity>" pfname "<payment-fname>" plname "<payment-lname>" paddress "<payment-address1>" pcity "<payment-city>" ppostcode "<payment-postcode>" pcountry "<payment-country>" pstate "<payment-state>" sfname "<shipping-fname>" slname "<shipping-lname>" saddress "<shipping-address1>" scity "<shipping-city>" spostcode "<shipping-postcode>" scountry "<shipping-country>" sstate "<shipping-state>" comment "<comment>" and save

    Examples: 
      | firstname          | lastname  | email           | telephone  | product                 | quantity | payment-fname      | payment-lname | payment-address1 | payment-city | payment-postcode | payment-country | payment-state  | shipping-fname     | shipping-lname | shipping-address1 | shipping-city | shipping-postcode | shipping-country | shipping-state | comment                                  |
      | Venkata Surya Deep | vasireddy | surya@gmail.com | 8977899870 | FULL SLEEVS SWEAT SHIRT |        1 | Venkata Surya Deep | Vasireddy     | 13 4 45          | Kakinada     |           533440 | India           | Andhra Pradesh | Venkata Surya Deep | Vasireddy      | 13 4 45           | Kakinada      |            533440 | India            | Andhra Pradesh | we are processing your order please wait |
