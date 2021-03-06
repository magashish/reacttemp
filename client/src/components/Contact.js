import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: '',
      email: '',
      subject:'',
      message:'',
      sucessmessage:''
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    this.setState({sucessmessage:"We will contact you soon, Thanks for Submitting your Query"});
  }

render() {
const {sucessmessage} = this.state;
let sucmsg;
if(sucessmessage!==""){
  sucmsg = <div className="p-3 mb-2 bg-success text-white">{sucessmessage}</div>;
}else{
  sucmsg ="";
}
return (
<section className="section contact-me" data-section="section4" id="section4">
          <div className="container">
            <div className="section-heading">
              <h2>Contact Me</h2>
              {sucmsg}
              <div className="line-dec" />
              <span>Fusce eget nibh nec justo interdum condimentum. Morbi justo ex,
                efficitur at ante ac, tincidunt maximus ligula. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit.</span>
            </div>
            <div className="row">
              <div className="right-content">
                <div className="container">
                  <form id="contact" action="true" method="post">
                  
                    <div className="row">
                      <div className="col-md-6">
                        <fieldset>
                          <input name="name" type="text"  onChange={this.myChangeHandler} className="form-control" id="name" placeholder="Your name..." required />
                        </fieldset>
                      </div>
                      <div className="col-md-6">
                        <fieldset>
                          <input name="email" type="text" onChange={this.myChangeHandler} className="form-control" id="email" placeholder="Your email..." required />
                        </fieldset>
                      </div>
                      <div className="col-md-12">
                        <fieldset>
                          <input name="subject" type="text" onChange={this.myChangeHandler} className="form-control" id="subject" placeholder="Subject..." required />
                        </fieldset>
                      </div>
                      <div className="col-md-12">
                        <fieldset>
                          <textarea name="message" rows={6} onChange={this.myChangeHandler} className="form-control" id="message" placeholder="Your message..." required defaultValue={""} />
                        </fieldset>
                      </div>
                      <div className="col-md-12">
                        <fieldset>
                          <button type="submit" id="form-submit" onClick={this.mySubmitHandler} className="button">
                            Send Message
                          </button>
                        </fieldset>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
  }
}
export default Contact;