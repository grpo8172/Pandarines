import React, { Component } from "react";
import { Layout } from "antd";
import Post from "./Post";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./blog.css";
import { Select, Divider, Input, Pagination, Spin, Result } from "antd";

//import header different size image
import smallHeader from "../../Assets/blog_small_w_538.png";
import mediumHeader from "../../Assets/blog_mediam_w_960.png";
import largeHeader from "../../Assets/blog_larg_1214.png";
//import Api functions
import { allCategories, getPostPagention } from "../../Apicall/api";

const { Option } = Select;
const { Search } = Input;
// limit the number of posts per page
const limit = 4;
//intial page for the paginition
const startingPage = 1;

class Blog extends Component {
  //to check  if is mounted before set the state
  _isMounted = false;

  state = {
    posts: [],
    catagories: [],
    ShowPosts: [],
    isLoaded: false,
    recentPosts: [],
    pagenedPosts: [],

    totalPages: 1,
    totalRecords: 1,
    error: null,
  };

  componentDidMount() {
    this._isMounted = true;
    //get all the catgories from the api
    allCategories()
      .then((res) => {
        // set the state is is mounted
        if (this._isMounted) {
          this.setState({ catagories: res.data });
        }
      })
      .catch((err) => console.log(err));

    this.getPostPagention({ page: startingPage, limit: limit });
  }
  //get all posts with pagintion by passing the limit and current page
  // title for the search by title
  getPostPagention = (obj, title) => {
    getPostPagention(obj, title)
      .then((res) => {
        console.log("Pageingation", res.data);
        if (this._isMounted) {
          this.setState({
            isLoaded: true,
            posts: res.data["results"],
            ShowPosts: res.data["results"],
            totalPages: res.data["lastPage"],

            totalRecords: res.data["totalRecors"],
          });
        }
      })
      .catch((err) => {
        this.setState({ isLoaded: true, error: err });
      });
  };

  componentWillUnmount() {
    this._isMounted = false;
  }
  //filter by catagory when select
  handleSelectChange = (categories) => {
    if (categories.length === 0 || categories === undefined) {
      this.setState({
        ShowPosts: this.state.posts,
      });
    } else {
      this.setState((prevState) => ({
        ShowPosts: prevState.posts.filter((post) =>
          categories.includes(post.catagory._id)
        ),
      }));
    }
  };
  //when click on search icon
  onSearch = (query) => {
    // if query is empty dont change any thing
    if (query.isEmpty) {
      this.setState({
        ShowPosts: this.state.posts,
      });
    } else {
      //call the pagintion Api with the query of the title
      this.getPostPagention({ page: startingPage, limit: limit }, query.trim());
    }
  };
  //listener to the search input if its empty to show all posts
  handleSearchChange = (event) => {
    const query = event.target.value;
    if (query.length === 0) {
      this.setState({
        ShowPosts: this.state.posts,
      });
    }
  };
  //when pagintion page is changed
  onChangePage = (page) => {
    this.getPostPagention({ page: page, limit: limit });
  };
  render() {
    if (this.state.error) {
      return (
        <div>
          <Result
            status="500"
            title={this.state.error.message.slice(-4)}
            subTitle="Sorry, something went wrong."
          />
        </div>
      );
    } else {
      return (
        <div>
          <Container>
            <Divider />
            <Row>
              <Image
                src={largeHeader}
                srcSet={`${smallHeader} 500w, ${mediumHeader} 720w, ${largeHeader} 1000w`}
                fluid
              />
              <Divider>Blog</Divider>
            </Row>

            {this.state.isLoaded && (
              <Row>
                <Col xs={{ span: 12, order: 2 }} md={{ span: 8, order: 1 }}>
                  <Row>
                    {this.state.ShowPosts.map((post) => (
                      <Col xs={12} lg={6} key={post._id} className="posts">
                        <Post
                          key={post._id}
                          post={post}
                          catagoryName={post.catagory.name}
                        />
                      </Col>
                    ))}
                  </Row>
                  <Row>
                    <Col
                      xs={{ offset: 2, span: 12 }}
                      sm={{ offset: 3, span: 12 }}
                      md={{ offset: 3, span: 12 }}
                    >
                      <Pagination
                        className="Pagination mt-2 mb-2"
                        defaultCurrent={1}
                        current={this.state.currentPage}
                        onChange={this.onChangePage}
                        total={this.state.totalRecords}
                        showTotal={(total) => `Total ${total} posts`}
                        pageSize={limit}
                      />
                    </Col>
                  </Row>
                </Col>

                <Col xs={{ span: 12, order: 1 }} md={{ span: 4, order: 2 }}>
                  <Row>
                    <Col xs={12}>
                      <Search
                        placeholder="search by title"
                        onSearch={this.onSearch}
                        enterButton
                        onChange={this.handleSearchChange}
                        allowClear
                      />
                    </Col>
                  </Row>
                  <Divider plain orientation="left">
                    Select Post Type
                  </Divider>
                  <Row>
                    <Col xs={12}>
                      <Select
                        mode="multiple"
                        style={{ width: "100%" }}
                        placeholder="select post type"
                        onChange={this.handleSelectChange}
                        optionLabelProp="label"
                        allowClear={true}
                      >
                        {this.state.catagories.map((category, index) => (
                          <Option
                            value={category._id}
                            label={category.name}
                            key={index}
                          >
                            <div className="demo-option-label-item">
                              {category.name}
                            </div>
                          </Option>
                        ))}
                      </Select>
                    </Col>
                  </Row>
                  <Row>
                    <Divider />
                  </Row>
                </Col>
              </Row>
            )}

            {!this.state.isLoaded && (
              <Spin
                tip="Loading..."
                size="large"
                className="d-flex justify-content-center"
              />
            )}
          </Container>
        </div>
      );
    }
  }
}

export default Blog;
