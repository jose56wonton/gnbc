import Helmet from "react-helmet";
import React, { Component } from "react";

class Media extends Component {
  render() {
    console.log(this.props.data)
    const { frontmatter } = this.props.data.markdownRemark;
    return (
      <div>
        <Helmet title={`Media`} />
        <div>
          <h1>{frontmatter.title}</h1>          
        </div>
      </div>
    );
  }
}

export default Media;

export const MediaPathQuery = graphql`
  query MediaPath($name: String!) {
    allFile(filter: { extension: { eq: "mp3" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
    markdownRemark(frontmatter: { path: { eq: $name } }) {
      html
      frontmatter {
        type 
        path
        title
      }
    }
  }
`;
