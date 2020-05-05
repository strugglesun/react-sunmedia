import React, { Component } from 'react';
import { Layout, Menu } from 'antd';

import './helpCenter.scss'
class HelpCenter extends Component {
  state = {}
  render() {
    const { Sider, Content } = Layout;
    return (
      <div className='HelpCenter'>
        <Content style={{ padding: '0 15%' }}>
          <Layout className="site-layout-background" style={{ padding: '15px 0' }}>
            <Sider className="site-layout-background" width={250}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
              >

                <Menu.Item key="1">监测术语</Menu.Item>
                <Menu.Item key="2">使用教程</Menu.Item>
                <Menu.Item key="3">录像演示</Menu.Item>



              </Menu>
            </Sider>
            <Content style={{ padding: '0 15px', minHeight: 280 }}>
              <article>
                <h3>什么是CPA、CPC、CPS、CPL、CPM、CPO、PPC、PPL、CPTM？</h3>
                <p>在有关网络广告的术语中，经常会遇到CPA、CPC、CPM、CPO、PPC、PPL、CPTM等缩写字母，这些都是有关网络广告定价方式的缩写短语，下面是关于网络广告定价模式的一组常用术语：</p>
                <p>CPA (Cost-per-Action) ：每次行动的费用，即根据每个访问者对网络广告所采取的行动收费的定价模式。对于用户行动有特别的定义，包括形成一次交易、获得一个注册用户、或者对网络广告的一次点击等。</p>
                <p>CPC (Cost-per-click)： 每次点击的费用。根据广告被点击的次数收费。如关键词广告一般采用这种定价模式。</p>
                <p>CPL(Cost for Per Lead)：按注册成功支付佣金。</p>
                <p>CPM（Cost per Thousand Impressions）：每千次印象费用。广告条每显示1000次（印象）的费用。CPM是最常用的网络广告定价模式之一。</p>
                <p>CPO (Cost-per-Order) ：也称为Cost-per-Transaction，即根据每个订单/每次交易来收费的方式。</p>
                <p>CPS(Cost for Per Sale)：营销效果是指，销售额。</p>
                <p>PPC（Pay-per-Click）：是根据点击广告或者电子邮件信息的用户数量来付费的一种网络广告定价模式。</p>
                <p>PPL（Pay-per-Lead）：根据每次通过网络广告产生的引导付费的定价模式。例如，广告客户为访问者点击广告完成了在线表单而向广告服务商付费。这种模式常用于网络会员制营销模式中为联盟网站制定的佣金模式。</p>
                <p>PPS（Pay-per-Sale）：根据网络广告所产生的直接销售数量而付费的一种定价模式 。</p>
                <p>CPTM (Cost per Targeted Thousand Impressions) ：经过定位的用户（如根据人口统计信息定位）的千次印象费用。CPTM与CPM的区别在于，CPM是所有用户的印象数，而CPTM只是经过定位的用户的印象数.</p>
              </article>
            </Content>
          </Layout>
        </Content>

      </div>
    );
  }
}

export default HelpCenter;