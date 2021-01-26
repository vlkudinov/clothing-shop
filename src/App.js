import React from 'react';
import { Switch, Route } from "react-router-dom";

import './App.scss'

import Header from 'components/header/header.component';
import Homepage from 'pages/homepage/homepage.component';
import ShopPage from 'pages/shop/shop.component';
import SignInSignUp from "pages/sign-in-sign-up/sign-in-sign-up.component";
import { auth } from 'firebase/firebase.utils';
import {createUserProfileDocument} from 'firebase/firebase.users.api';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        });
      }
      this.setState({currentUser: userAuth})
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/sign-in' component={SignInSignUp}/>
        </Switch>
      </div>
    )
  }
}

export default App;
