import Helmet from "react-helmet";
import React, { Component } from "react";

class Message extends Component {
  render() {
    
    const {title,date,speaker,mp3} = this.props.data.markdownRemark.frontmatter;
    return (
      <div>
        <Helmet title={`Media - ${title}`} />
        <div>
          <h1>{title}</h1>          
        </div>
      </div>
    );
  }
}

export default Message;

export const MessagePathQuery = graphql`
  query MessagePath($name: String!) {    
    markdownRemark(frontmatter: { date: { eq: $name } }) {
      html
      frontmatter {
        title
        date
        speaker
        mp3{
          publicURL
        }
      }
    }
  }
`;