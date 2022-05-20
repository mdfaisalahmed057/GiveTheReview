// Import the functions you need from the SDKs you need
 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSLGxUHEXN6OU42OQnA71tmSHJd55FnAs",
  authDomain: "firestore-e2410.firebaseapp.com",
  projectId: "firestore-e2410",
  storageBucket: "firestore-e2410.appspot.com",
  messagingSenderId: "29158634539",
  appId: "1:29158634539:web:f6f800ee2025b1f21aa66e",
  measurementId: "G-96LTTPBBF9"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
firebase. initializeApp(firebaseConfig);

  firebase.analytics();
  const db = firebase.firestore();
  const auth = firebase.auth();   
