import {NavLink, Route, Switch, Redirect} from 'react-router-dom'
import {Provider} from 'react-redux'

import './App.css';

import Homepage from './containers/homepage/index'
import Books from './containers/books/index'
import Setting from './containers/setting/index'

import store from './redux/store'

function App() {
  return (
    <div className="App">
      <div className="App-left">
          <NavLink to="/homepage" className="app-nav-item">主页</NavLink>
          <NavLink to="/books" className="app-nav-item">书籍</NavLink>
          <NavLink to="/setting" className="app-nav-item">设置</NavLink>
      </div>
      <div className="App-right">
          <Switch>
              <Route path="/homepage" render={(props) => <Provider {...props} store={store}><Homepage></Homepage></Provider>}></Route>
              <Route path="/books" component={Books}></Route>
              <Route path="/setting" render={(props) => <Provider {...props} store={store}><Setting></Setting></Provider>}></Route>
              <Redirect to="/homepage"></Redirect>
          </Switch>
      </div>
    </div>
  );
}

export default App;
