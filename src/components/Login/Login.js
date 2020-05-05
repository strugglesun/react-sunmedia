import React, { Component } from 'react';
import { Input, Checkbox, Button, message } from 'antd';
import { Link } from 'react-router-dom'
import { UserOutlined, UnlockOutlined } from '@ant-design/icons';
import './login.scss'
class Login extends Component {
  state = {
    checked: true
  }
  render() {
    const { checked } = this.state
    return (
      <div className="login">
        <div className="login-content">
          <div><Input size="large" placeholder="用户名" prefix={<UserOutlined />} /></div>
          <div><Input size="large" placeholder="密码" prefix={<UnlockOutlined />} /></div>
          <div className="lock">
            <Checkbox onChange={this.onChange} checked={checked}>记住密码</Checkbox>
            <span>忘记密码</span>
          </div>
          <Link to='/'><Button type="primary" onClick={this.openMessage}>登录</Button></Link>
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
    const key = 'updatable';
    message.loading({ content: 'Loading...', key });
    setTimeout(() => {
      message.success({ content: '登录成功', key, duration: 2 });
    }, 1000);
  };
}

export default Login;