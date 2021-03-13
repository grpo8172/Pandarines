import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FacebookOutlined, WhatsAppOutlined, MessageOutlined } from '@ant-design/icons'
export default class Footer extends Component {
    render() {
        return (
            <div style={{ textAlign: "center", backgroundColor: "#383838", color: "#FFF", padding: 20 }}>
                <Container className="justify-content-sm-center" >
                    <Row>
                        <Col>
                            <Link to="/contact" style={{ color: "#FFF", fontSize: 20 }}>Contact Info</Link>
                            <br />
                            <Link to="/about" style={{ color: "#FFF", fontSize: 20 }}>About As</Link>
                        </Col>
                        <Col className="justify-content-sm-center">
                            <Row style={{ color: "#FFF", fontSize: 20 ,textAlign: "center"}}>Social Media</Row>
                            <Row style={{ padding: 5 }}>
                                <Link ><FacebookOutlined style={{ color: "#FFF", padding: 5, fontSize: 30 }} /></Link>
                                <Link ><WhatsAppOutlined style={{ color: "#FFF", padding: 5, fontSize: 30 }} /></Link>
                                <Link ><MessageOutlined style={{ color: "#FFF", padding: 5, fontSize: 30 }} /></Link>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
