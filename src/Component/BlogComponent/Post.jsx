import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardBody,
  MDBCardText,
  MDBIcon,
  MDBView,
} from "mdbreact";
// the blog css
import "./blog.css";
class Post extends Component {
  render() {
    return (
      <div>
        <MDBCard cascade>
          <MDBView>
            <div
              className="imgcard"
              style={{
                backgroundImage: `url(${this.props.post.url})`,
              }}
            />
          </MDBView>

          <MDBCardBody cascade className="text-center">
            <div className="deep-orange-text">
              <h6 className="font-weight-bold mb-3 deep-orange-text">
                <MDBIcon icon="graduation-cap" className="pr-2  " />
                {this.props.catagoryName}
              </h6>
            </div>
            <MDBCardTitle>{this.props.post.title}</MDBCardTitle>
            <hr />
            <MDBCardText>
              {this.props.post.description.slice(0, 80).concat("...")}
            </MDBCardText>

            <Link
              className="black-text d-flex justify-content-end "
              to={{
                pathname: "/fullPost",
                state: {
                  post: this.props.post,
                },
              }}
            >
              <h5 style={{ color: "#FF5722" }}>
                Read more
                <MDBIcon icon="angle-double-right" className="ml-2" />
              </h5>
            </Link>
          </MDBCardBody>
          <div className="rounded-bottom mdb-color lighten-3 text-center pt-3">
            <ul className="list-unstyled list-inline font-small">
              <li className="list-inline-item pr-2 white-text">
                <MDBIcon far icon="clock" />{" "}
                {moment(this.props.post.createdAt).format("MMMM Do YYYY")}
              </li>
            </ul>
          </div>
        </MDBCard>
      </div>
    );
  }
}
Post.propTypes = {
  //post: PropTypes.array.isRequired,
  //onDeleteContact: PropTypes.func.isRequired,
};

export default Post;
