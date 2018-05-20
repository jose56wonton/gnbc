import Helmet from "react-helmet";
import React, { Component } from "react";
import Img from "gatsby-image";

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
        <div className="column is-12 ministry-tile">
          <div className="columns">
            <div className="column ministry-content">
              <h1 className="title-1">{title}</h1>
              <p className="text">{description}</p>
            </div>
            <div className="column ministry-image-wrapper">
              <Img
                className={`ministry-image`}
                sizes={image.childImageSharp.sizes}
              />
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    console.log(this.props);
    const { frontmatter } = this.props.data.markdownRemark;
    const ministryElements = this.mapMinistryToTiles();
    return (
      <div className="columns">
        <div className="column is-offset-2 is-8">
          <Helmet title={`Ministry - ${frontmatter.title}`} />
          <h1 className="title-1">{frontmatter.title}</h1>
          <div className="columns  is-multiline">{ministryElements}</div>
        </div>
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
