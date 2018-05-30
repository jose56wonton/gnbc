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
        isNavTransparent: this.validTransparent(this.props.location.pathname) ? true : false
      };
  }
  
  toggleBurger = () => {
    this.setState({ isNavMenuActive: !this.state.isNavMenuActive });     
  };
  validTransparent = (path) => {
    console.log(path);
    if(path.includes("ministry") || path.includes("about") &&(!path.includes("cross-culture") || !path.includes("staff"))){
      return true;
    }
    return false;
  }
  componentWillReceiveProps =(nextProps) => {
    console.log(nextProps.location.pathname)   
    if(this.validTransparent(nextProps.location.pathname)){
      this.setState({isNavTransparent: true})
    }else{
      this.setState({isNavTransparent: false})
    }
  }
  
  componentDidMount = () => {    
    window.addEventListener('scroll', this.handleScroll);  
        
  }

  componentWillUnmount = () => {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    if(this.validTransparent(this.props.location.pathname)){
      if(event.srcElement.scrollingElement.scrollTop){
        this.setState({isNavTransparent:false})
      }else{
        this.setState({isNavTransparent:true})
      }
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
      
        <SideBar
          toggleBurger={this.toggleBurger}
          isNavMenuActive={this.state.isNavMenuActive}
          ministryEdges={this.props.data.allContentfulMinistry.edges}
        />

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
