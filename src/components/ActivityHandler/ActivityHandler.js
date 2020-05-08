import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Input, Button } from 'antd';
import './activityHandler.scss'
class ActivityHandler extends Component {
  state = {}
  render() {
    return (
      <div className="activity-handler">
        <div className="add-list">
          <label htmlFor="bianhao">活动名称：<Input placeholder="请输入活动名称" id='bianhao' /></label>
          <label htmlFor="mingcheng">活动描述：<Input placeholder="活动描述" id='mingcheng' /></label>
          <label htmlFor="miaoshu">活动数量：<Input placeholder="活动数量" id='miaoshu' /></label>
          <label htmlFor="num">开始时间：<Input placeholder="请输入开始时间" id='num' /></label>
          <label htmlFor="end">结束时间：<Input placeholder="请输入结束时间" id='end' /></label>
          <Button type='primary'><Link to='/customer/1011121/activities'>提交</Link></Button><Button type='primary'><Link to='/customer/1011121/activities'>取消</Link></Button>
        </div>
      </div>
    );
  }
}

export default ActivityHandler;