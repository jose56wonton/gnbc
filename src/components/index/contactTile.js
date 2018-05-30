import React, { Component } from 'react';

class ContactTile extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div className="column is-10 is-offset-1" >        
        <div className="navbar-spacer"/>
        <div dangerouslySetInnerHTML={{__html: this.props.html }} />
      </div>
    );
  }
}

export default ContactTile;