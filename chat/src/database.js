import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDrzCBuBaSNifRQCFd82lz-wbR5zw49WuY",
  authDomain: "chat-app-e9962.firebaseapp.com",
  databaseURL: "https://chat-app-e9962.firebaseio.com",
  projectId: "chat-app-e9962",
  storageBucket: "chat-app-e9962.appspot.com",
  messagingSenderId: "330944025361",
  appId: "1:330944025361:web:fba591485352403a5072b0",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
