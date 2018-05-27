import Helmet from "react-helmet";
import React, { Component } from "react";
import MediaTile from "../components/media/mediaTile";
class Ministry extends Component {
  mapMessagesToTiles = () => {
    return this.props.data.allContentfulMessage.edges.map((messageNode, i) => {
      const excerpt = messageNode.node.notes.childMarkdownRemark.excerpt;
      const { title, speaker, date, topic, passage } = messageNode.node;
      return (
        <MediaTile
          key={i * Math.random() * 12}
          title={title}
          date={date}
          excerpt={excerpt}
          speaker={speaker}
        />
      );
    });
  };
  render() {
    const messageElements = this.mapMessagesToTiles();
    console.log(messageElements);
    return (
      <div>
        <Helmet title={`Media`} />
        <div>
          <h1>Media</h1>
          <div className="columns is-multiline">{messageElements}</div>
        </div>
      </div>
    );
  }
}

export default Ministry;

export const MinistryPathQuery = graphql`
  query MinistryPath{
    allContentfulMessage{
      edges{
        node{
          title
          date
          speaker
          topic
          passage
          notes{
            childMarkdownRemark{
              excerpt
            }
          }
        }
      }
    }
  }
`;
