import React, { Component } from 'react';

class Sidebar extends Component {

  render() {
    return (
<div className="responsive-nav">
          <i className="fa fa-bars" id="menu-toggle" />
          <div id="menu" className="menu">
            <i className="fa fa-times" id="menu-close" />
            <div className="container">
              <div className="image">
                <a href="#"><img src="images/author-image.jpg" alt="" /></a>
              </div>
              <div className="author-content">
                <h4>Reflux Me</h4>
                <span>Web Designer</span>
              </div>
              <nav className="main-nav" role="navigation">
                <ul className="main-menu">
                  <li><a href="#section1">About Me</a></li>
                  <li><a href="#section2">What I’m good at</a></li>
                  <li><a href="#section3">My Work</a></li>
                  <li><a href="#section4">Contact Me</a></li>
                </ul>
              </nav>
              <div className="social-network">
                <ul className="soial-icons">
                  <li>
                    <a href="https://fb.com/templatemo"><i className="fa fa-facebook" /></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa fa-twitter" /></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa fa-linkedin" /></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa fa-dribbble" /></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa fa-rss" /></a>
                  </li>
                </ul>
              </div>
              <div className="copyright-text">
                <p>Copyright 2019 Reflux Design</p>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
export default Sidebar;