import React, { Component } from 'react';

class Mywork extends Component {

  state = {

    activeTab: 'all',
    
  };

handleClick = id => {
  console.log(id);
    this.setState({ activeTab: id });
  };

render() {
  const {activeTab } = this.state;
return (
<section className="section my-work" data-section="section3" id="section3">
          <div className="container">
            <div className="section-heading">
              <h2>My Work</h2>
              <div className="line-dec" />
              <span>Aenean sollicitudin ex mauris, lobortis lobortis diam euismod sit
                amet. Duis ac elit vulputate, lobortis arcu quis, vehicula
                mauris.</span>
            </div>
            <div className="row">
              <div className="isotope-wrapper">
                <div className="isotope-toolbar">
                  <label><input type="radio" onClick = {()=>this.handleClick('all')} defaultChecked name="isotope-filter" />
                    <span>all</span></label>
                  <label><input type="radio" onClick = {()=>this.handleClick('people')} name="isotope-filter" />
                    <span>people</span></label>
                  <label><input type="radio" onClick = {()=>this.handleClick('nature')} name="isotope-filter" />
                    <span>nature</span></label>
                  <label><input type="radio" onClick = {()=>this.handleClick('animals')} name="isotope-filter" />
                    <span>animals</span></label>
                </div>
                <div className="isotope-box">
                <div className={("people" === activeTab || "all" === activeTab ? "active" : "")} >
                  <div className="isotope-item">
                    <figure className="snip1321">
                      <img src="images/portfolio-01.jpg" alt="sq-sample26" />
                      <figcaption>
                        <a href="assets/images/portfolio-01.jpg" data-lightbox="image-1" data-title="Caption"><i className="fa fa-search" /></a>
                        <h4>First Title</h4>
                        <span>free to use our template</span>
                      </figcaption>
                    </figure>
                  </div>
                   <div className="isotope-item">
                    <figure className="snip1321">
                      <img src="images/portfolio-02.jpg" alt="sq-sample26" />
                      <figcaption>
                        <a href="assets/images/portfolio-02.jpg" data-lightbox="image-1" data-title="Caption"><i className="fa fa-search" /></a>
                        <h4>Second Title</h4>
                        <span>please tell your friends</span>
                      </figcaption>
                    </figure>
                  </div>
                 </div>
                  <div className={("nature" === activeTab || "all" === activeTab ? "active" : "")}>
                   <div className="isotope-item">
                    <figure className="snip1321">
                      <img src="images/portfolio-03.jpg" alt="sq-sample26" />
                      <figcaption>
                        <a href="assets/images/portfolio-03.jpg" data-lightbox="image-1" data-title="Caption"><i className="fa fa-search" /></a>
                        <h4>Item Third</h4>
                        <span>customize anything</span>
                      </figcaption>
                    </figure>
                  </div>
                   <div className="isotope-item">
                    <figure className="snip1321">
                      <img src="images/portfolio-04.jpg" alt="sq-sample26" />
                      <figcaption>
                        <a href="assets/images/portfolio-04.jpg" data-lightbox="image-1" data-title="Caption"><i className="fa fa-search" /></a>
                        <h4>Item Fourth</h4>
                        <span>Re-distribution not allowed</span>
                      </figcaption>
                    </figure>
                  </div>
                  </div>
                  <div className={("animals" === activeTab || "all" === activeTab ? "active" : "")}>
                   <div className="isotope-item">
                    <figure className="snip1321">
                      <img src="images/portfolio-05.jpg" alt="sq-sample26" />
                      <figcaption>
                        <a href="assets/images/portfolio-05.jpg" data-lightbox="image-1" data-title="Caption"><i className="fa fa-search" /></a>
                        <h4>Fifth Awesome</h4>
                        <span>Ut sollicitudin risus</span>
                      </figcaption>
                    </figure>
                  </div>
                  <div className="isotope-item">
                    <figure className="snip1321">
                      <img src="images/portfolio-06.jpg" alt="sq-sample26" />
                      <figcaption>
                        <a href="assets/images/portfolio-06.jpg" data-lightbox="image-1" data-title="Caption"><i className="fa fa-search" /></a>
                        <h4>Awesome Sixth</h4>
                        <span>Donec eget massa ante</span>
                      </figcaption>
                    </figure>
                  </div>
                  </div>
                </div>
              </div>
            </div>
      </div>
 </section>
    );
  }
}
export default Mywork;