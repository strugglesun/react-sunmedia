import React, { Component } from 'react';
import { Input, Checkbox, Button, message } from 'antd';
import { UserOutlined, UnlockOutlined } from '@ant-design/icons';
import './login.scss'
class Login extends Component {
  state = {
    checked: true,
    value1: '',
    value2: ''
  }
  render() {
    const { checked, value1, value2 } = this.state
    return (
      <div className="login">
        <div className="login-content">
          <div><Input size="large" placeholder="用户名" prefix={<UserOutlined />} value={value1}
            onChange={(event) => { this.setState({ value1: event.target.value }) }}
          /></div>
          <div><Input.Password placeholder="密码" prefix={<UnlockOutlined />} value={value2}
            onChange={(event) => { this.setState({ value2: event.target.value }) }}
          /></div>
          <div className="lock">
            <Checkbox onChange={this.onChange} checked={checked}>记住密码</Checkbox>
            <span>忘记密码</span>
          </div>
          <Button type="primary" onClick={this.openMessage}>登录</Button>
        </div>
      </div>
    );
  }
  onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
    this.setState({
      checked: e.target.checked
    })
  }
  openMessage = () => {
    if (this.state.value1 === '2030442826' && this.state.value2 === 'limingyang123') {
      const key = 'updatable';
      message.loading({ content: 'Loading...', key });
      setTimeout(() => {
        message.success({ content: '登录成功', key, duration: 2 });
      }, 1000);
      setTimeout(() => {
        this.props.history.push('/')
      }, 1200);
    } else {
      message.warning('用户名或密码错误')
    }
  }
}

export default Login;