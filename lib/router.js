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

Router.route('/about', {
	name: 'about', 
	template: 'about'
});

Router.route('/forums', {
	name: 'forums', 
	template: 'forums'
});

Router.route('/wiki/math', {
	name: 'wiki/math', 
	template: 'wiki/math'
});

Router.route('/wiki/physics', {
	name: 'wiki/physics', 
	template: 'wiki/physics'
});

Router.route('/wiki/chemistry', {
	name: 'wiki/chemistry', 
	template: 'wiki/chemistry'
});

Router.route('/wiki/biology', {
	name: 'wiki/biology', 
	template: 'wiki/biology'
});

Router.route('/wiki/informatics', {
	name: 'wiki/informatics', 
	template: 'wiki/informatics'
});


