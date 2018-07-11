import Vue from 'vue'
import VueRouter from 'vue-router'
import Organization from '../page/organization/Organization'
Vue.use(VueRouter);

const routes=[
{path:"/organization",name:"organization",component:Organization}
]
const router=new VueRouter({
  routes
});
export default router;

