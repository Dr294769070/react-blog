import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import axios from 'axios'

import './index.css'

class Home extends Component {
    static propTypes = {
        form: PropTypes.object.isRequired
    }
    state = {
        name: '',
        avatar: ''
    }
    render() {
        const { name, avatar } = this.state
        return (
            <div className="homepage">
                <div className="conetnt">
                    <img className="avatar" object-fit="contain" alt="" src={avatar} />
                    <div className="name">{name}</div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        // 配置了代理 实际请求发送给了http://127.0.0.1:8888
        axios.get('/getUserInfo?id=2')
            .then((response) => {
                const data = response.data
                const {avatar, name} = data
                this.setState({
                    name,
                    avatar
                })
            })
            .catch(function (error) {
                console.log('err', error);
            });
    }
}
export default connect(
    state => ({form: state})
)(Home)