import Helmet from "react-helmet";
import React, { Component } from "react";
import MP3Player from '../components/media/mp3Player';
class Message extends Component {
  render() {
    const {
      title,
      date,
      speaker,
      mp3
    } = this.props.data.markdownRemark.frontmatter;
    
    return (
      <div>
        <Helmet title={`Media - ${title}`} />

        <MP3Player url={mp3.publicURL} />
        <div className="message-intro">
          <p className="message-date">{date}</p>
          <h1 className="message-title">{title}</h1>
          <div className="message-details">
            <p><span>Speaker: </span> {speaker}</p>
            <p><span>Scripture: </span> Romans 8:10-19</p>
            <p><span>Topic: </span> Killing Sin</p>
          </div>   
        </div>

        <div className="message-content" dangerouslySetInnerHTML={{ __html: this.props.data.markdownRemark.html }} />
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
        mp3 {
          publicURL
        }
      }
    }
  }
`;
