Router.configure({
	//layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
});

Router.route('/', {
	name: 'home', 
	template: 'home'
});

Router.route('/register', {
	name: 'register', 
	template: 'register'
});

Router.route('/login', {
	name: 'login', 
	template: 'login'
});
