
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Courses from './Components/Courses/Courses';
import Description from './Components/Description/Description';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';


function App() {
  return (
    <div className="">
      <Router>
        <Header></Header>
        <Description/>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/courses">
            <Courses></Courses>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
