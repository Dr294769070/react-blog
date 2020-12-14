import React, {Component} from 'react'
import {NavLink } from 'react-router-dom'
import apps from './apps.json'

import './index.css'

export default class Apps extends Component {
    render() {
        const { appList } = apps
        return (
            <div className="apps">
                {
                    appList.map(item => {
                        return (
                            <NavLink to="/myMap" className="item">
                                <img className="icon" object-fit="contain" alt="" src={item.icon} />
                                <div className="name">{item.name}</div>
                            </NavLink>
                        )
                    })
                }
            </div>
        )
    }
    toPage = () => {

    }
}