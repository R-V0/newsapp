
import './App.css';

import React, { Component } from 'react'
import Nav from './COMPONENTS/Nav.js';
import News from './COMPONENTS/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {
  render() {
    // const [mode, setmode] = useState('dark');
    // const togglemode=()=>{
    //   if(mode==='light'){
    //     setmode(dark);
    //     document.body.style.backgroundColor="grey";
    //   }
    //   else{
    //     setmode('light');
    //     document.body.style.backgroundColor="white";
    //   }
    // }
    return (
      <div>
        <Router>
        <Nav/>
        
        <Routes>
          <Route exact path="/"
            element= {<News key='general' pagesize={8} country='in' category='general'/>}>
          </Route>
          <Route exact path="/business"
            element={<News key='business' pagesize={8} country='in' category='business'/>}>
          </Route>
          <Route exact path="/entertainment"
            element={<News key='entertainment' pagesize={8} country='in' category='entertainment'/>}>
          </Route>
          <Route exact path="/health"
            element={<News key='health' pagesize={8} country='in' category='health'/>}>
          </Route>
          <Route exact path="/science"
            element={<News key='science' pagesize={8} country='in' category='science'/>}>
          </Route>
          <Route exact path="/sports"
            element={<News key='sports' pagesize={8} country='in' category='sports'/>}>
          </Route>
          <Route exact path="/technology"
            element={<News key='technology' pagesize={8} country='in' category='technology'/>}>
          </Route>
        </Routes>
        </Router>
      </div>
    )
  }
}
