import Helmet from "react-helmet";
import React, { Component } from "react";
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import { stringToUrl } from '../utils'
import CopyToClipboard from 'react-copy-to-clipboard';
import tippy from 'tippy.js';
class People extends Component {
  
  componentDidMount = ()=>{ 
    tippy("#email",{
      duration: [300, 300],
      placement: 'right',
      trigger: 'click',
    })
  }
  render() {

    let { local, name, email, role, image, ministry, description } = this.props.data.contentfulPerson;
    let ministryList = <div></div>;
    if (ministry) {

      ministry = ministry.filter((thing, index, self) =>
        index === self.findIndex((t) => (
          t.title === thing.title 
        ))
      )
      console.log(ministry)
      
      ministryList = ministry.map((min,i) => {
        return <Link key={i*Math.random() * 323} to={`/ministry/${stringToUrl(min.title)}`}>{min.title}</Link>
      }).reduce((prev, curr) => [prev, ', ', curr])
    }
    
    console.log(ministry)
    return (
      <div className="people">
        <Helmet title={`${local ? "Staff" : "Cross Culture"} - ${name}`} />
        <div className="navbar-spacer" />
        <div className="container">
          <div className="column is-10 is-offset-1">
            <div className="people-header">
              <h1 className="title-1">{local ? "Staff" : "Cross Culture"}</h1>
              <Link to={`/about/${local ? stringToUrl("Staff") : stringToUrl("Cross Culture")}`}><i className="fas fa-angle-left"></i> Back to {local ? "Staff" : "Cross Culture"}</Link>
            </div>
            <div className="columns">
              <div className="column is-5">
                <Img sizes={image.sizes} />
              </div>
              <div className="column is-7">
                <h2 className="title-1" >{name}</h2>
                <h4>{role}</h4>
                {email && 
                  <p>Email: 
                    <CopyToClipboard text={email}>
                      <button title="Copied!" id="email">{email}</button>    
                    </CopyToClipboard>
                  </p>}
                {ministry && <p>Ministries: {ministryList}  </p>}              

                <div className="people-content" dangerouslySetInnerHTML={{ __html: description.childMarkdownRemark.html }} />
              </div>

            </div>
          </div>


        </div>

      </div>
    );
  }
}

export default People;

export const PeoplePathQuery = graphql`
  query PeoplePath($name: String!) {
    contentfulPerson(name:{eq: $name}){
      name
      local
      role
      email
      image{
        sizes(maxWidth: 600,quality: 90){
          ...GatsbyContentfulSizes
        }
      }
      ministry{
        title
      }
      description{
        childMarkdownRemark{
          html
        }
      }
    }
  }
`;
