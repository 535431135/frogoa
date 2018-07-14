<template>
  <div class="organization">
    <div class="left">
      <span>部门列表:</span>
      <div class="deptList">
        <ul>
         <router-link to="/home"> <li>市场部</li></router-link>
          <li>市场部</li>
          <li>市场部</li>
          <li>市场部</li>
          <li>市场部</li>
          <li>市场部</li>
          <li>市场部</li>
          <li>市场部</li>
          <li>市场部</li>
          <li>市场部</li>
          <li>市场部</li>
          <li>市场部</li>
          <li>市场部</li>
          <li>市场部</li>
          <li>市场部</li>
          <li>市场部</li>
          <li>市场部</li>
          <li>市场部</li>
        </ul>
      </div>
    </div>
<router-view></router-view>

  </div>
</template>
<script>
    export default {


  }
</script>
<style scoped>
.left{
  float: left;
  width:20%;
  height: 500px;
  border-right: solid 1px gray;
}
  .organization{
    margin-top: 10px;
    height: 600px;
  }

  .deptList{
    overflow: scroll;
    height: 100%;
    float: left;
  }
  .deptList li
  {
    width: 50%;
    line-height: 30px;
    border-bottom: solid 1px gray;
  }
</style>
