import React, {Component} from 'react'
import mockData from '../../mock/mock.js'

export default class Book extends Component {
    render() {
        debugger
        const bookid = this.props.location.query.bookid
        const detailInfo = mockData.bookMap[bookid]
        return (
            <div className="books-detail">
                <div className="title">{detailInfo.title}</div>
                <div className="author">{detailInfo.author}</div>
                <article>{detailInfo.article}</article>
            </div>
        )
    }
}