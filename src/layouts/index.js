
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Header from "../components/header";
import "../styles/index.scss";
import Footer from '../components/footer';
import SideBar from '../components/sidebar';
import React, { Component } from 'react';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }
  toggleBurger = () => {
    this.setState({ active: !this.state.active });
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
      <Header toggleBurger={this.toggleBurger} burgerActive={this.state.active} siteTitle={this.props.data.site.siteMetadata.title} />
      <SideBar toggleBurger={this.toggleBurger} burgerActive={this.state.active}/>
      <div className="container ">
        {this.props.children()}
      </div>
      
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
  }
`;
