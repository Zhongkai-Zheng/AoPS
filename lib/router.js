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
	name: 'mathwiki', 
	template: 'mathwiki'
});

Router.route('/wiki/physics', {
	name: 'physicswiki', 
	template: 'physicswiki'
});

Router.route('/wiki/chemistry', {
	name: 'chemistrywiki', 
	template: 'chemistrywiki'
});

Router.route('/wiki/biology', {
	name: 'biologywiki', 
	template: 'biologywiki'
});

Router.route('/wiki/informatics', {
	name: 'informaticswiki', 
	template: 'informaticswiki'
});


