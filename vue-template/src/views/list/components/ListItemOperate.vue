<!--
 * @Description: 
 * @Author: Hexon
 * @Date: 2020-04-09 14:40:54
 * @LastEditors: Hexon
 * @LastEditTime: 2020-04-15 14:26:03
 -->

<template>
  <div class="com-list-item-operate">
    <div class="form">
      <van-cell-group>
        <!-- 输入框 -->
        <van-cell title="输入框" title-class="cell-title" value-class="cell-value" class="cell-item">
          <template>
            <van-field
              v-model="form.input"
              placeholder="请输入用户名"
              :error="error.input"
              class="input-field"
              input-align="right"
            />
          </template>
        </van-cell>

        <!-- 密码输入框 -->
        <van-cell title="密码输入" title-class="cell-title" value-class="cell-value" class="cell-item">
          <template>
            <van-field
              v-model="form.password"
              type="password"
              placeholder="请输入密码"
              :error="error.password"
              class="input-field"
              input-align="right"
            />
          </template>
        </van-cell>

        <!-- 单选 -->
        <van-cell title="单选框" title-class="cell-title" value-class="cell-value" class="cell-item">
          <template>
            <van-radio-group v-model="form.radio" class="radio-group">
              <van-radio v-for="item in options.radios" :key="item.value" :name="item.value" label-position="right">
                {{ item.label }}</van-radio
              >
            </van-radio-group>
          </template>
        </van-cell>
        <!-- 复选 -->
        <van-cell title="复选框" title-class="cell-title" value-class="cell-value" class="cell-item">
          <template>
            <van-checkbox-group v-model="form.checkbox" class="checkbox-group">
              <van-checkbox v-for="item in options.checkbox" :key="item.value" :name="item.label" shape="square">
                {{ item.label }}
              </van-checkbox>
            </van-checkbox-group>
          </template>
        </van-cell>
        <!-- 下拉选项 -->
        <van-cell
          title="下拉选项"
          title-class="cell-title"
          value-class="cell-value"
          class="cell-item"
          is-link
          arrow-direction="down"
          input-align="right"
        >
          <template>
            <van-field
              :value="form.select.label"
              class="cell-field"
              readonly
              clickable
              placeholder="选择下拉选项"
              :error="error.select"
              input-align="right"
              @click="pickerShow.select = true"
            />
          </template>
        </van-cell>
        <!-- 省市区 -->
        <van-cell
          title="省市县选择"
          title-class="cell-title"
          value-class="cell-value"
          class="cell-item"
          is-link
          arrow-direction="down"
          input-align="right"
        >
          <template>
            <van-field
              :value="areaDispVal"
              class="area-field"
              readonly
              clickable
              placeholder="请选择省市区"
              :error="error.area"
              input-align="right"
              @click="pickerShow.area = true"
            />
          </template>
        </van-cell>
        <!-- 日期 -->
        <van-cell
          title="日期选择"
          title-class="cell-title"
          value-class="cell-value"
          class="cell-item"
          is-link
          arrow-direction="down"
        >
          <template>
            <van-field
              :value="dateDispVal"
              class="date-field"
              readonly
              clickable
              placeholder="请选择日期"
              :error="error.date"
              input-align="right"
              @click="pickerShow.date = true"
            />
          </template>
        </van-cell>
      </van-cell-group>
    </div>
    <div class="btn-wrap">
      <button class="btn" type="default" @click="onCancel">取消</button>
      <VanButton :disabled="submitting" class="btn" type="info" @click="onSubmit">提交</VanButton>
    </div>
    <!-- ---- end form  -->

    <!-- 省市县弹框 -->
    <van-popup v-model="pickerShow.area" position="bottom">
      <van-area
        :area-list="options.area"
        value="110101"
        class="area-popup"
        @confirm="onAreaPicker"
        @cancel="pickerShow.area = false"
      />
    </van-popup>
    <!-- 年月日弹框 -->
    <van-popup v-model="pickerShow.date" position="bottom">
      <van-datetime-picker
        :value="form.date"
        type="date"
        class="datetime-popup"
        @cancel="pickerShow.date = false"
        @confirm="onDatePicker"
      />
    </van-popup>
    <!-- 下拉选项 -->
    <van-popup v-model="pickerShow.select" position="bottom">
      <van-picker
        show-toolbar
        value-key="label"
        :columns="options.select"
        @cancel="pickerShow.select = false"
        @confirm="onSelectPicker"
      />
    </van-popup>
    <van-overlay :show="showSubmitLoading" />
    <van-loading v-if="showSubmitLoading" class="submit-loading" type="spinner" />
  </div>
</template>

<script>
import listApi from '../service'
import areaData from '../areaData'
import { setInfoToSession, getInfoFromSession } from '../utils'
import {
  Overlay as VanOverlay,
  Loading as VanLoading,
  Checkbox as VanCheckbox,
  CheckboxGroup as VanCheckboxGroup,
  RadioGroup as VanRadioGroup,
  Radio as VanRadio,
  Button as VanButton,
  Field as VanField,
  Cell as VanCell,
  CellGroup as VanCellGroup,
  Picker as VanPicker,
  Popup as VanPopup,
  Area as VanArea,
  DatetimePicker as VanDatetimePicker
} from 'vant'

