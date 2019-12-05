import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Classes } from './pages/Classes';
import { Photos } from './pages/Photos';
import { NoMatch } from './pages/NoMatch';
import { Footer } from "./components/Footer"
// import { NavigationBar } from './components/NavigationBar';
// import { MainLogo } from './components/MainLogo'
// import { Layout } from './components/Layout'



class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          {/* <Layout> */}
          {/* <MainLogo /> */}
          {/* <NavigationBar /> */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/classes" component={Classes} />
            <Route path="/photos" component={Photos} />
            <Route component={NoMatch} />
          </Switch>
          {/* </Layout> */}
          <Footer />

        </Router>
      </React.Fragment>
    );
  }
}

export default App;
