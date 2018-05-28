import React from "react";
import Link from "gatsby-link";
import facebook from "../styles/icons/social/facebook.png";
import gmail from '../styles/icons/social/gmail.png'
import instagram from "../styles/icons/social/instagram.png";
const Footer = ({ siteTitle }) => (
  <div className="footer">

    <div className="footer-connect">
      <div className="container columns is-centered is-multiline">
        <div className="column is-4-tablet is-offset-2 is-offset-2-mobile is-8-mobile">
          <h4>Location</h4>
          <p>845 Pepperwood Ln, Iowa City, IA 52240</p>
          <p>Phone: (319) 354-3331</p>
        </div>
        <div className="column is-4-tablet is-offset-2-mobile is-8-mobile">
          <div className="social">
            <a href>
              <img src={gmail} />
            </a> <a href>
              <img src={instagram} />
            </a> <a href>
              <img src={facebook} />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-links">
      <div className="container columns">
        <div className="column is-8 is-offset-2">
          <p>All right reserved - Good News Bible Church</p>
        </div>
      </div>
    </div>
    <div className="footer-reserved">
      <div className="container columns">
        <div className="column is-8 is-offset-2">
          <p>All right reserved - Good News Bible Church</p>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;

