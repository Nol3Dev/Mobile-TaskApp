import firebase from "firebase"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyCcVbHK9CyohrOrL0j3ZuuDrSnokpCBPh4",
    authDomain: "taskapp-2df6d.firebaseapp.com",
    projectId: "taskapp-2df6d",
    storageBucket: "taskapp-2df6d.appspot.com",
    messagingSenderId: "457612046950",
    appId: "1:457612046950:web:d5015639d93a0aedddb3a7"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = firebase.firestore()
  export default database