import React, { Component } from "react";
import { RecentPost } from "./recentPost";
import { Card, Avatar, Divider } from "antd";
import { posts, catagories } from "../../data.js";
import { Row, Col } from "react-bootstrap";
import { getRecentPosts } from "../../Apicall/api";

const { Meta } = Card;

class RecentPostList extends Component {
  _isMounted = false;
  state = { recentposts: [] };
  componentDidMount() {
    this._isMounted = true;
    // get recent post API
    getRecentPosts()
      .then((res) => {
        if (this._isMounted) {
          this.setState({ recentposts: res.data });
          console.log("recent posts", this.state.recentposts);
        }
      })
      .catch((err) => console.log(err));
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <div>
        <div>
          <Card
            style={{
              marginTop: "10x",
              justifyContent: "center",
              justifyItems: "center",
              backgroundSize: "cover",
              borderRadius: "10px",
            }}
            className="align-items-center"
            title={<h4> Recent Posts</h4>}
          >
            <Row>
              {this.state.recentposts.map((recentpost) => (
                <Col md={12} lg={12} xs={12}>
                  <RecentPost recentPost={recentpost} />
                </Col>
              ))}
            </Row>
          </Card>
        </div>
      </div>
    );
  }
}

export { RecentPostList };
