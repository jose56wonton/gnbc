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
        <div className="banner-content" dangerouslySetInnerHTML={{__html:this.props.content}} />
          
      </div>
    );
  }
}

export default Banner;