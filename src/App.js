import {NavLink, Route, Switch, Redirect} from 'react-router-dom'

import './App.css';

import Homepage from './containers/homepage/index'
import Books from './containers/books/index'
import Setting from './containers/setting/index'

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
              <Route path="/homepage" component={Homepage}></Route>
              <Route path="/books" component={Books}></Route>
              <Route path="/setting" component={Setting}></Route>
              <Redirect to="/homepage"></Redirect>
          </Switch>
      </div>
    </div>
  );
}

export default App;
