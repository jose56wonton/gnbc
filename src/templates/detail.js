import Helmet from "react-helmet";
import React, { Component } from "react";
import Tile from "../components/detail/tile";
class Detail extends Component {
  mapDetailsToTiles = () => {
    console.log(this.props.data.markdownRemark.frontmatter)
    return this.props.data.markdownRemark.frontmatter.tiles.map((tile, i) => {
      console.log(tile);
      const {
        leftTitle,
        rightTitle,
        rightDescription,
        leftDescription
      } = tile.childMarkdownRemark.frontmatter;
      return (
        <Tile
          key={i * Math.random()*100}
          leftTitle={leftTitle}
          rightTitle={rightTitle}
          rightDescription={rightDescription}
          leftDescription={leftDescription}
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
        tiles {
          publicURL
          childMarkdownRemark {
            frontmatter {
              rightTitle
              rightDescription
              leftTitle
              leftDescription
            }
          }
        }
      }
    }
  }
`;
