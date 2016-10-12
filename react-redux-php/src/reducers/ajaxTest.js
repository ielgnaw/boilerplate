/**
 * @file counter reducer
 * @author ielgnaw(wuji0223@gmail.com)
 */


import {POST, GET, RESULT} from '../actions/ajaxTest';

// reducer 其实是个方法，参数是 state 和 action，返回值是新的 state
export default function counter(state = null, action) {
    switch (action.type) {
        case RESULT:
            return action.ajaxRet;
        default:
            return state;
    }
}
