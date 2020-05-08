import React, { Component } from 'react';
import { Modal, Button, Space, message } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import '../CustomerList/customerList.scss'
import { Link } from 'react-router-dom'
class CustomerList extends Component {
  state = {
    customer: [
      {
        id: 1011121,
        name: '华为',
        descrip: '华为公司互动部代理',
        activityNum: '3',
        checked: false
      },
      {
        id: 1011122,
        name: '京东',
        descrip: '京东公司产品部代理',
        activityNum: '3',
        checked: false


      },
      {
        id: 1011123,
        name: '阿里',
        descrip: '阿里公司策划部代理',
        activityNum: '3',
        checked: false

      },
    ],
    checkedAll: false

  }
  render() {
    const { checkedAll } = this.state
    return (
      <div className="customer-list">
        <Link to='/customerList/add'><Button type='primary' >添加新客户</Button></Link>
        <h3>
          <input type="checkbox" checked={checkedAll} onChange={(event) => this.handlerAll(event)} />
          <div className='title'><span>客户编号</span><span>客户名称</span><span>描述</span><span>活动数</span><span>操作</span></div></h3>
        <div className="sider">

          <ul>
            {this.state.customer.map(item =>
              <div key={item.id} className='list'>
                <li key={item.id}>
                  <input type="checkbox" checked={item.checked} onChange={(event) => this.handler(event, item.id)} />

                  <div className="content">

                    <Link to={`/customer/${item.id}/activities`}>
                      <span className='customer'>{item.id}</span></Link>
                    <span>{item.name}</span><span>{item.descrip}</span>
                    <span className='activity'>{item.activityNum}</span>
                    <span className='active'>
                      <b onClick={() => this.edit(item.id)}>编辑</b>
                      <Space><b onClick={() => this.del(item.id)}>删除</b></Space></span>
                  </div>
                </li>
              </div>
            )}
          </ul>
        </div>
      </div>
    );
  }
  edit = (id) => {
    if (this.state.customer.find(item => { return item.id === id }).checked) {
      this.props.history.push('/customerList/edit')
    } else {
      message.warning('请勾选当前编辑项')

    }
  }
  del = (id) => {
    if (this.state.customer.find(item => { return item.id === id }).checked) {
      const { confirm } = Modal;
      const { customer } = this.state
      const that = this
      confirm({
        title: '你确认删除此客户吗',
        icon: <ExclamationCircleOutlined />,
        content: '不可恢复',
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        onOk() {
          const newCustomer = customer.filter((item) => {
            return item.id !== id
          })
          that.setState({
            customer: newCustomer
          })
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    } else {
      message.warning('请勾选当前删除项')
    }

  }
  handler = (event, id) => {
    console.log(id)
    const newCustomer = [...this.state.customer]
    const checkedObj = newCustomer.find(item => {
      return item.id === id
    })
    checkedObj.checked = !checkedObj.checked
    console.log(newCustomer)
    const newCustomer2 = newCustomer.filter(item => {
      return item.checked === false
    })
    this.setState({
      customer: newCustomer,
      // checked: event.target.checked,
      checkedAll: newCustomer2.length ? false : true

    })
  }
  handlerAll = (event) => {
    const newCustomer = [...this.state.customer]
    newCustomer.map(item => {
      return item.checked = !this.state.checkedAll
    })
    console.log(newCustomer)
    this.setState({
      customer: newCustomer,
      checkedAll: event.target.checked

    })
  }




}

export default CustomerList;