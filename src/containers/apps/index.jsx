import React, {Component} from 'react'
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
                            <div className="item" onClick={(item) => this.toPage(item.path)}>
                                <img className="icon" object-fit="contain" alt="" src={item.icon} />
                                <div className="name">{item.name}</div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    toPage = () => {

    }
}