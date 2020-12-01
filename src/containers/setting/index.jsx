import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Form, Input, Button } from 'element-react';
import {connect} from 'react-redux'
import axios from 'axios'
import './index.css'
import { setUserMap } from '../../redux/actions'

class Home extends Component {
    static propTypes = {
        setUserMap: PropTypes.func.isRequired,
        form: PropTypes.object.isRequired
    }
    state = {
        form: {
            name: '',
            avatar: '',
            classicQuotations: ''
        }
    }
    render() {
        const { name, avatar, classicQuotations } = this.state.form
        return (
            <div className="setting">
                <Form model={this.state.form} labelWidth="80">
                    <Form.Item label="姓名">
                        <Input value={name} onChange={this.onChange.bind(this, 'name')}></Input>
                    </Form.Item>
                    <Form.Item label="头像">
                        <Input value={avatar} onChange={this.onChange.bind(this, 'avatar')}></Input>
                    </Form.Item>
                    <Form.Item>
                        <img src={avatar} className="avatar-img" alt="avatar" />
                    </Form.Item>
                    <Form.Item label="经典语录">
                        <Input value={classicQuotations} onChange={this.onChange.bind(this, 'classicQuotations')}></Input>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" onClick={this.onSubmit}>保存</Button>
                        <Button onClick={this.resetData}>取消</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
    componentDidMount() {
        axios.get('/getUserInfo?id=2')
        .then((response) => {
            const data = response.data
            this.setState(
                {
                    form: data
                }
            )
        })
        .catch(function (error) {
            console.log('err', error);
        });
        this.setState({
            form: this.props.form
        })
    }
    onSubmit = () => {
        // 改变state.form 重设store中的数据
        axios.get('/updateUserInfo', {
            params: {
              id: 2,
              name: this.state.form.name,
              avatar: this.state.form.avatar,
              classicQuotations: this.state.form.classicQuotations || ''
            }
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    onChange = (type, val) => {
        // 修改表单组件数据
        const map = JSON.parse(JSON.stringify(this.state.form))
        map[type] = val
        this.setState({
            form: JSON.parse(JSON.stringify(map))
        })
    }
    resetData = () => {
        this.setState({
            form: {}
        })
    }
}
export default connect(
    state => ({form: state}),
    {setUserMap}
)(Home)