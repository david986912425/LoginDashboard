import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyALNgb0lcb1brPkURBlA5XFQwQpK_3iWq0",
    authDomain: "micro-vine-331416.firebaseapp.com",
    projectId: "micro-vine-331416",
    storageBucket: "micro-vine-331416.appspot.com",
    messagingSenderId: "928825559673",
    appId: "1:928825559673:web:de5c9f9809865d274722a8"
  };

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);

//const auth = firebase.auth();

//export { auth } ;
