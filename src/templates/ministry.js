import Helmet from "react-helmet";
import React, { Component } from "react";
import Img from "gatsby-image";
import MinistryTile from "../components/ministry/ministryTile";
import Banner from '../components/banner';

class Ministry extends Component {

  render() {
    console.log(this.props.data.contentfulMinistry);
    const { title, covertitle, covertext, tile1title, tile2title, tile1text, tile2text, images } = this.props.data.contentfulMinistry;
    return (
      <div>
        <Helmet title={`Ministry - ${title}`} />
        <Banner image={images[0].sizes}
          title={covertitle}
          text={covertext}
        />
        <div className="container">
          <div className="columns is-multiline">
            <MinistryTile
              key={images[1].sizes.base64}
              imageSizes={images[1].sizes}
              title={tile1title}
              inverse={true}
              description={tile1text.childMarkdownRemark.html}
            />
            <MinistryTile
              key={images[2].sizes.base64}
              imageSizes={images[2].sizes}
              title={tile2title}
              inverse={false}
              description={tile2text.childMarkdownRemark.html}
            />
          </div>
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
    covertitle
    covertext
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
      sizes(maxWidth: 1920, quality: 90) {
        ...GatsbyContentfulSizes
      }
    }
	}  
}
`;
