import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('blog', {path : '/myblog'}, function() {
    this.route('author');
    this.route('edit');
  });
}); 

export default Router;
