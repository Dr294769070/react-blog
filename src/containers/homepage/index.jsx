import React, {Component} from 'react'
import './index.css'

export default class Home extends Component {
    render() {
        return (
            <div className="homepage">
                <div className="conetnt">
                    <img className="avatar" object-fit="contain" alt="" src="https://frank-1302698468.cos.ap-beijing.myqcloud.com/reactBlog/images/1jhykJUftOc.jpg"/>
                    <div className="name">Frank</div>
                </div>
            </div>
        )
    }
}
