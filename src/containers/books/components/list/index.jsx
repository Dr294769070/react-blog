import React, {Component} from 'react'

import mock from '../../mock/mock.js'

export default class Book extends Component {
    render() {
        const bookslist = mock.list
        return (
            <div className="books-list">
                {
                    bookslist.map(item => {
                        return (
                            <div className="item" onClick={() => this.handleClickBook(item.id)}>
                                <img src={item.src} className="book-img" alt={item.name}></img>
                                <div className="name">{ item.name }</div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    handleClickBook = (id) => {
        const path = {
            pathname:'/books/detail',
            query: {
                bookid: id
            }
        }
        this.props.history.push(path)
    }
}
