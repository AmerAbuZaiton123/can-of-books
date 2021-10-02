import React from 'react';
import Header from './Header';
// import ErrorPage from './ErrorPage';
import Footer from './Footer';
import ProfileOne from './components/ProfileOne'
import BestBooks from './BestBooks'
import Login from './Login'
import { withAuth0 } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  render() {
  
    const { IsAuthenticat } = this.props.auth0;
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">


              {IsAuthenticat ? <BestBooks /> : <Login />}

            </Route>
            <Route exact path="/ProfileOne ">

              {IsAuthenticat ? <ProfileOne /> : "not found "}

            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}
export default withAuth0(App);