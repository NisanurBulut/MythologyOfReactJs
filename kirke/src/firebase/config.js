import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyDtHznlfM_rwpC21ux4eds_Wa71sd_m0",
  authDomain: "kirke-50ae4.firebaseapp.com",
  databaseURL: "https://kirke-50ae4.firebaseio.com",
  projectId: "kirke-50ae4",
  storageBucket: "kirke-50ae4.appspot.com",
  messagingSenderId: "115750670779",
  appId: "1:115750670779:web:71b49f881348b83de7349e"
};
// Initialize Firebase
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };