//import base files
import './App.scss';

//import components
import Nav from './components/nav.js';

//import images
import tea from './assets/img/tea_icon.png';

//import assets
import './assets/scss/base.scss';

import PageRenderer from './page-renderer';

// import react router
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'


//
//
//
//


function App() {

  return (
    <Router>

      <div className="app-container">

        <Nav/>

        <div className="app-body">

          <Switch>
            <Route path="/:page" component={PageRenderer} />
            <Route path="/" render={() => <Redirect to="/home" />} />
            <Route component={() => 404} />
          </Switch>

          <img src={tea} className="" alt="logo" style={{ width: `200px`, }} />
          
        </div>

      </div>

    </Router>
  );
}

export default App;
