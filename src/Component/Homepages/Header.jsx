import React, { Component } from 'react'
import "./Home.css";
import Topbar from '../Navbar/Topbar';
import { Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import { Fade } from 'react-reveal';
import { Row } from 'react-bootstrap';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <Row className="justify-content-md-center">
                    <div style={{ marginTop: "25rem", textAlign: "center" }}>

                        <Fade >
                            <h3 style={{
                                backgroundColor: "#efb372", padding: 20
                                , borderRadius: 20, boxShadow: "2px 3px #888888",
                            }}>Learning Without Boundaries </h3>
                            <br />
                        </Fade>
                    </div>
                </Row>
            </div>
        )
    }
}
