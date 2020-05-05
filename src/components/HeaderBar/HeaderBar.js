import React, { Component } from 'react';
import { Layout, Menu } from 'antd'
import './headerBar.scss'
import logo from '../../img/u2_normal.gif'
import { Link, withRouter } from 'react-router-dom'
class HeaderBar extends Component {
  state = {}
  render() {
    const { Header } = Layout;
    return (

      <div className="headerBar">
        {this.props.location.pathname.indexOf('Login') > -1 ? <div className="login-logo"><img src={logo} alt="" /></div> :
          <Layout>
            <Header className="header">
              <Link to='/'><img src={logo} alt="" /></Link>
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1"><Link to='/'>首页</Link></Menu.Item>
                <Menu.Item key="2"><Link to='/CustomerList'>客户管理</Link></Menu.Item>
                <Menu.Item key="3"><Link to='/Activity/report'>查看报告</Link></Menu.Item>
                <Menu.Item key="4"><Link to='/HelpCenter'>帮助中心</Link></Menu.Item>

                <Menu.Item key="5"><Link to='/Login'>退出登录</Link></Menu.Item>
              </Menu>
              <p>limingyang123@163.com</p>
            </Header>
          </Layout>
        }

      </div>

    );
  }
}

export default withRouter(HeaderBar);