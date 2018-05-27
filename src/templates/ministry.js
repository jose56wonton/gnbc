import Helmet from "react-helmet";
import React, { Component } from "react";
import Img from "gatsby-image";
import Tile from "../components/ministry/tile";
class Ministry extends Component {
 
  render() {
    console.log(this.props.data.contentfulMinistry);
    const { title, tile1title, tile2title, tile1text, tile2text,images } = this.props.data.contentfulMinistry;
    return (
      <div>
        <Helmet title={`Ministry - ${title}`} />
        <h1 className="title-1">{title}</h1>
        <div className="columns  is-multiline">
          <Tile
            key={images[1].sizes.base64}
            imageSizes={images[1].sizes}
            title={tile1title}
            description={tile1text.childMarkdownRemark.html}
          />
          <Tile
            key={images[2].sizes.base64}
            imageSizes={images[2].sizes}
            title={tile2title}
            description={tile2text.childMarkdownRemark.html}
          />
        </div>
      </div>
    );
  }
}

export default Ministry;

export const MinistryPathQuery = graphql`
query MinistryQuery($title: String!){
	contentfulMinistry(title:{eq: $title}){	  
  	title
    path
    tile1text {
      childMarkdownRemark{
        html
      }
    }
    tile2text {
      childMarkdownRemark{
        html
      }
    }
    tile1title
    tile2title
    images{
      sizes(maxWidth: 600, quality: 90) {
        ...GatsbyContentfulSizes
      }
    }
	}  
}
`;
