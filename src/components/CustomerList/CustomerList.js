import React, { Component } from 'react';
import '../CustomerList/customerList.scss'
import { Button } from 'antd';
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
        <Link to='/CustomerList/add'><Button type='primary' >添加新客户</Button></Link>
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

                    <Link to={`/Customer/${item.id}/activities`}>
                      <span className='customer'>{item.id}</span></Link>
                    <span>{item.name}</span><span>{item.descrip}</span>
                    <span className='activity'>{item.activityNum}</span><span className='active'><b>编辑</b>
                      <b onClick={() => this.del(item.id)}>删除</b></span>
                  </div>
                </li>
              </div>
            )}
          </ul>
        </div>
      </div>
    );
  }
  del = (id) => {
    const newCustomer = this.state.customer.filter((item) => {
      return item.id !== id
    })
    this.setState({
      customer: newCustomer
    })
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
      checked: event.target.checked,
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