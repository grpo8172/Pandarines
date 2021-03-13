
import React, { Component } from 'react'
import { allTeachers, addTeachers, deleteTeachers, updateTeachers } from "../../../Apicall/api";
import { Row, Navbar, Nav, Button, Col, Container } from 'react-bootstrap';
import { Card, Input, Form, notification, Table, Space, Modal } from 'antd';

const { Meta } = Card;
const { TextArea } = Input;
const { Column } = Table;

class TeacherPage extends Component {
    state = {
        show: true,
        add: false,
        update: false,
        visible: false,
        allteachers: [],
        visibleModel: false,
        oneTeacher: {}
    }
    componentDidMount() {
        this.addTeachers()
    }

    addTeachers = () => {
        allTeachers()
            .then(res => {
                this.setState({ allteachers: res.data })
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
        addTeachers(values)
            .then(res => {
                this.setState({ show: true, add: false, update: false })
                this.addTeachers()
                return notification.success({
                    message: `${res.data}`,
                })

            })
            .catch(err => console.log(err))
        console.log('Success:', values);
    };
    deleteTeacher = (id) => {
        deleteTeachers(id)
            .then(res => {
                notification.success({
                    message: `${res.data}`,
                })
                this.setState({ show: true, add: false, update: false })
                this.addTeachers()
            })
            .catch(err => console.log(err))
    }

    onUpdate = (values) => {
        const kyes = Object.keys(values).filter((val) => values[val] !== undefined)
        const updated = { ...this.state.oneFeedback }
        kyes.map(val => updated[val] = values[val])
        updateTeachers(updated._id, updated)
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
            oneTeacher: obj[0]
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
                <Row className="justify-content-sm-center"><h3>Teachers Page</h3></Row>
                <br />
                <Navbar bg="light" variant="light">
                    <Nav >
                        <Button variant="dark" onClick={this.show}>All Teachers</Button>
                        <Button variant="dark" onClick={this.add}>Add New</Button>
                        <Button variant="dark" onClick={this.update}>Delete or Update</Button>
                    </Nav>
                </Navbar>
                <br />
                <Container>
                    {
                        this.state.show &&
                        <Row className="justify-content-sm-center" xs={1} md={3}>
                            {this.state.allteachers.map(one => {
                                return <Col><Card
                                    hoverable
                                    style={{ width: 340, textAlign: "center", height: 250 }}
                                // cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                >
                                    <Meta title={one.name} description={one.description} />
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
                                    name="name"
                                    rules={[{ required: true, message: 'Please input a teacher name!' }]}
                                    label="Teacher Name"
                                    required
                                >
                                    <Input placeholder="Name" />
                                </Form.Item>
                                <Form.Item
                                    name="description"
                                    rules={[{ required: true, message: 'Please input a description' }]}
                                    label="Description"
                                    required
                                >
                                    <TextArea placeholder="Description" rows={4} />
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
                            <Table dataSource={this.state.allteachers}>
                                <Column title="Name" dataIndex="name" key="name" />
                                <Column title="Description" dataIndex="description" key="description" />
                                <Column
                                    title="Action"
                                    key="_id"
                                    render={(id) => (
                                        <Space size="middle">
                                            <Button variant="light" disabled onClick={this.updateTeacher}>Update</Button>
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
                            title="Update Teacher"
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
                                    name="name"
                                    label="name"
                                >
                                    <Input placeholder={this.state.oneTeacher.name} />
                                </Form.Item>
                                <Form.Item
                                    name="description"
                                    label="Description"
                                >
                                    <TextArea placeholder={this.state.oneTeacher.description} rows={10} />
                                </Form.Item>
                                <Form.Item>
                                    <Row className="justify-content-sm-center"><Button type="primary" htmlType="submit" variant="dark">Submit</Button></Row>
                                </Form.Item>
                            </Form>
                        </Modal>
                    }
                </Container>
            </div>
        )
    }
}

export default TeacherPage;