export default {
  name: 'ComListItemOperate',
  components: {
    VanCheckbox,
    VanCheckboxGroup,
    VanRadioGroup,
    VanRadio,
    VanButton,
    VanField,
    VanCell,
    VanCellGroup,
    VanPicker,
    VanPopup,
    VanArea,
    VanDatetimePicker,
    VanLoading,
    VanOverlay
  },
  props: {
    operate: {
      type: String,
      required: true,
      validator: (value) => {
        return ['detail', 'edit', 'create'].find((item) => item === value)
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
        area: [], // 省市县
        select: {
          label: '',
          value: ''
        },
        date: '', // 日期选择
        imgUpload: '', // 图片上传
        fileUpload: {} // 文件上传
      },
      pickerShow: {
        area: false, // 省市区选择
        date: false, // dateTime 选择
        select: false // 下拉选项
      },
      // 错误状态
      error: {
        input: false,
        password: false,
        checkbox: false,
        area: false,
        date: false,
        imgUpload: false,
        fileUpload: false
      },
      options: {
        area: areaData, // 省市县的数据格式与常用的option格式不同
        // option: [{label: '', value: ''}] // option选项的格式
        radios: [
          {
            label: '男',
            value: '1'
          },
          {
            label: '女',
            value: '2'
          }
        ],
        checkbox: [
          {
            label: '阅读',
            value: '1'
          },
          {
            label: '吉他',
            value: '2'
          }
        ],
        select: [
          {
            label: '下拉选项1',
            value: '1'
          },
          {
            label: '下拉选项2',
            value: '2'
          },
          {
            label: '下拉选项3',
            value: '3'
          }
        ]
      },
      showSubmitLoading: false,
      submitting: false
    }
  },
  computed: {
    // 省市区显示
    areaDispVal() {
      if (!this.form.area.length) return ''
      let val = (this.form.area[0] && this.form.area[0].name) || ''
      val += (this.form.area[1] && this.form.area[1].name) || ''
      val += (this.form.area[2] && this.form.area[2].name) || ''
      return val
    },
    // 日期显示
    dateDispVal() {
      if (!(this.form.date instanceof Date)) return ''
      const date = this.form.date
      return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
    }
  },
  created() {
    this.initDate()
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
        listApi
          .detail({
            number: this.number
          })
          .then((res) => {
            console.log('获取详情，并填入form中')
            // this.form = res.result
          })
      }
    },
    // 获取表单项选项内容，如下拉列表选项
    getOptionsData() {},

    // 省市区处理函数
    onAreaPicker(value) {
      this.form.area = value
      this.pickerShow.area = false
    },
    // 日期选择处理函数
    onDatePicker(e) {
      this.form.date = e
      this.pickerShow.date = false
    },
    // 下拉处理函数
    onSelectPicker(e) {
      this.form.select = e
      this.pickerShow.select = false
    },

    // 校验表单
    checkForm() {
      let isError = false
      this.error.input = !this.form.input.length
      this.error.password = !this.form.password.length
      this.error.radio = !this.form.radio.length
      this.error.checkbox = !this.form.checkbox.length
      this.error.select = !this.form.select.label
      this.error.area = !this.areaDispVal.length
      this.error.date = !this.dateDispVal.length
      if (
        this.error.input ||
        this.error.password ||
        this.error.radio ||
        this.error.checkbox ||
        this.error.area ||
        this.error.date ||
        this.error.select
      ) {
        isError = true
      }

      return isError
    },
    // 用于当http接口入参字段名与我们使用的名不相同时，转换字段名使用
    generateParams() {
      const params = {
        ...this.form
      }
      if (this.operate === 'edit') {
        params.materialNumber = this.number
      }
      return params
    },
    // 提交
    onSubmit() {
      console.log('form: ', this.form)
      if (this.checkForm()) {
        return
      }
      // 延时展示loading
      let timerId = setTimeout(() => {
        this.showSubmitLoading = true
      }, 200)
      const params = this.generateParams()
      this.submitting = true
      const submitApi = this.operate === 'create' ? listApi.create : listApi.edit
      submitApi(params)
        .then((res) => {
          this.$toast.success(this.operate === 'create' ? '发布成功' : '编辑成功')
          // 返回
          this.submitting = false
          this.showSubmitLoading = false
          clearTimeout(timerId)
          this.addSuccessToSession()
          this.$router.back()
        })
        .catch(() => {
          this.submitting = false
          this.showSubmitLoading = false
          clearTimeout(timerId)
        })
    },
    // 操作成功时添加成功信息到session中，供list页面使用
    addSuccessToSession() {
      const info = getInfoFromSession()
      info.success = 'success'
      setInfoToSession(info)
    },
    onCancel() {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
.cell-item {
  align-items: center;
  .cell-title {
    max-width: 80px;
    text-align: left;
  }
}
.radio-group {
  display: flex;
  justify-content: flex-end;
  /deep/ .van-radio {
    margin-left: 14px;
  }
}

.checkbox-group {
  display: flex;
  justify-content: flex-end;
  /deep/ .van-checkbox {
    margin-left: 14px;
  }
}
.btn-wrap {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  .btn:nth-child(2) {
    margin-left: 10px;
  }
}
</style>
