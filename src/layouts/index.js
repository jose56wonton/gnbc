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
      isNavMenuActive: false
    };
  }
  toggleBurger = () => {
    this.setState({ isNavMenuActive: !this.state.isNavMenuActive });
  };

  render() {
    
    return (
      <div className="min-size">
        <Helmet
          title={this.props.data.site.siteMetadata.title}
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" }
          ]}
        />
        <Header
          toggleBurger={this.toggleBurger}
          isNavMenuActive={this.state.isNavMenuActive}
          siteTitle={this.props.data.site.siteMetadata.title}
        />
        {this.state.isNavMenuActive ? <SideBar
          toggleBurger={this.toggleBurger}
          isNavMenuActive={this.state.isNavMenuActive}
          navItems={this.props.data.allMarkdownRemark.edges}
        /> : null}
        
        <div className="container ">{this.props.children()}</div>

        <Footer siteTitle={this.props.data.site.siteMetadata.title} />
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
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            path
            type
          }
        }
      }
    }
  }

 
`;
