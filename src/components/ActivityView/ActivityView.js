import React, { Component } from 'react';
import './activityView.scss'
class ActivityView extends Component {
  state = {
    web: [
      {
        id: 111,
        activityname: '新机型XPS上市',
        activitydes: '2020财年活动集合',
        viewpointer: 74,
        activitystate: '运行',
        onlyvisitor: 234,
        visitor: 456,
        starttime: 2019 - 4 - 3,
        endtime: 2019 - 5 - 4
      },
      {
        id: 112,
        activityname: '第二网站',
        activitydes: '2020娱乐节活动',
        viewpointer: 53,
        activitystate: '暂停',
        onlyvisitor: 2636,
        visitor: 36,
        starttime: 2019 - 6 - 7,
        endtime: 2019 - 7 - 4
      },
      {
        id: 113,
        activityname: '第三网站',
        activitydes: '2019酬宾活动集合',
        viewpointer: 45,
        activitystate: '暂停',
        onlyvisitor: 2336,
        visitor: 32434,
        starttime: 2010 - 4 - 3,
        endtime: 2019 - 4 - 4
      }
    ],
    advertise: [
      {
        id: 211,
        activityname: 'PConline',
        activitydes: 'PC端活动',
        advernum: 56,
        activitystate: '暂停',
        imp: 2336,
        click: 32434,
        starttime: 2010 - 4 - 3,
        endtime: 2019 - 4 - 4
      },
      {
        id: 212,
        activityname: 'CCID',
        activitydes: 'IC节目',
        advernum: 45,
        activitystate: '暂停',
        imp: 2336,
        click: 32434,
        starttime: 2019 - 4 - 3,
        endtime: 2019 - 4 - 4
      },
      {
        id: 213,
        activityname: 'IT168',
        activitydes: '程序精英',
        advernum: 67,
        activitystate: '暂停',
        imp: 2336,
        click: 32434,
        starttime: 2010 - 4 - 3,
        endtime: 2019 - 4 - 4
      }
    ],
    magazine: {

      activityname: '第一期:简单生活',
      activitydes: '杂志生活',
      advernum: 67,
      activitystate: '暂停',
      imp: 2336,
      click: 32434,
      starttime: 2019 - 6 - 3,
      endtime: 2019 - 8 - 4
    }
  }
  render() {
    const { magazine } = this.state
    return (
      <div className="activity-view">
        <div className="web">
          <h3>网站</h3>
          <p><span>活动名称</span><span>活动描述</span><span>监测点</span><span>活动状态</span><span>唯一访客</span><span>访问量</span><span>开始时间</span><span>结束时间</span></p>
          <ul>
            {this.state.web.map(item => {
              return <li key={item.id}>
                <span>{item.activityname}</span><span>{item.activitydes}</span><span>{item.viewpointer}</span><span>{item.activitystate}</span><span>{item.onlyvisitor}</span><span>{item.visitor}</span>
                <span>{item.starttime}</span>
                <span>{item.endtime}</span>
              </li>
            })}
          </ul>
        </div>
        <div className="advertise">
          <h3>广告投放</h3>
          <p><span>活动名称</span><span>活动描述</span><span>广告位</span><span>活动状态</span><span>imp</span><span>click</span><span>开始时间</span><span>结束时间</span></p>
          <ul>
            {this.state.advertise.map(item => {
              return <li key={item.id}>
                <span>{item.activityname}</span><span>{item.activitydes}</span><span>{item.advernum}</span><span>{item.activitystate}</span><span>{item.imp}</span><span>{item.click}</span>
                <span>{item.starttime}</span>
                <span>{item.endtime}</span>
              </li>
            })}
          </ul>
        </div>
        <div className="magazine">
          <h3>电子杂志</h3>
          <p><span>活动名称</span><span>活动描述</span><span>广告位</span><span>活动状态</span><span>imp</span><span>click</span><span>开始时间</span><span>结束时间</span></p>
          <div className='magazine-content'><span>{magazine.activityname}</span><span>{magazine.activitydes}</span><span>{magazine.advernum}</span><span>{magazine.activitystate}</span><span>{magazine.imp}</span><span>{magazine.click}</span><span>{magazine.starttime}</span><span>{magazine.endtime}</span></div>
        </div>
      </div>
    );
  }
}

export default ActivityView;