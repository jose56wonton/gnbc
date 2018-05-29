import Helmet from "react-helmet";
import React, { Component } from "react";
import MediaTile from "../components/media/mediaTile";
class Media extends Component {
  mapMessagesToTiles = () => {
    return this.props.data.allContentfulMessage.edges.map((messageNode, i) => {
      const excerpt = messageNode.node.notes.childMarkdownRemark.excerpt;
      console.log(messageNode.node.speaker);
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

        <div className="navbar-spacer" />

        <div className="container">
          <div className="column is-10 is-offset-1">
            <h1>Media</h1>
            <div className="columns is-multiline ">{messageElements}</div>
          </div>

        </div>

      </div>
    );
  }
}

export default Media;

export const MediaPathQuery = graphql`
  query MediaPath{
    allContentfulMessage{
      edges{
        node{
          title
          date
          speaker{
            name
            image{
              sizes(maxWidth: 1920,quality: 90){
                ...GatsbyContentfulSizes
              }
            }
          }
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
