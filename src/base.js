import firebase from "firebase/app";
import "firebase/firestore";

export const FirebaseConfig = {
  apiKey: "AIzaSyApV7OL0VafuBJj7EB5k5tLNyNkHY19ASI",
  authDomain: "twig-the-code.firebaseapp.com",
  databaseURL: "https://twig-the-code.firebaseio.com",
  projectId: "twig-the-code",
};

export const app = firebase.initializeApp(FirebaseConfig);
export const db = app.firestore()
db.settings({
  timestampsInSnapshots: true
});
