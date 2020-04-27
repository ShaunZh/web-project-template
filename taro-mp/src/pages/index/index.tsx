import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text, Input } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { add, minus, asyncAdd } from '@/actions/counter'
import { HomeStateType } from '@/reducers/home'
import * as actions from '@/actions/home'

import './index.scss'

// #region 书写注意
//
// 目前 typescript 版本还无法在装饰器模式下将 Props 注入到 Taro.Component 中的 props 属性
// 需要显示声明 connect 的参数类型并通过 interface 的方式指定 Taro.Component 子类的 props
// 这样才能完成类型检查和 IDE 的自动提示
// 使用函数模式则无此限制
// ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20796
//
// #endregion

// TODO: 需要找到counter、home的类型
const mapStateToProps = ({ counter, home }: { counter: any; home: HomeStateType }) => ({
  counter,
  home
})

const mapDispatchToProps = (dispatch) => ({
  add() {
    dispatch(add())
  },
  dec() {
    dispatch(minus())
  },
  asyncAdd() {
    dispatch(asyncAdd())
  },
  dispatchHome(option) {
    dispatch(actions.fetchHome(option))
  }
})
// 此为通过connect注入的redux store
type PageStateProps = ReturnType<typeof mapStateToProps>
type PageDispatchProps = ReturnType<typeof mapDispatchToProps>

// 此为父组件传入的props
type PageOwnProps = {}

// 此为页面state
type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Index {
  props: IProps
}

@connect(mapStateToProps, mapDispatchToProps)
class Index extends Component<IProps, PageState> {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onHandleSearch = (e) => {
    this.props.dispatchHome({
      filterOptions: {
        keywords: e.target.value
      }
    })
  }

  render() {
    return (
      <View className='index'>
        <Button className='add_btn' onClick={this.props.add}>
          +
        </Button>
        <Button className='dec_btn' onClick={this.props.dec}>
          -
        </Button>
        <Button className='dec_btn' onClick={this.props.dispatchHome}>
          async
        </Button>
        <View>
          <Input
            type='text'
            placeholder='将会获取焦点'
            focus
            value={this.props.home.filterOptions.keywords}
            onInput={this.onHandleSearch}
          />
          <Text>{this.props.counter.num}</Text>
        </View>
        <View>
          <Text>Hello, World</Text>
        </View>
      </View>
    )
  }
}

// #region 导出注意
//
// 经过上面的声明后需要将导出的 Taro.Component 子类修改为子类本身的 props 属性
// 这样在使用这个子类时 Ts 才不会提示缺少 JSX 类型参数错误
//
// #endregion

export default Index as ComponentClass<IProps, PageState>
