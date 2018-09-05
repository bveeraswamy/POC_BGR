import Route from '@ember/routing/route';


const{
  set
}=Ember;

export default Route.extend({
  model:function(){
  return this.store.createRecord('post',{
    title: 'Common blog post',
    author: 'bala',
    content: 'default contant'
  }); 
},
setupController(controller,model){
  set(controller,'post',model);
}
});
