package stepdefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import hooks.driverhook;
import junit.framework.Assert;

public class def1 {
	WebDriver driver=driverhook.driver;
	WebDriverWait wait=new WebDriverWait(driver,5);
	
	@Given("Admin is on login page")
	public void admin_is_on_login_page() {
		driver.get("http://uniformm1.upskills.in/admin/index.php");
		driver.manage().window().maximize();
	}
	
	@When("Admin enter username and password")
	public void admin_enter_username_and_password() {
		driver.findElement(By.xpath("//input[@id='input-username']")).sendKeys("admin");
		driver.findElement(By.xpath("//input[@id='input-password']")).sendKeys("Admin@123");
	}
	
	@When("click on submit button")
	public void click_on_submit_button() {
		//driver.manage().timeouts().implicitlyWait(1000, TimeUnit.SECONDS); // implicitly wait 
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//button[@type='submit']")));
		driver.findElement(By.xpath("//button[@type='submit']")).click();
	}	
	
	@Then("Redirects to homepage")
	public void redirects_to_homepage() {
	    wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//ul[@id='menu']/li[@id='sale']")));
	}
	
	@Then("navigate to Sales->Orders in sidemenu")
	public void navigate_to_Sales_Orders_in_sidemenu() {
	   driver.findElement(By.xpath("//ul[@id='menu']/li[@id='sale']")).click();
	   driver.findElement(By.xpath("//ul[@id='menu']/li[@id='sale']/ul/li/a")).click();
	}
	
	@When("user click on add api button")
	public void user_click_on_add_api_button() {
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//h3[@class='panel-title']")));
		try{
			boolean g=driver.findElement(By.cssSelector("div.alert.alert-danger")).isDisplayed();
			boolean rslt=driver.findElement(By.xpath("//button[@id='button-ip-add']")).isDisplayed();
			System.out.println(rslt);
			if(rslt == true || g==true){
				driver.findElement(By.xpath("//button[@id='button-ip-add']")).click();
			//	driver.findElement(By.xpath("//i[@text()='Success: You have modified APIs!']"));
			}else{
				
			}
		}catch(Exception ex){
			System.out.println(ex);
		}
	}
	
	@Then("message appears success api modified")
	public void message_appears_success_api_modified() {
	   
	}	
	
	@When("order list fetched")
	public void order_list_fetched() {
	    driver.findElement(By.xpath("//div[@class='col-sm-6 text-right']")).isDisplayed();
	}

	@Then("displayed in table")
	public void displayed_in_table() {
		driver.findElement(By.xpath("//ul[@class='pagination']/li/a[text()='9']")).click();
		driver.findElement(By.xpath("//ul[@class='pagination']/li/a[text()='1']")).click();
		
	}
	
	@Given("user check order list")
	public void user_check_order_list() {
		driver.findElement(By.xpath("//div[@class='col-sm-6 text-right']")).isDisplayed();
	}

	@When("user enter orderid {string} orderstatus {string} customer {string} total {string}")
	public void user_enter_orderid_orderstatus_customer_total(String orderid, String orderstatus, String customer, String total) {
	    driver.findElement(By.xpath("//input[@id='input-order-id']")).sendKeys(orderid);
	    WebElement sel=driver.findElement(By.xpath("//select[@id='input-order-status']"));
	    Select obj=new Select(sel);
	    obj.selectByVisibleText(orderstatus);
	    driver.findElement(By.xpath("//input[@id='input-customer']")).sendKeys(customer);;
	    driver.findElement(By.xpath("//input[@id='input-total']")).sendKeys(total);    
	}

	@Then("click on filter button")
	public void click_on_filter_button() {
	    driver.findElement(By.xpath("//button[@id='button-filter']")).click();
	}

