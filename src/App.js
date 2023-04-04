import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
// import LoadingBar from 'react-top-loading-bar'

// import sampleOutput from "./components/News";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  pageSize = 5;
  apiKey = process.env.REACT_APP_NEWS_API
  // state = {
  //   progress: 0
  // }

  // setProgress = (progress) => {
  //   this.setState({ progress: this.state.progress })
  // }
  render() {

    return (
      <div>
        <Router>
          <NavBar />
          {/* <LoadingBar
            color='#f11946'
            progress={this}
          /> */}
          <Routes>
            <Route exact path="/sports" element={<News apiKey={this.apiKey} key="sports " pageSize={5} country="in" category="sports" />} />
            <Route exact path="/general" element={<News apiKey={this.apiKey} key="general " pageSize={5} country="in" category="general" />} />
            <Route exact path="/health" element={<News apiKey={this.apiKey} key="health " pageSize={5} country="in" category="health" />} />
            <Route exact path="/science" element={<News apiKey={this.apiKey} key="science " pageSiz e={5} country="in" category="science" />} />
            <Route exact path="/technology" element={<News apiKey={this.apiKey} key="technology " pageSize={5} country="in" category="technology" />} />
            <Route exact path="/entertainment" element={<News apiKey={this.apiKey} key="entertainment " pageSize={5} country="in" category="entertainment" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
