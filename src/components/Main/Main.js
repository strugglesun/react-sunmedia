import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import HelpCenter from '../HelpCenter/HelpCenter'
import Home from '../Home/Home'
import CustomerList from '../CustomerList/CustomerList'
import ActivityList from '../ActivityList/ActivityList'
import CustomerAdd from '../CustomerAdd/CustomerAdd'
import Report from '../Report/Report'
import Login from '../Login/Login'
class Main extends Component {
  render() {
    return (<div>
      <Route exact path='/' component={Home}></Route>
      <Route path='/HelpCenter' component={HelpCenter}></Route>
      <Route exact path='/CustomerList' component={CustomerList}></Route>
      <Route path='/Customer' component={ActivityList}></Route>
      <Route path='/Activity/report' component={Report}></Route>
      <Route path='/CustomerList/add' component={CustomerAdd}></Route>
      <Route path='/Login' component={Login}></Route>
    </div>);
  }
}

export default Main;