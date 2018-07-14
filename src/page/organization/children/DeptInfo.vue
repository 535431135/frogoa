<template>
  <div class="deptInfo">
    <div class="dept_header">
    <div id="left">部门信息</div>
    <div id="right">
      <el-input
        class="common-btn"
        placeholder="请输入员工名称"
        v-model="input23">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
      <router-link to="/organization/addEmployee">  <el-button class="el-btn" type="primary" round>添加员工</el-button></router-link>
    </div>
    </div>
    <div class="main">
      <div class="mannager-info">
        <hr/>
        <p> 部门名称:市场部</p>
       <p>管理人姓名:sunfrog</p>
         <p>管理人电话:1233364723</p>
      </div>
      <div class="employee-list">
        <table style="table-layout: fixed;border-top: solid 1px gray;width: 80%;border-bottom: solid 1px gray">
          <th>姓名</th><th>职称</th><th>电话</th><th>职位状态</th><th>入职时间</th><th>操作</th><th>操作</th><th>操作</th><th>操作</th>
        </table>
      </div>
    </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
  @import '../../../assets/css/common/common.css';

.dept_header{
  margin-bottom: 50px;
}
.main{
  padding-top: 70px;
}
  .deptInfo{
  height:100%;
}
  .mannager-info{
  }
  ul li{
    display:inline;
    padding-right:130px;
  }
  .employee-list{
    width: 79%;
    float: right;

  }
  #left{
    float: left;
    width: 20%;
  }
  #right{
    float: right;
    width: 50%;
  }
</style>
