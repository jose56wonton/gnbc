import React, { Component } from 'react';
import Img from 'gatsby-image'

class ServiceTile extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div className="columns" >        
        <div className="column is-6">
          <Img sizes={this.props.sizes} />
        </div>
        <div className="column is-6 ">
          <div dangerouslySetInnerHTML={{__html: this.props.html }} />
        </div>  
      </div>
    );
  }
}

export default ServiceTile;