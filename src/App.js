import React from "react";
import { Router, Route } from "react-router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticleList from "./pages/ArticleList";
import "./App.css";

function App() {
  return (
    <Router>
      <Route path='/' component={HomePage} />
      <Route path='/about' component={AboutPage} />
      <Route path='/articles' component={ArticleList} />
    </Router>
  );
}

export default App;
