import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import './index.css'

class Home extends Component {
    static propTypes = {
        form: PropTypes.object.isRequired
    }
    render() {
        const { name, avatar } = this.props.form
        return (
            <div className="homepage">
                <div className="conetnt">
                    <img className="avatar" object-fit="contain" alt="" src={avatar} />
                    <div className="name">{name}</div>
                </div>
            </div>
        )
    }
}
export default connect(
    state => ({form: state})
)(Home)