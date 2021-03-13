import React, { Component } from "react";
import { Card, Avatar, Typography, Divider } from "antd";

import {
  MDBCard,
  MDBCardTitle,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdbreact";

import { Image, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import moment from "moment";
const { Meta } = Card;
const { Title } = Typography;
class RecentPost extends Component {
  state = {};
  // Scroll up when click on recent post it
  handlScroll = () => {
    window.scrollTo(0, 0);
  };
  render() {
    const recentPost = this.props.recentPost;
    const background = { backgroundSize: "cover" };

    return (
      <div>
        <Row className="d-none d-md-block ">
          <Col md={12}>
            <Link
              className="black-text "
              to={{
                pathname: "/fullPost",
                state: {
                  post: this.props.recentPost,
                },
              }}
            >
              <Card
                style={{
                  marginTop: 10,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundImage: `url(${recentPost.url[0]})`,
                  justifyContent: "center",
                  borderRadius: "10px",
                }}
              >
                <div className="text-white text-center  align-items-center   recent-post-card-body ant-card-body">
                  <div style={{ fontSize: "1vw" }} className="text-white pt-2">
                    {recentPost.title}
                  </div>

                  <h5 className="pink-text" style={{ fontSize: "1vw" }}>
                    <MDBIcon icon="graduation-cap" className="pr-2  " />
                    {recentPost.catagory.name}
                  </h5>
                  <div style={{ fontSize: "1vw" }}>
                    {moment(recentPost.createdAt).format("MMMM Do YYYY")}
                  </div>
                </div>
              </Card>
            </Link>
          </Col>
        </Row>

        <Row className=" d-xs-block d-md-none" xs={12}>
          <Col xs={12}>
            <MDBCard
              className="card-image my-2 "
              style={{
                backgroundImage: `url(${recentPost.url[0]})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                justifyContent: "center",
              }}
            >
              <div className="text-white text-center  rgba-black-strong py-5 px-4">
                <div>
                  <MDBCardTitle
                    tag="h5"
                    className="pt-2"
                    className="text-white"
                  >
                    <strong> {recentPost.title}</strong>
                  </MDBCardTitle>
                  <h5 className="orange-text">
                    <MDBIcon icon="graduation-cap" /> Chiness Course
                  </h5>
                  <h6 className="white-text">
                    {moment(recentPost.createdAt).format("MMMM Do YYYY")}
                  </h6>
                  <Link
                    className="black-text "
                    to={{
                      pathname: "/fullPost",
                      state: {
                        post: this.props.recentPost,
                      },
                    }}
                  >
                    <MDBBtn color="deep-orange" onClick={this.handlScroll}>
                      <MDBIcon icon="clone left" /> Read More
                    </MDBBtn>
                  </Link>
                </div>
              </div>
            </MDBCard>
          </Col>
        </Row>
      </div>
    );
  }
}

export { RecentPost };
