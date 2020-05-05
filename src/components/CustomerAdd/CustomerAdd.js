import React, { Component } from 'react';
import './customerAdd.scss'
import { Link } from 'react-router-dom'
import { Input, Button } from 'antd';
class CustomerAdd extends Component {
  state = {}
  render() {
    return (
      <div className='customer-add'>
        <div className="add-list">
          <label htmlFor="bianhao">客户编号：<Input placeholder="请输入7位数字" id='bianhao' /></label>
          <label htmlFor="mingcheng">客户名称：<Input placeholder="客户名称" id='mingcheng' /></label>
          <label htmlFor="miaoshu">客户描述：<Input placeholder="简单描述" id='miaoshu' /></label>
          <label htmlFor="num">活动数字：<Input placeholder="活动数字" id='num' /></label>
          <Button type='primary'>提交</Button><Button type='primary'><Link to='/CustomerList'>取消</Link></Button>
        </div>
      </div>
    );
  }
}

export default CustomerAdd;