import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import {
  showNavigationbar,
  showBlog,
} from "./editable-stuff/configurations.json";
import MainBody from "./components/home/MainBody";
import AboutMe from "./components/home/AboutMe";
import Skills from "./components/home/Skills";
import Projects from "./components/home/Projects";
import Education from "./components/home/Education";
import RecentProjects from "./components/home/RecentProjects";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Blog } from "./components/blog/Blog";
import BlogPost from "./components/blog/BlogPost";
import Industry from "./components/home/Industry"


function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}


const Home = () => {
  return (
    <Fragment>
      <MainBody />
      <FadeInSection><AboutMe /></FadeInSection>
      <FadeInSection><Industry/ ></FadeInSection>
      <FadeInSection><Education /></FadeInSection>
      <FadeInSection><Skills/ ></FadeInSection>
      <FadeInSection><RecentProjects /></FadeInSection>
      {/*<Projects />*/}
      <Footer />
    </Fragment>
  );
};

const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
    {showNavigationbar && <Navbar />}
    <Route path="/" exact component={Home} />
    {showBlog && <Route path="/blog" exact component={Blog} />}
    {showBlog && <Route path="/blog/:id" component={BlogPost} />}
  </BrowserRouter>
);

export default App;
