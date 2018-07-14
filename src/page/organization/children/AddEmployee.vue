<template>
  <div class="add-employee">
    <div class="header"><div class="h-left"><i class="el-icon-location-outline"></i>当前部门:</div>
      <div class="h-right"><a @click="back">返回</a></div>
    </div>
    <div class="main">
    <span style="color: red">*</span>手机号码: <el-input  class="common-btn" placeholder="请输入内容"></el-input><br/>
    员工姓名: <el-input  class="common-btn" placeholder="请输入内容"></el-input><br/>
    员工职称: <el-input  class="common-btn" placeholder="请输入内容"></el-input><br/>
    员工编号: <el-input  class="common-btn" placeholder="请输入内容"></el-input><br/>
    职位:   <el-select v-model="value" placeholder="请选择">
    <el-option
      class="common-btn"
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select><br/>
    入职时间:
    <el-date-picker
      class="common-btn"
      v-model="value2"
      align="right"
      type="date"
      placeholder="选择日期"
      :picker-options="pickerOptions1">
    </el-date-picker>
    <br/>
    职位状态:<el-radio-group class="common-btn" v-model="isEmployee" size="small">
    <el-radio-button label="在职"></el-radio-button>
    <el-radio-button label="离职" ></el-radio-button>
  </el-radio-group>
    <br/>
    <br/>
    <el-button type="primary" width="100px" size="mini" round>保存</el-button>
    <el-button  size="mini" round>取消</el-button>
  </div>
  </div>
</template>
<script>
  let pickerOptions1={
    disabledDate(time) {
      return time.getTime() > Date.now();
    },
    shortcuts: [{
      text: '今天',
      onClick(picker) {
        picker.$emit('pick', new Date());
      }
    }, {
      text: '昨天',
      onClick(picker) {
        const date = new Date();
        date.setTime(date.getTime() - 3600 * 1000 * 24);
        picker.$emit('pick', date);
      }
    }, {
      text: '一周前',
      onClick(picker) {
        const date = new Date();
        date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
        picker.$emit('pick', date);
      }
    }]
  };
  export default {
    data() {
      return {
        pickerOptions1,
        value2:"",
        isEmployee:"在职"
      }
    },methods:{
      back(){
        window.history.go(-1);
      }
    }
  }
</script>
<style scoped rel="stylesheet">
  @import '../../../assets/css/common/common.css';
.header{
  display: inline;
}
  .h-left{

}
  .h-right{
  }

</style>