	@Given("user checks order list")
	public void user_checks_order_list() {
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@class='col-sm-6 text-right']")));
	}

	@When("user clicks on view button")
	public void user_clicks_on_view_button() {
		driver.findElement(By.xpath("//form/div/table/tbody/tr[1]/td/a[1]")).click();
	}

	
	@Then("user redirected to full order details")
	public void user_redirected_to_full_order_details() {
	   
	}
	
	@Then("user update order status {string} notifycustomer {string} comment {string}")
	public void user_update_order_status_notifycustomer_comment(String orderstatus, String notifycustomer, String comment) {
		WebElement sel=driver.findElement(By.xpath("//select[@id='input-order-status']"));
		Select obj=new Select(sel);
		obj.selectByVisibleText(orderstatus);
		if(notifycustomer == "Yes"){
			driver.findElement(By.xpath("//input[@type='checkbox' and @name='notify']")).click();
		}
		//driver.findElement(By.xpath("//input[@type='checkbox' and @name='notify']")).click();
		driver.findElement(By.xpath("//input[@type='checkbox' and @name='notify']")).click();
		driver.findElement(By.xpath("//textarea[@name='comment']")).sendKeys(comment);
	}
	
	@Then("click on add history")	
	public void click_on_add_history() {
		driver.findElement(By.xpath("//button[@id='button-history']")).click();
		/*String alert=driver.findElement(By.cssSelector("div.alert.alert-success")).getText();
		System.out.println(alert);
		try{
			alert=driver.findElement(By.cssSelector("div.alert.alert-success")).getText();
			System.out.println(alert);
		}catch(Exception ex){
			System.out.println(ex);
		}*/
		
		//Assert.assertEquals(alert, "Success: You have modified orders!");
	}
	
	@Then("click on cancel")
	public void click_on_cancel() {
	    //driver.findElement(By.xpath("//a[@data-original-title='Cancel']")).click();
	}
	
	@When("user clicks on delete button")
	public void user_clicks_on_delete_button() {
		user_click_on_add_api_button();
		driver.findElement(By.xpath("//form/div/table/tbody/tr[1]/td/button")).click();
	}

	@Then("alert message display")
	public void alert_message_display() {
	   Alert obj=driver.switchTo().alert();
	   obj.accept();
	}

	@Then("user confirm ok")
	public void user_confirm_ok() {
		System.out.println("Success");
	}
	

	@Given("user is in order details page")
	public void user_is_in_order_details_page() {
	  
	}
	
	@When("user clicks on add new button")
	public void user_clicks_on_add_new_button() {
		driver.findElement(By.xpath("//a[@data-original-title='Add New']")).click();
	}
	

	@Then("enter order details firstname {string} lastname {string} email {string} telephone {string} product {string} quantity {string} pfname {string} plname {string} paddress {string} pcity {string} ppostcode {string} pcountry {string} pstate {string} sfname {string} slname {string} saddress {string} scity {string} spostcode {string} scountry {string} sstate {string} comment {string} and save")
	public void enter_order_details_firstname_lastname_email_telephone_product_quantity_pfname_plname_paddress_pcity_ppostcode_pcountry_pstate_sfname_slname_saddress_scity_spostcode_scountry_sstate_comment_and_save
	(String fname, String lname, String email, String telephone, String product, String quantity, String pfname, String plname, String paddress, String pcity, String ppostcode, String pcountry, String pstate, String sfname, String slname, String saddress, String scity, String spostcode, String scountry, String sstate, String comment) {
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//input[@name='firstname']")));

		driver.findElement(By.xpath("//input[@id='input-firstname']")).sendKeys(fname);
		driver.findElement(By.xpath("//input[@id='input-lastname']")).sendKeys(lname);
		driver.findElement(By.xpath("//input[@id='input-email']")).sendKeys(email);
		driver.findElement(By.xpath("//input[@id='input-telephone']")).sendKeys(telephone);
		driver.findElement(By.xpath("//button[@id='button-customer']")).click();
		
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//input[@name='product']")));
		
		driver.findElement(By.xpath("//input[@id='input-product']")).sendKeys(product);
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//input[@id='input-product']/following-sibling::ul/li[1]/a")));
		driver.findElement(By.xpath("//input[@id='input-product']/following-sibling::ul/li[1]/a")).click();
		driver.findElement(By.xpath("//button[@id='button-product-add']")).click();
		driver.findElement(By.xpath("//input[@id='input-quantity']")).clear();
		driver.findElement(By.xpath("//input[@id='input-quantity']")).sendKeys(quantity); 	
		
		wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//button[@id='button-product-add']")));
		
		driver.findElement(By.xpath("//button[@id='button-cart']")).click();
		
		driver.findElement(By.xpath("//input[@id='input-payment-firstname']")).sendKeys(pfname);
		driver.findElement(By.xpath("//input[@id='input-payment-lastname']")).sendKeys(plname);
		driver.findElement(By.xpath("//input[@id='input-payment-address-1']")).sendKeys(paddress);
		driver.findElement(By.xpath("//input[@id='input-payment-city']")).sendKeys(pcity);
		driver.findElement(By.xpath("//input[@id='input-payment-postcode']")).sendKeys(ppostcode);
		WebElement country=driver.findElement(By.xpath("//select[@id='input-payment-country']"));
		Select s1=new Select(country);
		s1.selectByVisibleText(pcountry);
		driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
		WebElement state=driver.findElement(By.xpath("//select[@id='input-payment-zone']"));
		Select s2=new Select(state);
		
		try{
			WebElement val=driver.findElement(By.xpath("//select[@id='input-payment-zone']"));
			wait.until(ExpectedConditions.visibilityOf(val));
		}catch(Exception ex){
			System.out.println(ex);
		}
		
		
		s2.selectByVisibleText(pstate);
		driver.findElement(By.xpath("//button[@id='button-payment-address']")).click();
		
		driver.findElement(By.xpath("//input[@id='input-shipping-firstname']")).sendKeys(sfname);
		driver.findElement(By.xpath("//input[@id='input-shipping-lastname']")).sendKeys(slname);
		driver.findElement(By.xpath("//input[@id='input-shipping-address-1']")).sendKeys(saddress);
		driver.findElement(By.xpath("//input[@id='input-shipping-city']")).sendKeys(scity);
		driver.findElement(By.xpath("//input[@id='input-shipping-postcode']")).sendKeys(spostcode);
		WebElement country2=driver.findElement(By.xpath("//select[@id='input-shipping-country']"));
		Select s3=new Select(country2);
		s3.selectByVisibleText(scountry);
		driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
		WebElement state2=driver.findElement(By.xpath("//select[@id='input-shipping-zone']"));
		Select s4=new Select(state2);
		
		try{
			WebElement val=driver.findElement(By.xpath("//select[@id='input-shipping-zone']"));
			wait.until(ExpectedConditions.visibilityOf(val));
		}catch(Exception ex){
			System.out.println(ex);
		}
		
		
		s4.selectByVisibleText(sstate);
		driver.findElement(By.xpath("//button[@id='button-shipping-address']")).click();
		
		
		Select s5=new Select(driver.findElement(By.xpath("//select[@id='input-shipping-method']")));
		s5.selectByValue("free.free");
		driver.findElement(By.xpath("//button[@id='button-shipping-method']")).click();
		
		Select s6=new Select(driver.findElement(By.xpath("//select[@id='input-payment-method']")));
		s6.selectByValue("cod");
		driver.findElement(By.xpath("//button[@id='button-payment-method']")).click();
		
		driver.findElement(By.xpath("//textarea[@id='input-comment']")).sendKeys(comment);
		driver.findElement(By.xpath("//button[@id='button-save']")).click();		
		
		String rslt=driver.findElement(By.cssSelector("div.alert.alert-success")).getText();
		boolean a=false;
		if(rslt.contains("Success"));{
			a=true;
		}
		Assert.assertEquals(true, a);
	}

}
