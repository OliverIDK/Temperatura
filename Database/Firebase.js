// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
//import '@react-native-firebase/database';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyD_DLTk8cgGBNV3OXr_158QJ_1V0UNYCpU",
    authDomain: "proyecto-react-arduino.firebaseapp.com",
    databaseURL: "https://proyecto-react-arduino-default-rtdb.firebaseio.com",
    projectId: "proyecto-react-arduino",
    storageBucket: "proyecto-react-arduino.appspot.com",
    messagingSenderId: "1050889433736",
    appId: "1:1050889433736:web:2706cbd9118cef820b653d",
    measurementId: "G-CBFCWC71FM"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;