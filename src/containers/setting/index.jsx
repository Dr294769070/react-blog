import React, {Component} from 'react'
import { Form, Input, Button } from 'element-react';
import './index.css'

export default class Home extends Component {
    state = {
        form: {
            name: '',
            avatar: '',
            classicQuotations: '' //  经典语录
        }
    }
    render() {
        const { name, avatar, classicQuotations } = this.state.form
        return (
            <div className="setting">
                <Form model={this.state.form} labelWidth="80" onSubmit={this.onSubmit}>
                    <Form.Item label="姓名">
                        <Input value={name} onChange={this.onChange.bind(this, 'name')}></Input>
                    </Form.Item>
                    <Form.Item label="头像">
                        <Input value={avatar} onChange={this.onChange.bind(this, 'avatar')}></Input>
                    </Form.Item>
                    <Form.Item label="经典语录">
                        <Input value={classicQuotations} onChange={this.onChange.bind(this, 'classicQuotations')}></Input>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" nativeType="submit">保存</Button>
                        <Button>取消</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
    componentDidMount() {
        // 在mounted状态时 从store中获取数据，显示在表单里
    }
    onSubmit = () => {
        // 改变state.form 重设store中的数据
    }
    onChange(type, val) {
        // 修改表单组件数据
        const map = JSON.parse(JSON.stringify(this.state.form))
        map[type] = val
        this.setState({
            form: map
        })
    }
}