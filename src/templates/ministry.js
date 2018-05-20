import Helmet from "react-helmet";
import React, { Component } from "react";
import Img from "gatsby-image";
import Tile from "../components/ministry/tile";
class Ministry extends Component {
  mapMinistryToTiles = () => {
    return this.props.data.markdownRemark.frontmatter.tiles.map((tile, i) => {
      console.log(tile);
      const {
        image,
        title,
        description
      } = tile.childMarkdownRemark.frontmatter;
      return (
        <Tile
          key={image.childImageSharp.sizes.base64}
          imageSizes={image.childImageSharp.sizes}
          title={title}
          description={description}
        />
      );
    });
  };
  render() {
    console.log(this.props);
    const { frontmatter } = this.props.data.markdownRemark;
    const ministryElements = this.mapMinistryToTiles();
    return (
      <div>
        <Helmet title={`Ministry - ${frontmatter.title}`} />
        <h1 className="title-1">{frontmatter.title}</h1>
        <div className="columns  is-multiline">{ministryElements}</div>
      </div>
    );
  }
}

export default Ministry;

export const MinistryPathQuery = graphql`
  query MinistryPath($name: String!) {
    markdownRemark(frontmatter: { path: { eq: $name } }) {
      html
      frontmatter {
        title
        tiles {
          publicURL
          childMarkdownRemark {
            frontmatter {
              title
              description
              image {
                childImageSharp {
                  sizes {
                    ...GatsbyImageSharpSizes
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
