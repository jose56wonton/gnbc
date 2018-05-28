import React, {Component} from 'react';
import Img from 'gatsby-image';
class Banner extends Component {

  render() {
    return (
      <div className={`banner banner-${this.props.size}`}>
        <Img className="banner-image" sizes={this.props.image}/>
        <div className="banner-content" dangerouslySetInnerHTML={{__html:this.props.content}} />          
      </div>
    );
  }
}

export default Banner;