import React, { Component } from 'react';
import './activityList.scss'
import { Modal, Button, message } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import { Link } from 'react-router-dom'

class ActivityList extends Component {
  state = {
    activityList: [
      {
        id: 1,
        customerId: 1011121,
        activityGulp: [
          {
            id: 11,
            activityName: 'PH2019',
            activityDes: '2019惠东财年活动',
            activityNum: 3,
            startTime: '2019 - 4 - 20',
            endTime: '2019 - 5 - 30',
            checked: false
          },
          {
            id: 12,
            activityName: 'ZH2019',
            activityDes: '2020开年酬宾活动',
            activityNum: 5,
            startTime: '2019 - 8 - 12',
            endTime: '2019 - 9 - 30',
            checked: false
          },
          {
            id: 13,
            activityName: 'GH2019',
            activityDes: '2020企鹅年活动',
            activityNum: 2,
            startTime: '2020 - 8 - 20',
            endTime: '2020 - 9 - 30',
            checked: false
          }
        ]
      },
      {
        id: 2,
        customerId: 1011122,
        activityGulp: [
          {
            id: 21,
            activityName: 'PH2019',
            activityDes: '2019天猫活动',
            activityNum: 3,
            startTime: '2019 - 4 - 20',
            endTime: '2019 - 5 - 30',
            checked: false
          },
          {
            id: 22,
            activityName: 'ZH2019',
            activityDes: '2020开年酬宾活动',
            activityNum: 5,
            startTime: '2019 - 8 - 12',
            endTime: '2019 - 9 - 30',
            checked: false
          },
          {
            id: 23,
            activityName: 'GH2019',
            activityDes: '2020企鹅年活动',
            activityNum: 2,
            startTime: '2020 - 8 - 20',
            endTime: '2020 - 9 - 30',
            checked: false
          }
        ]
      },
      {
        id: 3,
        customerId: 1011123,
        activityGulp: [
          {
            id: 31,
            activityName: 'PH2019',
            activityDes: '2019惠东财年活动',
            activityNum: 3,
            startTime: '2019 - 4 - 20',
            endTime: '2019 - 5 - 30',
            checked: false
          },
          {
            id: 32,
            activityName: 'ZH2019',
            activityDes: '2020开年酬宾活动',
            activityNum: 5,
            startTime: '2019 - 8 - 12',
            endTime: '2019 - 9 - 30',
            checked: false
          },
          {
            id: 33,
            activityName: 'GH2019',
            activityDes: '2020企鹅年活动',
            activityNum: 2,
            startTime: '2020 - 8 - 20',
            endTime: '2020 - 9 - 30',
            checked: false
          }
        ]
      }
    ],
    checkedAll: false

  }
  render() {

    const { checkedAll } = this.state

    return (
      <div className="activityList">
        {/* <h3></h3> */}
        <Link to='/activities/add'><Button type='primary' >添加新活动</Button></Link>
        <Link to='/customerList' style={{ fontWeight: "bold", fontSize: '20px' }}>客户:{this.props.location.pathname.indexOf('1011121') > -1 ? '华为' : this.props.location.pathname.indexOf('1011122') > -1 ? '京东' : '阿里'}</Link>
        <h3>
          <input type="checkbox" checked={checkedAll} onChange={this.handlerAll} />
          <div className="title">
            <span>客户活动集</span><span>描述</span><span>活动数</span><span>开始时间</span><span>结束时间</span>
            <span>操作</span>
          </div>
        </h3>
        <ul>
          {this.filterAct(this.state.activityList).map((item) => <li key={item.id}>
            <input type="checkbox" checked={item.checked} onChange={(event) => this.handler(event, item.id)} />
            <div className="content">
              <span><Link to='/activities/activityview'>{item.activityName}</Link></span><span>{item.activityDes}</span><span className='activity'>{item.activityNum}</span>
              <span>{item.startTime}</span><span>{item.endTime}</span><span className='active'>
                <b onClick={() => this.edit(item.id)} >编辑</b>
                <b onClick={() => this.del(item.id)}>删除</b></span>
            </div>
          </li>)}
        </ul>
      </div>
    );
  }
  edit = (id) => {
    if (this.filterAct(this.state.activityList).find(item => { return item.id === id }).checked) {
      this.props.history.push('/activities/edit')
    } else {
      message.warning('请勾选当前编辑项')

    }
  }
  del = (id) => {
    if (this.filterAct(this.state.activityList).find(item => { return item.id === id }).checked) {
      const { confirm } = Modal;
      const that = this
      confirm({
        title: '你确认删除此活动吗',
        icon: <ExclamationCircleOutlined />,
        content: '不可恢复',
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        onOk() {
          const newAct = [...that.state.activityList]
          const newActivitList = newAct.find((item) => { return that.props.location.pathname.indexOf(item.customerId) > -1 }).activityGulp.filter((item) => {
            return item.id !== id
          })
          newAct.find(item => { return that.props.location.pathname.indexOf(item.customerId) > -1 }).activityGulp = newActivitList
          console.log(newAct)
          that.setState({
            activityList: newAct
          })
        },

      });
    } else {
      message.warning('请勾选当前删除项')
    }
  }
  handler = (event, id) => {

    const newAct = this.filterAct(this.state.activityList).find(item => { return item.id === id })
    newAct.checked = !newAct.checked
    const checkedObj = this.state.activityList.find((item) => { return this.props.location.pathname.indexOf(item.customerId) > -1 }).activityGulp.filter(item => { return item.checked === false })
    this.setState({

      checkedAll: checkedObj.length ? false : true
    })
  }
  handlerAll = (event) => {
    this.filterAct(this.state.activityList).map(item => {
      return item.checked = !this.state.checkedAll
    })
    this.setState({
      checkedAll: event.target.checked

    })
  }
  filterAct = (name) => {
    return name.find((item) => { return this.props.location.pathname.indexOf(item.customerId) > -1 }).activityGulp
  }
}
export default ActivityList;