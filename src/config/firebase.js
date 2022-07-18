import firebase from "firebase";

const firebaseConfig = {
  
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const storage = firebaseApp.storage();

const auth = firebaseApp.auth();

const firestore = firebaseApp.firestore();

export {auth, db, storage, firestore};

