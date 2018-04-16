import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Route, Switch } from 'react-router-dom';

import '../styles/App.css';
import Header from './common/Header';
import Footer from './common/Footer';
import Home from './home/Home';
import DashBoard from './dashboard/DashBoard';
import NoMatch from './noMatch';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={DashBoard} />
            {/*  Must be last route */}
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
