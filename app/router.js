import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function() {
    this.route('todos-list', { path: 'lists' });
    this.route('todos-item', { path: 'lists/:id' });

});

export default Router;