import * as types from '../actions/actionTypes';

const initialState = {
  count: 0
};
//ES6默认语法值
export default function counter(state = initialState, action = {}) {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case types.DECREMENT:
      return Object.assign({}, state, {
        count: state.count - 1
      });
    default:
      return state;  //处理未知action
  }
}
