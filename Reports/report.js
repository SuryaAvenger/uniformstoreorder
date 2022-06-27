$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/feature/addorder.feature");
formatter.feature({
  "name": "As a admin, i want add order, so i can add orders manually",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "to add order",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@addorder"
    }
  ]
});
formatter.step({
  "name": "user is in order details page",
  "keyword": "Given "
});
formatter.step({
  "name": "user clicks on add new button",
  "keyword": "When "
});
formatter.step({
  "name": "enter order details firstname \"\u003cfirstname\u003e\" lastname \"\u003clastname\u003e\" email \"\u003cemail\u003e\" telephone \"\u003ctelephone\u003e\" product \"\u003cproduct\u003e\" quantity \"\u003cquantity\u003e\" pfname \"\u003cpayment-fname\u003e\" plname \"\u003cpayment-lname\u003e\" paddress \"\u003cpayment-address1\u003e\" pcity \"\u003cpayment-city\u003e\" ppostcode \"\u003cpayment-postcode\u003e\" pcountry \"\u003cpayment-country\u003e\" pstate \"\u003cpayment-state\u003e\" sfname \"\u003cshipping-fname\u003e\" slname \"\u003cshipping-lname\u003e\" saddress \"\u003cshipping-address1\u003e\" scity \"\u003cshipping-city\u003e\" spostcode \"\u003cshipping-postcode\u003e\" scountry \"\u003cshipping-country\u003e\" sstate \"\u003cshipping-state\u003e\" comment \"\u003ccomment\u003e\" and save",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "email",
        "telephone",
        "product",
        "quantity",
        "payment-fname",
        "payment-lname",
        "payment-address1",
        "payment-city",
        "payment-postcode",
        "payment-country",
        "payment-state",
        "shipping-fname",
        "shipping-lname",
        "shipping-address1",
        "shipping-city",
        "shipping-postcode",
        "shipping-country",
        "shipping-state",
        "comment"
      ]
    },
    {
      "cells": [
        "Venkata Surya Deep",
        "vasireddy",
        "surya@gmail.com",
        "8977899870",
        "FULL SLEEVS SWEAT SHIRT",
        "1",
        "Venkata Surya Deep",
        "Vasireddy",
        "13 4 45",
        "Kakinada",
        "533440",
        "India",
        "Andhra Pradesh",
        "Venkata Surya Deep",
        "Vasireddy",
        "13 4 45",
        "Kakinada",
        "533440",
        "India",
        "Andhra Pradesh",
        "we are processing your order please wait"
      ]
    }
  ]
});
formatter.background({
  "name": "Login into the admin portal",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Admin is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "def1.admin_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enter username and password",
  "keyword": "When "
});
formatter.match({
  "location": "def1.admin_enter_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "def1.click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Redirects to homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "def1.redirects_to_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigate to Sales-\u003eOrders in sidemenu",
  "keyword": "And "
});
formatter.match({
  "location": "def1.navigate_to_Sales_Orders_in_sidemenu()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "to add order",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@addorder"
    }
  ]
});
formatter.step({
  "name": "user is in order details page",
  "keyword": "Given "
});
formatter.match({
  "location": "def1.user_is_in_order_details_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on add new button",
  "keyword": "When "
});
formatter.match({
  "location": "def1.user_clicks_on_add_new_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter order details firstname \"Venkata Surya Deep\" lastname \"vasireddy\" email \"surya@gmail.com\" telephone \"8977899870\" product \"FULL SLEEVS SWEAT SHIRT\" quantity \"1\" pfname \"Venkata Surya Deep\" plname \"Vasireddy\" paddress \"13 4 45\" pcity \"Kakinada\" ppostcode \"533440\" pcountry \"India\" pstate \"Andhra Pradesh\" sfname \"Venkata Surya Deep\" slname \"Vasireddy\" saddress \"13 4 45\" scity \"Kakinada\" spostcode \"533440\" scountry \"India\" sstate \"Andhra Pradesh\" comment \"we are processing your order please wait\" and save",
  "keyword": "Then "
});
formatter.match({
  "location": "def1.enter_order_details_firstname_lastname_email_telephone_product_quantity_pfname_plname_paddress_pcity_ppostcode_pcountry_pstate_sfname_slname_saddress_scity_spostcode_scountry_sstate_comment_and_save(String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/feature/delete.feature");
formatter.feature({
  "name": "As a admin, i want delete option, to delete the orders",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "to delete the orders",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@delete"
    }
  ]
});
formatter.step({
  "name": "user enter orderid \"\u003corderid\u003e\" orderstatus \"\u003corderstatus\u003e\" customer \"\u003ccustomer\u003e\" total \"\u003ctotal\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "click on filter button",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on delete button",
  "keyword": "When "
});
formatter.step({
  "name": "alert message display",
  "keyword": "Then "
});
formatter.step({
  "name": "user confirm ok",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "orderid",
        "orderstatus",
        "customer",
        "total"
      ]
    },
    {
      "cells": [
        "608",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "606",
        "",
        "",
        "1500"
      ]
    }
  ]
});
formatter.background({
  "name": "Login into the admin portal",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Admin is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "def1.admin_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enter username and password",
  "keyword": "When "
});
formatter.match({
  "location": "def1.admin_enter_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "def1.click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Redirects to homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "def1.redirects_to_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigate to Sales-\u003eOrders in sidemenu",
  "keyword": "And "
});
formatter.match({
  "location": "def1.navigate_to_Sales_Orders_in_sidemenu()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "to delete the orders",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@delete"
    }
  ]
});
formatter.step({
  "name": "user enter orderid \"608\" orderstatus \"\" customer \"\" total \"\"",
  "keyword": "Given "
});
formatter.match({
  "location": "def1.user_enter_orderid_orderstatus_customer_total(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on filter button",
  "keyword": "And "
});
formatter.match({
  "location": "def1.click_on_filter_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on delete button",
  "keyword": "When "
});
formatter.match({
  "location": "def1.user_clicks_on_delete_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "alert message display",
  "keyword": "Then "
});
formatter.match({
  "location": "def1.alert_message_display()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user confirm ok",
  "keyword": "And "
});
formatter.match({
  "location": "def1.user_confirm_ok()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Login into the admin portal",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Admin is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "def1.admin_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enter username and password",
  "keyword": "When "
});
formatter.match({
  "location": "def1.admin_enter_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "def1.click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Redirects to homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "def1.redirects_to_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigate to Sales-\u003eOrders in sidemenu",
  "keyword": "And "
});
formatter.match({
  "location": "def1.navigate_to_Sales_Orders_in_sidemenu()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "to delete the orders",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@delete"
    }
  ]
});
formatter.step({
  "name": "user enter orderid \"606\" orderstatus \"\" customer \"\" total \"1500\"",
  "keyword": "Given "
});
formatter.match({
  "location": "def1.user_enter_orderid_orderstatus_customer_total(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on filter button",
  "keyword": "And "
});
formatter.match({
  "location": "def1.click_on_filter_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on delete button",
  "keyword": "When "
});
formatter.match({
  "location": "def1.user_clicks_on_delete_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "alert message display",
  "keyword": "Then "
});
formatter.match({
  "location": "def1.alert_message_display()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user confirm ok",
  "keyword": "And "
});
formatter.match({
  "location": "def1.user_confirm_ok()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/feature/feat1.feature");
formatter.feature({
  "name": "Navigate to order list",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "Login into the admin portal",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Admin is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "def1.admin_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enter username and password",
  "keyword": "When "
});
formatter.match({
  "location": "def1.admin_enter_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "def1.click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Redirects to homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "def1.redirects_to_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigate to Sales-\u003eOrders in sidemenu",
  "keyword": "And "
});
formatter.match({
  "location": "def1.navigate_to_Sales_Orders_in_sidemenu()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Click on add api",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.step({
  "name": "user click on add api button",
  "keyword": "When "
});
formatter.match({
  "location": "def1.user_click_on_add_api_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "message appears success api modified",
  "keyword": "Then "
});
formatter.match({
  "location": "def1.message_appears_success_api_modified()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/feature/orderlist.feature");
formatter.feature({
  "name": "As a admin i want order list",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "Login into the admin portal",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Admin is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "def1.admin_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enter username and password",
  "keyword": "When "
});
formatter.match({
  "location": "def1.admin_enter_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "def1.click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Redirects to homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "def1.redirects_to_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigate to Sales-\u003eOrders in sidemenu",
  "keyword": "And "
});
formatter.match({
  "location": "def1.navigate_to_Sales_Orders_in_sidemenu()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "check order list fetch",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@orderlistfilter"
    }
  ]
});
formatter.step({
  "name": "order list fetched",
  "keyword": "When "
});
formatter.match({
  "location": "def1.order_list_fetched()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "displayed in table",
  "keyword": "Then "
});
formatter.match({
  "location": "def1.displayed_in_table()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "check search filter",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@orderlistfilter"
    }
  ]
});
formatter.step({
  "name": "user check order list",
  "keyword": "Given "
});
formatter.step({
  "name": "user enter orderid \"\u003corderid\u003e\" orderstatus \"\u003corderstatus\u003e\" customer \"\u003ccustomer\u003e\" total \"\u003ctotal\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "click on filter button",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "orderid",
        "orderstatus",
        "customer",
        "total"
      ]
    },
    {
      "cells": [
        "774",
        "Canceled",
        "Rahul AVUDURTHI",
        "1500"
      ]
    },
    {
      "cells": [
        "",
        "",
        "Rahul AVUDURTHI",
        "1500"
      ]
    },
    {
      "cells": [
        "",
        "",
        "",
        "1500"
      ]
    },
    {
      "cells": [
        "",
        "",
        "Rahul AVUDURTHI",
        ""
      ]
    },
    {
      "cells": [
        "",
        "Complete",
        "",
        ""
      ]
    },
    {
      "cells": [
        "",
        "Pending",
        "",
        ""
      ]
    }
  ]
});
formatter.background({
  "name": "Login into the admin portal",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Admin is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "def1.admin_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enter username and password",
  "keyword": "When "
});
formatter.match({
  "location": "def1.admin_enter_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "def1.click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Redirects to homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "def1.redirects_to_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigate to Sales-\u003eOrders in sidemenu",
  "keyword": "And "
});
formatter.match({
  "location": "def1.navigate_to_Sales_Orders_in_sidemenu()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "check search filter",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@orderlistfilter"
    }
  ]
});
formatter.step({
  "name": "user check order list",
  "keyword": "Given "
});
formatter.match({
  "location": "def1.user_check_order_list()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter orderid \"774\" orderstatus \"Canceled\" customer \"Rahul AVUDURTHI\" total \"1500\"",
  "keyword": "When "
});
formatter.match({
  "location": "def1.user_enter_orderid_orderstatus_customer_total(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on filter button",
  "keyword": "Then "
});
formatter.match({
  "location": "def1.click_on_filter_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Login into the admin portal",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Admin is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "def1.admin_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enter username and password",
  "keyword": "When "
});
formatter.match({
  "location": "def1.admin_enter_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "def1.click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Redirects to homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "def1.redirects_to_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigate to Sales-\u003eOrders in sidemenu",
  "keyword": "And "
});
formatter.match({
  "location": "def1.navigate_to_Sales_Orders_in_sidemenu()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "check search filter",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@orderlistfilter"
    }
  ]
});
formatter.step({
  "name": "user check order list",
  "keyword": "Given "
});
formatter.match({
  "location": "def1.user_check_order_list()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter orderid \"\" orderstatus \"\" customer \"Rahul AVUDURTHI\" total \"1500\"",
  "keyword": "When "
});
formatter.match({
  "location": "def1.user_enter_orderid_orderstatus_customer_total(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on filter button",
  "keyword": "Then "
});
formatter.match({
  "location": "def1.click_on_filter_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Login into the admin portal",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Admin is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "def1.admin_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enter username and password",
  "keyword": "When "
});
formatter.match({
  "location": "def1.admin_enter_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "def1.click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Redirects to homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "def1.redirects_to_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigate to Sales-\u003eOrders in sidemenu",
  "keyword": "And "
});
formatter.match({
  "location": "def1.navigate_to_Sales_Orders_in_sidemenu()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "check search filter",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@orderlistfilter"
    }
  ]
});
formatter.step({
  "name": "user check order list",
  "keyword": "Given "
});
formatter.match({
  "location": "def1.user_check_order_list()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter orderid \"\" orderstatus \"\" customer \"\" total \"1500\"",
  "keyword": "When "
});
formatter.match({
  "location": "def1.user_enter_orderid_orderstatus_customer_total(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on filter button",
  "keyword": "Then "
});
formatter.match({
  "location": "def1.click_on_filter_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Login into the admin portal",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Admin is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "def1.admin_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enter username and password",
  "keyword": "When "
});
formatter.match({
  "location": "def1.admin_enter_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "def1.click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Redirects to homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "def1.redirects_to_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigate to Sales-\u003eOrders in sidemenu",
  "keyword": "And "
});
formatter.match({
  "location": "def1.navigate_to_Sales_Orders_in_sidemenu()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "check search filter",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@orderlistfilter"
    }
  ]
});
formatter.step({
  "name": "user check order list",
  "keyword": "Given "
});
formatter.match({
  "location": "def1.user_check_order_list()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter orderid \"\" orderstatus \"\" customer \"Rahul AVUDURTHI\" total \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "def1.user_enter_orderid_orderstatus_customer_total(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on filter button",
  "keyword": "Then "
});
formatter.match({
  "location": "def1.click_on_filter_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Login into the admin portal",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Admin is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "def1.admin_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enter username and password",
  "keyword": "When "
});
formatter.match({
  "location": "def1.admin_enter_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "def1.click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Redirects to homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "def1.redirects_to_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigate to Sales-\u003eOrders in sidemenu",
  "keyword": "And "
});
formatter.match({
  "location": "def1.navigate_to_Sales_Orders_in_sidemenu()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "check search filter",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@orderlistfilter"
    }
  ]
});
formatter.step({
  "name": "user check order list",
  "keyword": "Given "
});
formatter.match({
  "location": "def1.user_check_order_list()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter orderid \"\" orderstatus \"Complete\" customer \"\" total \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "def1.user_enter_orderid_orderstatus_customer_total(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on filter button",
  "keyword": "Then "
});
formatter.match({
  "location": "def1.click_on_filter_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Login into the admin portal",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Admin is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "def1.admin_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enter username and password",
  "keyword": "When "
});
formatter.match({
  "location": "def1.admin_enter_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "def1.click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Redirects to homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "def1.redirects_to_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigate to Sales-\u003eOrders in sidemenu",
  "keyword": "And "
});
formatter.match({
  "location": "def1.navigate_to_Sales_Orders_in_sidemenu()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "check search filter",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@orderlistfilter"
    }
  ]
});
formatter.step({
  "name": "user check order list",
  "keyword": "Given "
});
formatter.match({
  "location": "def1.user_check_order_list()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter orderid \"\" orderstatus \"Pending\" customer \"\" total \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "def1.user_enter_orderid_orderstatus_customer_total(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on filter button",
  "keyword": "Then "
});
formatter.match({
  "location": "def1.click_on_filter_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/feature/vieworderdetails.feature");
formatter.feature({
  "name": "As a admin, i want to view order details, to know complete information",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "select view button and update order status",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@vieworderdetails"
    }
  ]
});
formatter.step({
  "name": "user enter orderid \"\u003corderid\u003e\" orderstatus \"\u003corderstatus\u003e\" customer \"\u003ccustomer\u003e\" total \"\u003ctotal\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "user clicks on view button",
  "keyword": "When "
});
formatter.step({
  "name": "user redirected to full order details",
  "keyword": "Then "
});
formatter.step({
  "name": "user update order status \"\u003corderstatus2\u003e\" notifycustomer \"\u003cnotifycustomer\u003e\" comment \"\u003ccomment\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "click on add history",
  "keyword": "And "
});
formatter.step({
  "name": "click on cancel",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "orderid",
        "orderstatus",
        "customer",
        "total",
        "orderstatus2",
        "notifycustomer",
        "comment"
      ]
    },
    {
      "cells": [
        "774",
        "Canceled",
        "Rahul AVUDURTHI",
        "1500",
        "Shipped",
        "Yes",
        "Your item was shipped"
      ]
    },
    {
      "cells": [
        "677",
        "Canceled",
        "Arpithaa M",
        "1500",
        "Complete",
        "Yes",
        "Congrats.. Please review and rate the product for us to serve u better"
      ]
    }
  ]
});
formatter.background({
  "name": "Login into the admin portal",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Admin is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "def1.admin_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enter username and password",
  "keyword": "When "
});
formatter.match({
  "location": "def1.admin_enter_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "def1.click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Redirects to homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "def1.redirects_to_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigate to Sales-\u003eOrders in sidemenu",
  "keyword": "And "
});
formatter.match({
  "location": "def1.navigate_to_Sales_Orders_in_sidemenu()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "select view button and update order status",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@vieworderdetails"
    }
  ]
});
formatter.step({
  "name": "user enter orderid \"774\" orderstatus \"Canceled\" customer \"Rahul AVUDURTHI\" total \"1500\"",
  "keyword": "Given "
});
formatter.match({
  "location": "def1.user_enter_orderid_orderstatus_customer_total(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on view button",
  "keyword": "When "
});
formatter.match({
  "location": "def1.user_clicks_on_view_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user redirected to full order details",
  "keyword": "Then "
});
formatter.match({
  "location": "def1.user_redirected_to_full_order_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user update order status \"Shipped\" notifycustomer \"Yes\" comment \"Your item was shipped\"",
  "keyword": "And "
});
formatter.match({
  "location": "def1.user_update_order_status_notifycustomer_comment(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on add history",
  "keyword": "And "
});
formatter.match({
  "location": "def1.click_on_add_history()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on cancel",
  "keyword": "And "
});
formatter.match({
  "location": "def1.click_on_cancel()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Login into the admin portal",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Admin is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "def1.admin_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enter username and password",
  "keyword": "When "
});
formatter.match({
  "location": "def1.admin_enter_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "def1.click_on_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Redirects to homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "def1.redirects_to_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigate to Sales-\u003eOrders in sidemenu",
  "keyword": "And "
});
formatter.match({
  "location": "def1.navigate_to_Sales_Orders_in_sidemenu()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "select view button and update order status",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@vieworderdetails"
    }
  ]
});
formatter.step({
  "name": "user enter orderid \"677\" orderstatus \"Canceled\" customer \"Arpithaa M\" total \"1500\"",
  "keyword": "Given "
});
formatter.match({
  "location": "def1.user_enter_orderid_orderstatus_customer_total(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on view button",
  "keyword": "When "
});
formatter.match({
  "location": "def1.user_clicks_on_view_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user redirected to full order details",
  "keyword": "Then "
});
formatter.match({
  "location": "def1.user_redirected_to_full_order_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user update order status \"Complete\" notifycustomer \"Yes\" comment \"Congrats.. Please review and rate the product for us to serve u better\"",
  "keyword": "And "
});
formatter.match({
  "location": "def1.user_update_order_status_notifycustomer_comment(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on add history",
  "keyword": "And "
});
formatter.match({
  "location": "def1.click_on_add_history()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on cancel",
  "keyword": "And "
});
formatter.match({
  "location": "def1.click_on_cancel()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});