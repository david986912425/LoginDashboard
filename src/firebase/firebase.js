import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyC0FDC4UD2w-hX9pVHov8JJ87RwvZXApZU",
  authDomain: "birthday-6d6c3.firebaseapp.com",
  projectId: "birthday-6d6c3",
  storageBucket: "birthday-6d6c3.appspot.com",
  messagingSenderId: "60067924205",
  appId: "1:60067924205:web:0ab7c1b3be07a086b824e4"
};

// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);
export default app;

//const auth = firebase.auth();

//export { auth } ;
