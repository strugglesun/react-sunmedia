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
        {this.props.location.pathname.indexOf('login') > -1 ? <div className="login-logo"><img src={logo} alt="" /></div> :
          <Layout>
            <Header className="header" >
              <Link to='/'><img src={logo} alt="" /></Link>
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ flexGrow: 1 }}>
                <Menu.Item key="1" className={this.props.location.pathname.indexOf('activities'
                ) > -1 ? 'bgc' : this.props.location.pathname.indexOf('report') > -1 ? 'bgc' : ''
                }
                > <Link to='/'>首页</Link></Menu.Item>
                <Menu.Item key="2" className={this.props.location.pathname.indexOf('activities') === -1 ? '' :
                  'bgc'}><Link to='/customerList'>客户管理</Link></Menu.Item>
                <Menu.Item key="3"
                  className={this.props.location.pathname.indexOf('activities') === -1 ? '' :
                    'ant-menu-item-selected'}>活动管理</Menu.Item>
                <Menu.Item key="4"
                  className={this.props.location.pathname.indexOf('report') === -1 ? '' :
                    'ant-menu-item-selected'}
                ><Link to='/activity/report'>查看报告</Link></Menu.Item>
                <Menu.Item key="5"><Link to='/helpCenter'>帮助中心</Link></Menu.Item>

                <Menu.Item key="6"><Link to='/login'>退出登录</Link></Menu.Item>
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