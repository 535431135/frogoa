<template>
  <div class="header">
    <div id="header-user">
      <el-button type="primary">登录</el-button>
      <el-button type="primary">注册</el-button>
    </div>
    <div id="header-nav">
    <el-menu :default-active="activeIndex" unique-opened=true router=true active-text-color="#FFD700" text-color="#F8F8FF" background-color="#00BFFF" class="el-menu" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">待办事项</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3">合同管理</el-menu-item>
      <el-menu-item index="3">项目管理</el-menu-item>
      <el-menu-item index="4">订单管理</el-menu-item>
      <el-menu-item index="4">公告管理</el-menu-item>
      <el-menu-item index="/organization">组织架构</el-menu-item>
      <el-menu-item index="4">更多功能</el-menu-item>
      <el-submenu index="sys">
      <template slot="title">系统设置</template>
      <el-menu-item index="role">角色管理</el-menu-item>
      <el-menu-item index="user">用户管理</el-menu-item>
      </el-submenu>
    </el-menu>
    </div>

    <div class="line"></div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }

</script>
<style scoped>
  .el-menu{
    align-content: center;
    margin-left: 50px;
    margin-right: 50px;
  }
  #header-user{
    float: right;
    position: relative;
    top:-50px;
    right:50px;
  }
</style>
