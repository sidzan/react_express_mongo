const firebase = require("firebase");

var config = {
    apiKey: "AIzaSyB9TmL9Aflud92q8D7mh82YuzvilC2Ekyo",
    authDomain: "netforce-81489.firebaseapp.com",
    databaseURL: "https://netforce-81489.firebaseio.com",
    storageBucket: "netforce-81489.appspot.com",
    messagingSenderId: "42658269280"
};
firebase.initializeApp(config);

// TO ADD new User

module.exports.firebase = firebase.database();

module.exports.write=function(id,model,vals,cb){
  firebase.database().ref(model+'/'+id).set(vals).then(cb);
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
