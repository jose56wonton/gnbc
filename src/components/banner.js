import React, {Component} from 'react';
import Img from 'gatsby-image';
class Banner extends Component {
  constructor(props){
    super(props);



  }

  render() {
    return (
      <div className="banner">
        <Img className="banner-image" sizes={this.props.image}/>
        <div className="banner-content">
          <h1 className="banner-title">{this.props.title}</h1>
          <p className="banner-text">{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default Banner;