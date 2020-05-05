import React, { Component } from 'react';
import { Layout } from 'antd';
import { Link } from 'react-router-dom'
import './home.scss'
class Home extends Component {
  state = {}
  render() {
    const { Content } = Layout;
    return (


      <Content style={{ padding: '0 15%', minHeight: 280 }}>
        <Layout style={{ borderRadius: '15px' }}>
          <div className="main-top">
            <h3>SunMedia监测系统已正式上线，感谢您的使用！</h3>
            <p>经过精心的研发，SunMedia采用最新的国际化监测理念研发成功的监测系统已正式上线，在此过程中您如果遇到任何问题或有任何意见或建议，请随时点击最上方的“联系我们”或点击这里来给我们留言。</p>
          </div>
          <div className="main-middle">
            <h3>[通知]您有些帐户还没有添加任何监测点。</h3>
            <p>系统检测到您的如下客户还没有添加任何监测点：DELL Computers，Volvo Cars ，您可以点击链接直接进入活动管理以便添加。</p>
          </div>
          <div className="main-center">
            <div className="main-middle-left">
              <h3>您的账户信息:</h3>
              <p>limingyang123@163.com</p>
              <p>进入用户设置</p>
              <p>您上次登陆是在2020-4-10 18:55:20</p>
              <p>最后一次登陆IP为 202.114.88.10</p>
              <p>您是管理员，您下面有三个标准用户:Sherry, Lisa, Andy</p>
            </div>
            <div className="main-middle-right">
              <h3>您的客户:</h3>
              <div>
                <p><div><Link to='/Customer/1011121/activities'>华为</Link>
                  <span>(8个活动)</span></div>
                  <span>查看列表</span></p>
                <p><span>最后访问的活动 : Q2 Promotion </span><Link to='/Activity/report'>查看报告</Link></p>
              </div>
              <div>
                <p><div><Link to='/Customer/1011122/activities'>京东</Link>
                  <span>(4个活动)</span></div>
                  <span>查看列表</span></p>
                <p><span>最后访问的活动 : S80上市会 </span><Link to='/Activity/report'>查看报告</Link></p>
              </div>
              <div>
                <p><div><Link to='/Customer/1011123/activities'>阿里</Link>
                  <span>(6个活动)</span></div>
                  <span>查看列表</span></p>
                <p><span>最后访问的活动 : SPC Minisite </span><Link to='/Activity/report'>查看报告</Link></p>
              </div>
            </div>
          </div>
          <div className="main-down">
            <Link to='/helpCenter'>帮助中心</Link>
            <p>如果您是第一次登陆或对某些地方不了解，请点击最上面的“帮助中心”。</p>
          </div>
        </Layout>
      </Content>

    );
  }
}

export default Home; 