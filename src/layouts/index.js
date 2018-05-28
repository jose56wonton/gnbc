import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Header from "../components/header";
import "../styles/index.scss";
import Footer from "../components/footer";
import SideBar from "../components/sidebar";
import React, { Component } from "react";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavMenuActive: false,
      isNavTransparent: true
    };
  }
  toggleBurger = () => {
    this.setState({ isNavMenuActive: !this.state.isNavMenuActive });
  };
  
  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount = () => {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    if(event.srcElement.scrollingElement.scrollTop){
      this.setState({isNavTransparent:false})
    }else{
      this.setState({isNavTransparent:true})
    }
  }
 
  render() {
    return (
      <div className="min-page-height" >
        <Helmet
          title={this.props.data.site.siteMetadata.title}
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" }
          ]}
        />
        <Header
          isNavTransparent={this.state.isNavTransparent}
          toggleBurger={this.toggleBurger}
          isNavMenuActive={this.state.isNavMenuActive}
          siteTitle={this.props.data.site.siteMetadata.title}
        />
        {this.state.isNavMenuActive ? (
          <SideBar
            toggleBurger={this.toggleBurger}
            isNavMenuActive={this.state.isNavMenuActive}
            navItems={this.props.data.allMarkdownRemark.edges}
          />
        ) : null}

        {this.props.children()}
        
       
        <Footer ministryEdges={this.props.data.allContentfulMinistry.edges} siteTitle={this.props.data.site.siteMetadata.title} />
      </div>
    );
  }
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.func
};

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulMinistry{
      edges{
        node{
          title
          path
        }
      }
    } 
  }
`;
