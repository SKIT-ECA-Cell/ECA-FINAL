var app_firebase = {};
(function () {
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDFU3gkgCbI-dmDDzl3KWB0nWBFvw4tJpM",
    authDomain: "eca-website-d16ad.firebaseapp.com",
    projectId: "eca-website-d16ad",
    storageBucket: "eca-website-d16ad.appspot.com",
    messagingSenderId: "1027559134132",
    appId: "1:1027559134132:web:abde37bdca67a6bb33d8e1",
    measurementId: "G-21R9MJWW7N"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  app_firebase = firebase;
})();


(function() {
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    var uiConfig = {
        callbacks: {
            signInSuccessWithAuthResult: function(authResult, redirectUrl) {
                // User successfully signed in.
                // Return type determines whether we continue the redirect automatically
                // or whether we leave that to developer to handle.
                return true;
            },
            uiShown: function() {
                // The widget is rendered.
                // Hide the loader.
                document.getElementById("loader").style.display = "none";
            }
        },
        // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
        signInFlow: "popup",
        signInSuccessUrl: "../events.html",
        signInOptions: [
            // Leave the lines as is for the providers you want to offer your users.
            firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ],
        // // Terms of service url.
        // tosUrl: "Terms of Service",
        // // Privacy policy url.
        // privacyPolicyUrl: "Privacy Policy"
    };
    ui.start("#firebaseui-auth-container", uiConfig);
})();
