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

Router.route('/problems', {
	name: 'problems', 
	template: 'problems'
});

Router.route('/wiki', {
	name: 'wiki', 
	template: 'wiki'
});

Router.route('/resources', {
	name: 'resources', 
	template: 'resources'
});


