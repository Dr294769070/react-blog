import {createStore} from 'redux'
import {setUserMap} from './reducers'
const store = createStore(setUserMap) // 内部调用reducer，初始化state

export default store