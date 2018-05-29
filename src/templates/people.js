import Helmet from "react-helmet";
import React, { Component } from "react";
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import { stringToUrl } from '../utils'
class People extends Component {

  render() {

    const { local, name, email, role, image, ministry, description } = this.props.data.contentfulPerson;
    let ministryList = <div></div>;
    if (ministry) {
      ministryList = ministry.map(min => {
        return <Link to={`/ministry/${stringToUrl(min.title)}`}>{min.title}</Link>
      }).reduce((prev, curr) => [prev, ', ', curr])
    }

    return (
      <div className="people">
        <Helmet title={`${local ? "Staff" : "Cross Culture"} - ${name}`} />
        <div className="navbar-spacer" />
        <div className="container">
          <div className="column is-10 is-offset-1">
            <div className="people-header">
              <h1 className="title-1">{local ? "Staff" : "Cross Culture"}</h1>
              <Link to={`/about/${local ? "Staff" : "Cross Culture"}`}><i className="fas fa-angle-left"></i> Back to {local ? "Staff" : "Cross Culture"}</Link>
            </div>
            <div className="columns">
              <div className="column is-5">
                <Img sizes={image.sizes} />
              </div>
              <div className="column is-7">
                <h2 className="title-1" >{name}</h2>
                <h4>{role}</h4>
                <p>Email: <a href={email}>{email}</a> </p>
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
