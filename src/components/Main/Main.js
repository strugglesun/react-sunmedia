import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import HelpCenter from '../HelpCenter/HelpCenter'
import Home from '../Home/Home'
import CustomerList from '../CustomerList/CustomerList'
import ActivityList from '../ActivityList/ActivityList'
import CustomerAdd from '../CustomerAdd/CustomerAdd'
import CustomerEdit from '../CustomerEidt/CustomerEdit'
import ActivityAdd from '../ActivityAdd/ActivityAdd'
import ActivityEdit from '../ActivityEdit/ActivityEdit'
import Report from '../Report/Report'
import Login from '../Login/Login'
import ActivityView from '../ActivityView/ActivityView';
import NotFOund from '../NotFound/NotFound';
class Main extends Component {
  render() {
    return (<div>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/helpCenter' component={HelpCenter}></Route>
        <Route exact path='/customerList' component={CustomerList}></Route>
        <Route path='/customer/:id/activities' component={ActivityList}></Route>
        <Route path='/activity/report' component={Report}></Route>
        <Route path='/customerList/add' component={CustomerAdd}></Route>
        <Route path='/customerList/edit' component={CustomerEdit}></Route>
        <Route path='/activities/add' component={ActivityAdd}></Route>
        <Route path='/activities/edit' component={ActivityEdit}></Route>
        <Route path='/activities/activityview' component={ActivityView}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='*' component={NotFOund}></Route>
      </Switch>
    </div>);
  }
}

export default Main;