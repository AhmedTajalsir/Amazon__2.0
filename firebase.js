import firebase from "firebase"

 const firebaseConfig = {
  apiKey: "AIzaSyAOljBjUSMO6d_cmxGekcgLesfuGhvCs-o",
  authDomain: "amaz-2-a9b01.firebaseapp.com",
  projectId: "amaz-2-a9b01",
  storageBucket: "amaz-2-a9b01.appspot.com",
  messagingSenderId: "597859504540",
  appId: "1:597859504540:web:93a9ffbcb545aa81adf859",
  measurementId: "G-WX0J330XXC"
};

   const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
   const db = app.firestore();

  export default db

// import firebase from 'firebase/app'
// import 'firebase/firestore'

// const firebaseConfig = {
//   apiKey: "AIzaSyAOljBjUSMO6d_cmxGekcgLesfuGhvCs-o",
//   authDomain: "amaz-2-a9b01.firebaseapp.com",
//   projectId: "amaz-2-a9b01",
//   storageBucket: "amaz-2-a9b01.appspot.com",
//   messagingSenderId: "597859504540",
//   appId: "1:597859504540:web:93a9ffbcb545aa81adf859",
//   measurementId: "G-WX0J330XXC"
// };

// if(!firebase.getApps.length){
//   firebase.initializeApp(firebaseConfig)
// }

// export default firebase