import Helmet from "react-helmet";
import React, { Component } from "react";
import Tile from '../components/detail/tile';
class Detail extends Component {
  mapDetailsToTiles = () => {
    return this.props.data.markdownRemark.frontmatter.tiles.map((tile, i) => {
      console.log(tile);
      const {
        sideText,
        title,
        description
      } = tile.childMarkdownRemark.frontmatter;
      return (
        <Tile 
        key={title}
        sideText={sideText}
        title={title}
        description={description}
        />
      );
    });
  };
  render() {
    const { frontmatter } = this.props.data.markdownRemark;
    const detailElements = this.mapDetailsToTiles();
    return (
      <div className="columns">
        <div className="column is-offset-2 is-8">
          <Helmet title={`About - ${frontmatter.title}`} />
          <h1 className="title-1">{frontmatter.title}</h1>
          <div className="columns  is-multiline">{detailElements}</div>
        </div>
      </div>
    );
  }
}

export default Detail;

export const DetailPathQuery = graphql`
  query DetailPath($name: String!) {
    markdownRemark(frontmatter: { path: { eq: $name } }) {
      html
      frontmatter {
        type
        path
        title
        tiles{
          publicURL
          childMarkdownRemark {
            frontmatter {
              title
              description
              sideText
            }
          }
        }
      }
    }
  }
`;
