import React from 'react';
import ScrollToTop from './ScrollToTop';
import Nav from './components/navigation/Nav';
import Home from './components/pages/Home.jsx';
import Skills from './components/pages/Skills.jsx';
import WorkHistory from './components/pages/WorkHistory.jsx';
import Education from './components/pages/Education.jsx';
import Projects from './components/pages/Projects.jsx';
import ErrorPage from './components/pages/ErrorPage.jsx';
import Contact from './components/pages/Contact';
import Footer from './components/navigation/Footer';
import './App.css';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const App  = () => {

    return (
      <div className="App">      
        <Router>
        <ScrollToTop>
        <Route render={({ location }) => (
          <div>
            <Nav />
            <TransitionGroup>
              <CSSTransition 
                key={location.key}
                timeout={700}
                classNames='fade'
              >
                <Switch location={location}>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/skills' component={Skills} />
                  <Route exact path='/work-history' component={WorkHistory} />
                  <Route exact path='/projects' component={Projects} />
                  <Route exact path='/education' component={Education} />
                  <Route exact path='/contact' render={(props) => (
                    <Contact {...props} onSubmit={fields => this.onSubmit(fields)}/>
                  )}  />
                  <Route component={ErrorPage} />
                  </Switch>
                  </CSSTransition>
                  </TransitionGroup>
                  <Footer />
          </div>
        )} />
        </ScrollToTop>
        </Router>
      </div>
    );
  
}

export default App;
