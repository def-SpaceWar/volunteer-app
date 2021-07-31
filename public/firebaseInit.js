import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDGr-1ElZ0AxKoS_E4chaFgViLD20XqEpQ",
    authDomain: "volunteerup-68a41.firebaseapp.com",
    projectId: "volunteerup-68a41",
    storageBucket: "volunteerup-68a41.appspot.com",
    messagingSenderId: "926757058895",
    appId: "1:926757058895:web:f208efc42ec5b674d8ad3a",
    measurementId: "G-N2H75XB0ZL"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

export default firebase;
