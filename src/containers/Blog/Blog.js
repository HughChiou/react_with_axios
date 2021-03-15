import "./Blog.css";

import axios from "axios";
import React, { Component } from "react";

import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import Post from "../../components/Post/Post";

class Blog extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    const getPosts = axios.get("https://jsonplaceholder.typicode.com/posts");
    getPosts.then(({ data }) => {
      const posts = data.slice(0, 4).map((post) => {
        return { ...post, author: "Hugh" };
      });
      this.setState({ posts });
      console.log({ data });
    });
  }

  render() {
    const posts = this.state.posts.map((post) => (
      <Post key={`post-${post.id}`} title={post.title} author={post.author} />
    ));

    return (
      <div>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
