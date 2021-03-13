import React, { Component } from 'react'
import { allFeedback, addFeedback, deleteFeedback, updateFeedback } from "../../../Apicall/api";
import { Row, Navbar, Nav, Button, Col, Container } from 'react-bootstrap';
import { Card, Input, Form, notification, Table, Space, Modal } from 'antd';

const { Meta } = Card;
const { TextArea } = Input;
const { Column } = Table;

export default class FeedbackPage extends Component {
    state = {
        show: true,
        add: false,
        update: false,
        visible: false,
        visibleModel: false,
        allFeedback: [],
        oneFeedback: {}
    }
    componentDidMount() {
        this.allFeedback()
    }

    allFeedback = () => {
        allFeedback()
            .then(res => {
                this.setState({ allFeedback: res.data })
            })
            .catch(err => console.log(err))
    }
    hide = () => {
        this.setState({
            visible: false,
        });
    };

    handleVisibleChange = visible => {
        this.setState({ visible });
    };
    show = () => { this.setState({ show: true, add: false, update: false }) }
    add = () => { this.setState({ show: false, add: true, update: false }) }
    update = () => { this.setState({ show: false, add: false, update: true }) }
    onFinish = values => {
        allFeedback(values)
            .then(res => {
                this.setState({ show: true, add: false, update: false })
                this.allFeedback()
                return notification.success({
                    message: `${res.data}`,
                })

            })
            .catch(err => console.log(err))
    };
    deleteTeacher = (id) => {
        deleteFeedback(id)
            .then(res => {
                notification.success({
                    message: `${res.data}`,
                })
                this.setState({ show: true, add: false, update: false })
                this.allFeedback()
            })
            .catch(err => console.log(err))
    }
    onUpdate = (values) => {
        const kyes = Object.keys(values).filter((val) => values[val] !== undefined)
        const updated = { ...this.state.oneFeedback }
        kyes.map(val => updated[val] = values[val])
        updateFeedback(updated._id, updated)
            .then(res => {
                this.setState({ show: true, add: false, update: false, visibleModel: false })
                this.allFeedback()
                return notification.success({
                    message: `${res.data}`,
                })

            })
            .catch(err => console.log(err))
    }

    //Modal
    showModal = (id) => {
        const obj = this.state.allFeedback.filter(val => val._id === id._id)
        this.setState({
            visibleModel: true,
            oneFeedback: obj[0]
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visibleModel: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visibleModel: false,
        });
    };
    render() {
        return (
            <div>
                <Row className="justify-content-sm-center"><h3>Feedback Page</h3></Row>
                <br />
                <Navbar bg="light" variant="light">
                    <Nav >
                        <Button variant="dark" onClick={this.show}>All Feedback</Button>
                        <Button variant="dark" onClick={this.add}>Add New</Button>
                        <Button variant="dark" onClick={this.update}>Delete or Update</Button>
                    </Nav>
                </Navbar>
                <br />
                <Container>
                    {
                        this.state.show &&
                        <Row className="justify-content-sm-center" xs={1} md={3}>
                            {this.state.allFeedback.map(one => {
                                return <Col><Card
                                    hoverable
                                    style={{ width: 340, textAlign: "center", height: "auto" }}
                                // cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                >
                                    <Meta title={`${one.writer}, ${one.nationality}`} description={one.text} />
                                </Card><br /></Col>
                            })}
                        </Row>
                    }
                    {
                        this.state.add &&
                        <div>
                            <Form
                                onFinish={this.onFinish}
                                layout="vertical"
                                initialValues="requiredMark"
                            >
                                <Form.Item
                                    name="writer"
                                    rules={[{ required: true, message: 'Please input a writer!' }]}
                                    label="Writer"
                                    required
                                >
                                    <Input placeholder="Writer" />
                                </Form.Item>
                                <Form.Item
                                    name="nationality"
                                    rules={[{ required: true, message: 'Please input a nationality!' }]}
                                    label="Nationality"
                                    required
                                >
                                    <Input placeholder="Nationality" />
                                </Form.Item>
                                <Form.Item
                                    name="text"
                                    rules={[{ required: true, message: 'Please input a testimonial' }]}
                                    label="Testimonials"
                                    required
                                >
                                    <TextArea placeholder="Testimonials" rows={4} />
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" variant="dark">Submit</Button>
                                </Form.Item>
                            </Form>
                        </div>
                    }
                    {
                        this.state.update &&
                        <Row className="justify-content-sm-center" xs={1} md={1}>
                            <Table dataSource={this.state.allFeedback}>
                                <Column title="Writer" dataIndex="writer" key="writer" />
                                <Column title="Nationality" dataIndex="nationality" key="nationality" />
                                <Column title="Testimonials" dataIndex="text" key="text" />
                                <Column
                                    title="Action"
                                    key="_id"
                                    render={(id) => (
                                        <Space size="middle">
                                            <Button variant="light" onClick={() => this.showModal(id)}>Update</Button>
                                            <Button variant="dark" onClick={() => this.deleteTeacher(id._id)}>Delete</Button>
                                        </Space>
                                    )}
                                />
                            </Table>
                        </Row>
                    }
                    {
                        this.state.visibleModel &&
                        <Modal
                            title="Update Testimonial"
                            visible={this.state.visibleModel}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                            footer={null}
                        >
                            <Form
                                onFinish={this.onUpdate}
                                layout="vertical"
                            >
                                <Form.Item
                                    name="writer"
                                    label="Writer"
                                >
                                    <Input placeholder={this.state.oneFeedback.writer} />
                                </Form.Item>
                                <Form.Item
                                    name="nationality"
                                    label="Nationality"
                                >
                                    <Input placeholder={this.state.oneFeedback.nationality} />
                                </Form.Item>
                                <Form.Item
                                    name="text"
                                    label="Testimonials"
                                >
                                    <TextArea placeholder={this.state.oneFeedback.text} rows={10} />
                                </Form.Item>
                                <Form.Item>
                                    <Row className="justify-content-sm-center"><Button type="primary" htmlType="submit" variant="dark">Submit</Button></Row>
                                </Form.Item>
                            </Form>
                        </Modal>
                    }
                </Container>
            </div >
        )
    }
}
