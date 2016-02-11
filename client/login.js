Template.login.events({

	'submit form': function(event){
		event.preventDefault();
		email = $('[name=email]').val();
		var password = $('[name=password]').val();
		Meteor.loginWithPassword(email, password, function(error){
			if(error){
				console.log(error.reason);
			} 
			else{

				toastr.success("Login successful!");
				Router.go("home");
			}
		});
	}
});