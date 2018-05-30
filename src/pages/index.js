import React,{Component} from 'react'
import Link from 'gatsby-link'
import Helmet from "react-helmet";

import Banner from '../components/banner';
import ServiceTile from '../components/index/serviceTile';
import PreviewTile from '../components/index/previewTile';
import ContactTile from '../components/index/contactTile';

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {title,banner1,bannerImage,serviceInfo,preview1,preview2,preview3,previewImages,contactInfo} = this.props.data.contentfulHome;
    console.log(this.props.data);
    return (
      <div>
        <Helmet title={`Ministry - ${title}`} />
        <Banner
          image={bannerImage.sizes}
          size="lg"
          content={banner1.childMarkdownRemark.html}
        />
        <div className="container">
          <ServiceTile html={serviceInfo.childMarkdownRemark.html}/>
        </div>
        <PreviewTile html={preview1.childMarkdownRemark.html} sizes={previewImages[0].sizes} inverse={false}/>
        <PreviewTile html={preview2.childMarkdownRemark.html} sizes={previewImages[1].sizes} inverse={true}/>
        <PreviewTile html={preview3.childMarkdownRemark.html} sizes={previewImages[2].sizes} inverse={false}/>
      
        <div className="container">
          <ContactTile html={contactInfo.childMarkdownRemark.html} />
        </div> 
      </div>
    );
  }
}

export default IndexPage;


export const HomePathQuery = graphql`
  query HomeQuery{
    contentfulHome{
      banner1{
        childMarkdownRemark{
          html
        }
      }
      bannerImage{
        sizes(maxWidth: 1920,quality: 90){
          ...GatsbyContentfulSizes
        }
      }
      serviceInfo{
        childMarkdownRemark{
          html
        }
      }
      preview1{
        childMarkdownRemark{
          html
        }
      }preview2{
        childMarkdownRemark{
          html
        }
      }preview3{
        childMarkdownRemark{
          html
        }
      }
      previewImages{
        sizes(maxWidth: 1920,quality: 90){
          ...GatsbyContentfulSizes
        }
      }
      contactInfo{
        childMarkdownRemark{
          html
        }
      }
    }
  }
`