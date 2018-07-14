import Vue from 'vue'
import VueRouter from 'vue-router'
import Organization from '../page/organization/Organization'
import AddEmployee from '../page/organization/children/AddEmployee'
import DeptInfo from '../page/organization/children/DeptInfo'
import Role from '../page/role/Role'

Vue.use(VueRouter);

const routes=[
{
  path:"/organization",name:"organization",component:Organization,children:[
  {path:"/organization/addEmployee",name:"addEmployee",component:AddEmployee},
  {path:"/organization/deptInfo",name:"deptInfo",component:DeptInfo},
    {path:"",component:DeptInfo}

  ]
},
  {path:"/role",name:"role",component:Role}
]
const router=new VueRouter({
  routes
});
export default router;

