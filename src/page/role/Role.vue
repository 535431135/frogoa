<template>
  <div class="container">
<div class="content">
  <div id="top">
    <div id="roleText">角色列表 </div>  <div><el-button type="primary" round>新增角色</el-button></div>
  </div>
  <div class="role-list">
<table style="border-top: solid 1px darkgray;width: 100%;">
  <th style="border-bottom: solid 1px darkgray;" width="20%">序号</th>
  <th style="border-bottom: solid 1px darkgray;"width="20%">角色名称</th>
  <th style="border-bottom: solid 1px darkgray;"width="20%">状态</th>
  <th style="border-bottom: solid 1px darkgray;"width="20%">操作</th>
  <tr v-for="(role,index) of roleList">
  <td style="border-bottom: solid 1px darkgray;">{{++index}}</td>
    <td style="border-bottom: solid 1px darkgray;">{{role.name}}</td>
    <td style="border-bottom: solid 1px darkgray;" v-if="role.status=='1'">启用</td>
    <td style="border-bottom: solid 1px darkgray;" v-else>弃用</td>
    <td style="border-bottom: solid 1px darkgray;"><a>编辑<router-link></router-link></a></td>
  </tr>
</table>
  </div>
</div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      roleList:[{id:"1",name:"管理员",status:"1"},
        {id:"1",name:"管理员",status:"1"},
        {id:"1",name:"管理员",status:"1"},
        {id:"1",name:"管理员",status:"0"}]
    }
  }
}
</script>
<style>
@import "../../assets/css/common/common.css";
  .container{
    padding:0px 100px 0px;
    width: 1000px;
  }
  .content{
    background-color: gainsboro;
    height: 100%;
  }
  #top{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
  }
  #roleText{
    margin-right: 50px;
  }
  .role-list{
    margin-top: 20px;
  }
</style>
