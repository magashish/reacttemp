import React, { Component } from 'react';

class Sidebar extends Component {
state = {
    links: [
      {
        id: 1,
        name: "About Me",
        to: "#section1",
        className: "side_nav_item"
      },
      {
        id: 2,
        name: "What I’m good at",
        to: "#section2",
        className: "side_nav_item"
      },
      {
        id: 3,
        name: "My Work",
        to: "#section3",
        className: "side_nav_item"
      },
      {
        id: 4,
        name: "Contact Me",
        to: "#section4",
        className: "side_nav_item"
      }
    ],
    activeLink: null,
    sociallinks:[
     {
      id: 1,
      to: "/cms",
      className: "fa fa-facebook"
     },
     {
      id: 2,
      to: "/cms",
      className: "fa fa-twitter"
     },
     {
      id: 3,
      to: "/cms",
      className: "fa fa-linkedin"
     },
     {
      id: 4,
      to: "/cms",
      className: "fa fa-dribbble"
     },
     {
      id: 5,
      to: "/cms",
      className: "fa fa-rss"
     }
    ]
  };

  handleClick = id => {
    this.setState({ activeLink: id });
  };


  render() {
    const { links, activeLink,sociallinks } = this.state;
    
    return (
      <div className="responsive-nav">
          <i className="fa fa-bars" id="menu-toggle" />
          <div id="menu" className="menu">
            <i className="fa fa-times" id="menu-close" />
            <div className="container">
              <div className="image">
                <img src="images/author-image.jpg" alt="" />
              </div>
              <div className="author-content">
                <h4>Reflux Me</h4>
                <span>Web Designer</span>
              </div>
              <nav className="main-nav" role="navigation">
                <ul className="main-menu">
                    {links.map(link => {
              return (            
                <li key={link.id} onClick={() => this.handleClick(link.id)}
                  className={link.className + (link.id === activeLink ? " active" : "")}><a href={link.to}>{link.name}</a>
                </li>
                   );
                })}                    
                </ul>
              </nav>
              <div className="social-network">
                <ul className="soial-icons">
                   {sociallinks.map(sociallink => {
              return (            
                <li key={sociallink.id}><a href={sociallink.to}><i className={sociallink.className} /></a></li>
                   );
                })}     
                  
                </ul>
              </div>
              <div className="copyright-text">
                <p>Copyright 2020 Ashish</p>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
export default Sidebar;