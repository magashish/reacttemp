import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Contact from './components/Contact';
import Mywork from './components/Mywork';
import Myservices from './components/Myservices';
import Aboutus from './components/Aboutus';

class App extends Component {

  render() {
    return (
        <div id="page-wraper">
        <Sidebar/>
        <Aboutus/>
        <Myservices/>
        <Mywork/>
        <Contact/>
      </div>
    );
  }
}
export default App;