import React, { Component } from 'react';
import ActivityHandler from '../ActivityHandler/ActivityHandler'
class ActivityAdd extends Component {
  state = {}
  render() {
    return (
      <div className='activity-add'>
        <ActivityHandler></ActivityHandler>
      </div>
    );
  }
}

export default ActivityAdd;