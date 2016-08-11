'use strict';

import React, { Component } from 'react-native';
import {bindActionCreators} from 'redux';
import Counter from '../components/counter';
import * as counterActions from '../actions/counterActions';
import { connect } from 'react-redux';

// @connect(state => ({
//   state: state.counter
// }))
class CounterApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions } = this.props;
    return (
      <Counter
        counter={state.count}
        {...actions} />
    );
  }
}
//export default 
CounterApp = connect(state => ({
    state: state.counter
    
  }),
  (dispatch) => ({
    actions: bindActionCreators(counterActions, dispatch) //把action创建函数绑定到dispatch()方法上
  })
)(CounterApp);  //柯里化函数：首选connect是个可以执行两次的柯里化函数，第一次传入的参数相当于一系列的定制化东西，
                 //第二次传入的是你要连接的React组件，然后返回一个新的React组件。
module.exports=CounterApp;