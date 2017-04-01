const firebase = require("firebase");

var config = {
    apiKey: "AIzaSyB9TmL9Aflud92q8D7mh82YuzvilC2Ekyo",
    authDomain: "netforce-81489.firebaseapp.com",
    databaseURL: "https://netforce-81489.firebaseio.com",
    storageBucket: "netforce-81489.appspot.com",
    messagingSenderId: "42658269280"
};
firebase.initializeApp(config);

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

module.exports.firebase = firebase.database();

module.exports.write=function(model,vals,cb){
  firebase.database().ref(model).push().set(vals).then(cb);
}

module.exports.writeUserData = function (userId, name, email, imageUrl,cb) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  }).then(cb);
}

module.exports.fetchData=function(func){
  return func
}
