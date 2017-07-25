import { Component, h } from '@stencil/core';

declare var firebase: any;

@Component({
  tag: 'app-login',
  styleUrl: 'app-login.scss'
})
export class AppLogin {

  login() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithRedirect(provider);
  }

  render() {
    return [
        <div class='loginButtonBlock'>
          <button onClick={() => this.login()}>Login with Google</button>
        </div>,

        <p>Login to sync your saved articles to all your devices</p>
    ]
  }
}