<template>
  <div id="form">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item
        label="活动名称"
        prop="name"
      >
        <el-input
          v-model="ruleForm.name"
          :disabled="disabledForm.name"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="活动区域"
        prop="region"
      >
        <el-select
          v-model="ruleForm.region"
          placeholder="请选择活动区域"
          :disabled="disabledForm.region"
        >
          <el-option
            label="区域一"
            value="shanghai"
          ></el-option>
          <el-option
            label="区域二"
            value="beijing"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item
        label="活动时间"
        required
      >
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="ruleForm.date1"
              style="width: 100%;"
              :disabled="disabledForm.date1"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col
          class="line"
          :span="2"
        >-</el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker
              type="fixed-time"
              placeholder="选择时间"
              v-model="ruleForm.date2"
              :disabled="disabledForm.date2"
              style="width: 100%;"
            ></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item
        label="即时配送"
        prop="delivery"
      >
        <el-switch
          v-model="ruleForm.delivery"
          :disabled="disabledForm.delivery"
        ></el-switch>
      </el-form-item>
      <el-form-item
        label="活动性质"
        prop="type"
      >
        <el-checkbox-group
          v-model="ruleForm.type"
          :disabled="disabledForm.type"
        >
          <el-checkbox
            label="美食/餐厅线上活动"
            name="type"
          ></el-checkbox>
          <el-checkbox
            label="地推活动"
            name="type"
          ></el-checkbox>
          <el-checkbox
            label="线下主题活动"
            name="type"
          ></el-checkbox>
          <el-checkbox
            label="单纯品牌曝光"
            name="type"
          ></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item
        label="特殊资源"
        prop="resource"
      >
        <el-radio-group
          v-model="ruleForm.resource"
          :disabled="disabledForm.resource"
        >
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item
        label="活动形式"
        prop="desc"
      >
        <el-input
          type="textarea"
          :disabled="disabledForm.desc"
          v-model="ruleForm.c"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          :disabled="disabledForm.submit"
          type="primary"
          @click="submitForm('ruleForm')"
        >立即创建</el-button>
        <el-button
          @click="resetForm('ruleForm')"
          :disabled="disabledForm.cancel"
        >重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { data_form, data_rule, data_disabled } from "./js/form.js";
import { formMiMx } from "./js/formMimx.js";
export default {
  mixins: [formMiMx],
  data() {
    return {
      ruleForm: {
        ...data_form
      },
      rules: {
        ...data_rule
      },
      disabledForm: {
        ...data_disabled
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  mounted() {
    console.log("minmixform");
		this.add(1, 2);
		console.log(this.disabledForm)
  }
};
</script>
<style>
</style>
