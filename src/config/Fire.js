import firebase from "firebase";

const config = {
  apiKey: "AIzaSyB0ZHDsEz-HU1wNZvJVsr2xRK9M8_8TlGs",
  authDomain: "login-ebd95.firebaseapp.com",
  databaseURL: "https://login-ebd95.firebaseio.com",
  projectId: "login-ebd95",
  storageBucket: "login-ebd95.appspot.com",
  messagingSenderId: "120253218385",
  appId: "1:120253218385:web:761ab84be622edb1"
};
// Initialize Firebase
const fire = firebase.initializeApp(config);

export default fire;
