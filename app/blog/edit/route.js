import Route from '@ember/routing/route';

const {
  set,
  get
} = Ember
export default Route.extend({
  setupController(controller,model){
    set(controller,'post',model);
    set(controller,'editable',true)
  },
  actions:{
    goBackToIndex(){
      this.transitionTo('blog.index');
    },
    toggleEdit(){
      this.controller.toggleProperty('editable');
    }
  }
});
