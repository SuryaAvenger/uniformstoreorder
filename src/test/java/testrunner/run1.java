package testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="src/test/java/feature",
		glue={"stepdefinition","hooks"},
		plugin={"pretty","html:Reports","junit:Reports/xml1.xml","json:Reports/json1.json"},
		monochrome=true,
		dryRun=false,
		tags={"@login,@orderlistfilter,@vieworderdetails,@addorder,@delete"}
)

public class run1 {

}
