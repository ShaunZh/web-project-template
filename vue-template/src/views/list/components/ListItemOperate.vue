<!--
 * @Description: 
 * @Author: Hexon
 * @Date: 2020-04-09 14:40:54
 * @LastEditors: Hexon
 * @LastEditTime: 2020-04-13 18:49:24
 -->

<template>
  <div class="com-list-item-operate">
    <div class="form">
      <van-cell-group>
        <!-- 输入框 -->
        <van-field
          v-model="form.input"
          required
          clearable
          label="输入框"
          placeholder="请输入用户名"
          class="input-field"
        />
        <!-- 密码输入框 -->
        <van-field
          v-model="form.password"
          type="password"
          label="输入密码"
          placeholder="请输入密码"
          required
          class="input-field"
        />
        <!-- 单选 -->
        <van-cell title="单选框">
          <template>
            <van-radio-group v-model="form.radio" class="radio-field">
              <van-radio v-for="item in options.radios" :key="item.value" :name="item.value">
                {{ item.label }}</van-radio
              >
            </van-radio-group>
          </template>
        </van-cell>
        <!-- 复选 -->
        <van-cell title="复选框">
          <template>
            <van-checkbox-group v-model="form.checkbox" class="checkbox-field">
              <van-checkbox v-for="item in options.checkbox" :key="item.value" :name="item.label">
                {{ item.label }}
              </van-checkbox>
            </van-checkbox-group>
          </template>
        </van-cell>
      </van-cell-group>
      <!-- 省市区 -->
      <van-field
        :value="form.area.labelName"
        class="area-field"
        readonly
        label="请选择省市区"
        clickable
        placeholder="省市县选择"
        :error="errorMessage.area"
        @click="pickerShow.area = true"
      />
      <!-- 日期 -->
      <van-field
        :value="form.date"
        class="date-field"
        readonly
        label="请选择日期"
        clickable
        placeholder="日期选择"
        :error="errorMessage.date"
        @click="pickerShow.date = true"
      />
    </div>
    <!-- ---- end form  -->

    <!-- 省市县弹框 -->
    <van-popup v-model="pickerShow.area" position="bottom">
      <van-area :area-list="options.area" value="110101" class="area-popup" @confirm="onArea" />
    </van-popup>
    <!-- 年月日弹框 -->
    <van-popup v-model="pickerShow.date" position="bottom">
      <van-datetime-picker v-model="form.date" type="date" :min-date="minDate" class="datetime-popup" />
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'ComListItemOperate',
  props: {
    operate: {
      type: String,
      required: true,
      validator: (value) => {
        return ['detail', 'edit', 'create'].find(value)
      }
    },
    // item 编码
    number: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      form: {
        input: '', // 输入框
        password: '', // 密码输入
        radio: '', // 单选
        checkbox: [], // 多选
        area: '', // 省市县
        date: '', // 日期选择
        imgUpload: '', // 图片上传
        fileUpload: {} // 文件上传
      },
      pickerShow: {
        area: false,
        date: false
      },
      errorMessage: {
        input: '',
        password: '',
        area: '',
        date: ''
      },
      options: {
        area: {}, // 省市县的数据格式与常用的option格式不同
        // option: [{label: '', value: ''}] // option选项的格式
        radios: [],
        checkbox: []
      }
    }
  },
  methods: {
    // 初始化数据
    initDate() {
      this.getOptionsData()
      this.getDetail()
    },
    // 获取详情
    getDetail() {
      if (this.operate === 'edit') {
        console.log('请求数据')
      }
    },
    // 获取表单项选项内容
    getOptionsData() {},
    // 省市区处理函数
    onAreaPicker(value, index) {
      console.log('address picker: ', value, index)
    }
  }
}
</script>
