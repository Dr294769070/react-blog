import React, {Component} from 'react'
import {NavLink, Route, Switch, Redirect} from 'react-router-dom'
import './index.css'

import BooksList from './components/list'
import BookDetail from './components/detail'

export default class Book extends Component {
    render() {
        return (
            <div className="books">
                <div className="header">
                    <NavLink to="/books/list" className="books-nav-item">列表</NavLink>
                    <NavLink to="/books/detail?bookid=1" className="books-nav-item">详情</NavLink>
                </div>
                <div className="content">
                    <Switch>
                        <Route path="/books/list" component={BooksList}></Route>
                        <Route path="/books/detail" component={BookDetail}></Route>
                        <Redirect to="/books/list"></Redirect>
                    </Switch>
                </div>
            </div>
        )
    }
}
