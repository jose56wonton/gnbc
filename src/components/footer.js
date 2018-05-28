import React from "react";
import Link from "gatsby-link";
import facebook from "../styles/icons/social/facebook.png";
import gmail from '../styles/icons/social/gmail.png'
import instagram from "../styles/icons/social/instagram.png";
const Footer = ({ siteTitle }) => (
  <div className="footer">

    <div className="footer-connect">
      <div className="container ">
        <div className="column cols is-8 is-offset-2">
          <div className="col">
            <div>
              <h4>Location</h4>
              <p>845 Pepperwood Ln, Iowa City, IA 52240</p>
              <p>Phone: (319) 354-3331</p>
            </div>
          </div>
          <div className="col">
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
    </div>
    <div className="footer-links">
      <div className="container">
        <div className="column is-8 is-offset-2">
          <p>All right reserved - Good News Bible Church</p>
        </div>
      </div>
    </div>
    <div className="footer-reserved">
      <div className="container">
        <div className="column is-8 is-offset-2">
          <p>All right reserved - Good News Bible Church</p>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;

