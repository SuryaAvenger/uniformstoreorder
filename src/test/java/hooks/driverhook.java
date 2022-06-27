package hooks;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class driverhook {
	public static WebDriver driver;
	
	@Before
	public void init(){
		System.setProperty("webdriver.chrome.driver", ".//lib//chromedriver.exe");
		driver=new ChromeDriver();
		//driver.manage().timeouts().implicitlyWait(1000, TimeUnit.SECONDS);
	}
	
	@After
	public void close(){
		//driver.manage().timeouts().implicitlyWait(5000, TimeUnit.SECONDS);
		driver.quit();
	}
}
