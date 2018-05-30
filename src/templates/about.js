import Helmet from "react-helmet";
import React, { Component } from "react";
import Img from "gatsby-image";
import AboutTile from "../components/about/aboutTile";
import Banner from '../components/banner';
import Link from 'gatsby-link'
import { stringToUrl } from '../utils'
class About extends Component {
  
  render() {
    const { title, banner1,content1,content2,resources, images } = this.props.data.contentfulAbout;

    

    return (
      <div className="ministry">
        <Helmet title={`About - ${title}`} />
        <Banner 
          image={images[0].sizes}
          size="lg"
          content={banner1.childMarkdownRemark.html}
        />
        <div className="container">
          <AboutTile
            content={content1.childMarkdownRemark.html}
            
          />
        </div>
        <Banner 
          size="sm"
          image={images[1].sizes}
        />
        <div className="container">
            <AboutTile
              content={content2.childMarkdownRemark.html}
              
            />
        </div>
      </div>
    );
  }
}

export default About;

export const AboutPathQuery = graphql`
query AboutQuery($title: String!){
	contentfulAbout(title:{eq: $title}){	  
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
      	
	} 
}
`;
