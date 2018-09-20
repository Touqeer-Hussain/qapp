import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
      const config = {
        apiKey: "AIzaSyDRY2xQ7QScrFfmLxerqJNoZ-Zzhcu6pHY",
        authDomain: "bbsu-352.firebaseapp.com",
        databaseURL: "https://bbsu-352.firebaseio.com",
        projectId: "bbsu-352",
        storageBucket: "bbsu-352.appspot.com",
        messagingSenderId: "385127890233"
      };

      
      
export default firebase.initializeApp(config)