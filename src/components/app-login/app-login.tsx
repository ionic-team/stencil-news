import { Component, State } from '@stencil/core';

declare var firebase: any;

@Component({
  tag: 'app-login',
  styleUrl: 'app-login.scss'
})
export class AppLogin {

  @State() messaging: any;
  @State() permission: any;

  ionViewDidLoad() {
    setTimeout(() => {
      this.messaging = firebase.messaging();
    }, 300);
  }

  requestPerm() {
    // request permission
    this.messaging.requestPermission()
      .then(() => {
        console.log('Notification permission granted.');
        this.permission = true;

        // get token
        /*this.messaging.getToken()
          .then((currentToken) => {
            if (currentToken) {
              console.log(currentToken);

              // trigger a notification
              fetch('https://us-central1-stencilnews.cloudfunctions.net/notify', {
                method: 'post',
                body: JSON.stringify({
                  token: currentToken
                })
              }).then((data) => {
                console.log(data);
              }).catch((err) => {
                console.error(err);
              })

            } else {
              // Show permission request.
              console.log('No Instance ID token available. Request permission to generate one.');
            }
          })
          .catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
          });*/

      })
      .catch((err) => {
        this.permission = false;
        console.log('Unable to get permission to notify.', err);
      });
  }

  render() {
    if (this.permission === false || this.permission === undefined) {
      return (
        <div class='notifyBlock'>
          <p>Get notified on the latest top stories</p>
          <button onClick={() => this.requestPerm()} class='requestButton'>Get Notifications</button>
        </div>
      )
    } else {
      return (
        <div class='notifyBlock'>
          <p>Stop getting notifications</p>
          <button>Unsubscribe</button>
        </div>
      )
    }
  }
}