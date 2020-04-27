import { ComponentClass } from 'react'
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { UserStateType } from '@/reducers/user'
import { dispatchLogin, dispatchWxLogin } from '@/actions/user'
import { LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS } from '@/constants/user'

const mapStateToProps = ({ user }: { user: UserStateType }) => ({
  showAuthDialog: user.showAuthDialog,
  loginStatus: user.loginStatus
})

const mapDispatchToProps = (dispatch) => ({
  async dispatchLogin(): Promise<any> {
    await dispatch(dispatchLogin())
  },
  async dispatchWxLogin(object): Promise<any> {
    await dispatch(dispatchWxLogin(object))
  }
})

type pageStateProps = ReturnType<typeof mapStateToProps>
type pageDispatchProps = ReturnType<typeof mapDispatchToProps>

type IProps = pageStateProps & pageDispatchProps

type PageState = {
  // showAuthDialog: boolean
}

interface Entry {
  props: IProps
}

@connect(mapStateToProps, mapDispatchToProps)
class Entry extends Component<IProps, PageState> {
  componentDidMount() {
    this.props
      .dispatchLogin()
      .then(() => {
        console.log('登录成功')
      })
      .catch(() => {
        console.log('登录失败')
      })
  }
  bindGetUserInfo(e) {
    // 点击了允许
    console.log(e)
    if (e.detail.userInfo) {
      this.props.dispatchWxLogin(e.detail.userInfo)
    } else {
      console.log('点击拒绝')
    }
  }
  render() {
    console.log('props: ', this.props)
    const { loginStatus, showAuthDialog } = this.props
    return (
      <View>
        {loginStatus === LOGIN_REQUEST && <Text>登录中</Text>}
        {loginStatus === LOGIN_SUCCESS && <Text>登录成功</Text>}
        {loginStatus === LOGIN_FAILURE && <Text>登录失败</Text>}
        {showAuthDialog && (
          <View>
            <Button
              type='primary'
              open-type='getUserInfo'
              onGetUserInfo={this.bindGetUserInfo.bind(this)}
            >
              授权登录
            </Button>
          </View>
        )}
      </View>
    )
  }
}

export default Entry as ComponentClass<IProps, PageState>
