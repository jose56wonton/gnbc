import Helmet from "react-helmet";
import React, { Component } from "react";
import Img from "gatsby-image";
import MinistryTile from "../components/ministry/ministryTile";
import Banner from '../components/banner';

class Ministry extends Component {

  render() {
    console.log(this.props.data.contentfulMinistry);
    const { title, banner1,content1,content2,resources, images } = this.props.data.contentfulMinistry;
    return (
      <div className="ministry">
        <Helmet title={`Ministry - ${title}`} />
        <Banner 
          image={images[0].sizes}
          content={banner1.childMarkdownRemark.html}
        />
        <div className="container">
          <MinistryTile
            content={content1.childMarkdownRemark.html}
            sideContent={resources.childMarkdownRemark.html}
          />
        </div>
        <Banner 
          image={images[1].sizes}
        />
        <div className="container">
            <MinistryTile
              content={content2.childMarkdownRemark.html}
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
    banner1 {
      childMarkdownRemark{
        html
      }
    }
    content1 {
      childMarkdownRemark{
        html
      }
    }   
    
    content2 {
      childMarkdownRemark{
        html
      }
    }
    images{
      sizes(maxWidth: 1920,quality: 90){
        ...GatsbyContentfulSizes
      }
    }
    resources{
      childMarkdownRemark{
        html
      }
    }
   	
	}  
}
`;
