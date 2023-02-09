import { MainView } from './views/main/main';

class App {
	routes = [
		{path: "", view: MainView }
	];

	constructor() {
		window.addEventListener('hashchange', this.route.bind(this));
		this.route();
	}

	route() {
		if (this.currentView) {
			this.currentView.destroy();
		}
		const view = this.routes.find(r => r.path == location.hash).view;
		this.currentView = new view();
		this.currentView.render();
	}
}

new App();