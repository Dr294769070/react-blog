import {NavLink, Route, Switch, Redirect} from 'react-router-dom'
import {Provider} from 'react-redux'

import './App.css';

import Homepage from './containers/homepage/index'
import Books from './containers/books/index'
import Setting from './containers/setting/index'
import Apps from './containers/apps/index'

import MyMap from './containers/myApps/myMap'

import store from './redux/store'

function App() {
  return (
    <div className="App">
      <div className="App-left">
          <NavLink to="/homepage" activeClassName="activeNav" className="app-nav-item">主页</NavLink>
          <NavLink to="/books" activeClassName="activeNav" className="app-nav-item">书籍</NavLink>
          <NavLink to="/apps" activeClassName="activeNav" className="app-nav-item">应用</NavLink>
          <NavLink to="/setting" activeClassName="activeNav" className="app-nav-item">设置</NavLink>
      </div>
      <div className="App-right">
          <Switch>
              <Route path="/homepage" render={(props) => <Provider {...props} store={store}><Homepage></Homepage></Provider>}></Route>
              <Route path="/books" component={Books}></Route>
              <Route path="/setting" render={(props) => <Provider {...props} store={store}><Setting></Setting></Provider>}></Route>
              <Route path="/apps" component={Apps}></Route>
              <Route path="/myMap" component={MyMap}></Route>
              <Redirect to="/apps"></Redirect>
          </Switch>
      </div>
    </div>
  );
}

export default App;
