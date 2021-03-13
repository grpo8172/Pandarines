import React, { Component } from "react";
import { Row, Col, Container, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import moment from "moment";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBIcon,
  MDBView,
  MDBBtn,
  MDBCardTitle,
  MDBCardText,
} from "mdbreact";

import { RecentPostList } from "./recentPostList";
import { Carousel, Divider } from "antd";
import { Background } from "react-parallax";

class FullPost extends Component {
  state = {};

  render() {
    const { post } = this.props.location.state;

    return (
      <div>
        <Row className="my-2 ml-1 mr-1 ">
          <Col xs={12} md={8} lg={9}>
            <Card className=" d-none d-md-block ">
              <Carousel className="crusal-size">
                {post.url.map((url) => (
                  <img
                    className="d-block w-100 crusal-image"
                    src="https://via.placeholder.com/860x320"
                    alt="First slide"
                  />
                ))}
              </Carousel>

              <Card.Body className=" px-5 pb-5 ml-5">
                <h4
                  style={{
                    fontSize: "2vw",
                    textAlign: "center",
                  }}
                >
                  {post.title}
                </h4>

                <p style={{ fontSize: "1.5vw", textAlign: "center" }}>
                  {moment(post.createdAt).format("MMMM Do YYYY")}
                </p>
                <Card.Text style={{ fontSize: "1.5vw", textAlign: "center" }}>
                  {post.description}
                </Card.Text>
                <hr className="mb-5 mt-4" />
                <h5 style={{ color: "#FF5722" }}>
                  <MDBIcon icon="angle-double-left" className="ml-2 mr-2" />
                  <Link to="/blog"> Back to blog page</Link>
                </h5>
              </Card.Body>
            </Card>

            <MDBCard
              cascade
              className={" full-post-small d-xs-block d-md-none "}
              style={{ marginLeft: 100 }}
            >
              <MDBView hover>
                <Carousel>
                  {post.url.map((url) => (
                    <img
                      className="d-block w-100 crusal-size"
                      src="https://via.placeholder.com/860x320"
                      alt="First slide"
                      style={{ width: "460px", height: "460px" }}
                    />
                  ))}
                </Carousel>
              </MDBView>

              <MDBCardBody cascade className="text-center">
                <div className="deep-orange-text">
                  <h6 className="font-weight-bold mb-3 deep-orange-text">
                    <MDBIcon icon="graduation-cap" className="pr-2  " />
                    {}
                  </h6>
                </div>
                <MDBCardTitle>{post.title}</MDBCardTitle>
                <hr />
                <MDBCardText>{post.description}</MDBCardText>

                <h5 style={{ color: "#FF5722" }}>
                  <MDBIcon icon="angle-double-left" className="ml-2 mr-2" />
                  <Link to="/blog"> Back to blog page</Link>
                </h5>
              </MDBCardBody>
              <div className="rounded-bottom mdb-color lighten-3 text-center pt-3">
                <ul className="list-unstyled list-inline font-small">
                  <li className="list-inline-item pr-2 white-text">
                    <MDBIcon far icon="clock" />{" "}
                    {moment(post.createdAt).format("MMMM Do YYYY")}
                  </li>
                </ul>
              </div>
            </MDBCard>
          </Col>
          <Col md={4} lg={3}>
            <RecentPostList />
          </Col>
        </Row>
      </div>
    );
  }
}

export default FullPost;
