import Helmet from "react-helmet";
import React, { Component } from "react";

class Media extends Component {

  mapMessagesToTiles = () => {
    return this.props.data.allFile.edges.map((messageNode,i)=> {
      const message = messageNode.node.childMarkdownRemark;
      console.log(message);

      return(
        <div className="column is-12">asdf</div>


      )
    })
  }
  render() {
    console.log(this.props.data);
    const messageElements = this.mapMessagesToTiles();
    const { frontmatter } = this.props.data.markdownRemark;
    return (
      <div>
        <Helmet title={`Media`} />
        <div>
          <h1>{frontmatter.title}</h1>         
          <div className="columns is-multiline">
            {messageElements}
          </div> 
        </div>
      </div>
    );
  }
}

export default Media;

export const MediaPathQuery = graphql`
  query MediaPath($name: String!){
    allFile(filter: {absolutePath: {regex:"/messageMarkdown/.*\\.md$/"}}) {
      edges{
        node{
          childMarkdownRemark{
            frontmatter{
              title
              speaker
              date
            }
            excerpt(pruneLength: 100)
          }
        }
      }
    } 
    markdownRemark(frontmatter: { path: { eq: $name } }) {
      frontmatter {
        title       
      }
    }
  }
`;
