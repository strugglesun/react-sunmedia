import React, { Component } from 'react';
import './activityList.scss'
import { Link } from 'react-router-dom'
import { Button } from 'antd'
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
            endTime: '2019 - 5 - 30'
          },
          {
            id: 12,
            activityName: 'ZH2019',
            activityDes: '2020开年酬宾活动',
            activityNum: 5,
            startTime: '2019 - 8 - 12',
            endTime: '2019 - 9 - 30'
          },
          {
            id: 13,
            activityName: 'GH2019',
            activityDes: '2020企鹅年活动',
            activityNum: 2,
            startTime: '2020 - 8 - 20',
            endTime: '2020 - 9 - 30'
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
            endTime: '2019 - 5 - 30'
          },
          {
            id: 22,
            activityName: 'ZH2019',
            activityDes: '2020开年酬宾活动',
            activityNum: 5,
            startTime: '2019 - 8 - 12',
            endTime: '2019 - 9 - 30'
          },
          {
            id: 23,
            activityName: 'GH2019',
            activityDes: '2020企鹅年活动',
            activityNum: 2,
            startTime: '2020 - 8 - 20',
            endTime: '2020 - 9 - 30'
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
            endTime: '2019 - 5 - 30'
          },
          {
            id: 32,
            activityName: 'ZH2019',
            activityDes: '2020开年酬宾活动',
            activityNum: 5,
            startTime: '2019 - 8 - 12',
            endTime: '2019 - 9 - 30'
          },
          {
            id: 33,
            activityName: 'GH2019',
            activityDes: '2020企鹅年活动',
            activityNum: 2,
            startTime: '2020 - 8 - 20',
            endTime: '2020 - 9 - 30'
          }
        ]
      }
    ],
    checkedAll: false
  }
  render() {
    const { checkedAll } = this.state

    console.log(this.props)
    return (
      <div className="activityList">
        <Link to='/CustomerList/avtivity/add'><Button type='primary' >添加新活动</Button></Link>
        <h3>
          <input type="checkbox" />
          <div className="title">
            <span>客户活动集</span><span>描述</span><span>活动数</span><span>开始时间</span><span>结束时间</span>
            <span>操作</span>
          </div>
        </h3>
        <ul>
          {this.state.activityList.find((item) => { return this.props.location.pathname.indexOf(item.customerId) > -1 }).activityGulp.map((item) => <li key={item.id}>
            <input type="checkbox" />
            <div className="content">
              <span>{item.activityName}</span><span>{item.activityDes}</span><span className='activity'>{item.activityNum}</span>
              <span>{item.startTime}</span><span>{item.endTime}</span><span className='active'><b>编辑</b>
                <b onClick={() => this.del(item.id)}>删除</b></span>
            </div>
          </li>)}
        </ul>
      </div>
    );
  }

  del = (id) => {
    // console.log(this.props, this.state.activityList.find((item) => { return this.props.location.pathname.indexOf(item.customerId) > -1 }).activityGulp, id)

    // const newActivitList = this.state.activityList.find((item) => { return this.props.location.pathname.indexOf(item.customerId) > -1 }).activityGulp.filter((item) => {
    //   return item.id !== id
    // })
    // this.setState({
    //   activityList: newActivitList
    // })
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

export default ActivityList;