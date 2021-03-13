import React, { Component } from 'react'
import { allcontactinfo, updatecontactinfo } from "../../../Apicall/api";
import { Row, Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Input, Form, notification } from 'antd';

export default class ContactInfo extends Component {
    state = {
        visible: true,
        allcontactinfo: {}
    }
    componentDidMount() {
        this.addcontactinfo()
    }

    addcontactinfo = () => {
        allcontactinfo()
            .then(res => {
                this.setState({ allcontactinfo: res.data[0] })
            })
            .catch(err => console.log(err))
    }
    onFinish = (values) => {
        const kyes = Object.keys(values).filter((val) => values[val] !== undefined)
        const updated = { ...this.state.allcontactinfo }
        kyes.map(val => updated[val] = values[val] )
        updatecontactinfo(updated._id, updated)
            .then(res => {
                this.setState({ visible: true })
                this.addcontactinfo()
                return notification.success({
                    message: `${res.data}`,
                })

            })
            .catch(err => console.log(err))
    };
    update = () => {
        notification.info({
            message: `Enter the updated data`,
        })
        this.setState({ visible: false })
    }
    Cancel = () => {
        notification.warning({
            message: `Updated Canceled!`,
        })
        this.setState({ visible: true })
    }
    render() {
        const { allcontactinfo, visible } = this.state;
        return (
            <div>
                <Row className="justify-content-sm-center"><h3>Contact Info Page</h3></Row>
                <br />
                <Navbar bg="light" variant="light">
                    <Nav >
                        <Button variant="dark" onClick={this.update}>Delete or Update</Button>
                        <Button variant="light" onClick={this.Cancel}>Cancel</Button>
                    </Nav>
                </Navbar>
                <br />
                <Container>
                    <div>
                        <Form
                            onFinish={this.onFinish}
                            layout="vertical"
                            initialValues="requiredMark"
                        >
                            <Form.Item
                                name="wechat"
                                label="WeChat"
                                required
                            >
                                <Input disabled={visible} placeholder={allcontactinfo.wechat} />
                            </Form.Item>
                            <Form.Item
                                name="email"
                                label="Email"
                                required
                            >
                                <Input disabled={visible} placeholder={allcontactinfo.email} />
                            </Form.Item>
                            <Form.Item
                                name="tel"
                                label="Tel"
                                required
                            >
                                <Input disabled={visible} placeholder={allcontactinfo.tel} />
                            </Form.Item>
                            <Form.Item
                                name="whatsapp"
                                label="WhatsApp"
                                required
                            >
                                <Input disabled={visible} placeholder={allcontactinfo.whatsapp} />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" variant="dark">Submit</Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Container>
            </div>
        )
    }
}
