Feature: Navigate to order list

		Background: Login into the admin portal
			Given Admin is on login page
			When Admin enter username and password
			And click on submit button
			Then Redirects to homepage
			And navigate to Sales->Orders in sidemenu
			
		@login	
		Scenario: Click on add api
			When user click on add api button
			Then message appears success api modified
		
