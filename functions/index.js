const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.notify = functions.https.onRequest((request, response) => {
  /*cors(res, res, () => {
    console.log(req.body);
    pushNotification(req).then(() => {
      console.log('notification pushed', req.body.token);
    }).catch((err) => {
      console.error(err);
    })
  })*/
  pushNotification(request.body.token).then(() => {
    console.log('notification pushed', request.body.token);
  }).catch((err) => {
    console.error(err);
  });
});

function pushNotification(req) {
  console.log(req);
  console.log('this should be my token', req);
  const payload = {
    notification: {
      title: 'Firebase Notification',
      body: 'This is a test function',
      sound: 'default',
      badge: '1'
    }
  };

  return admin.messaging().sendToDevice(req, payload);
}