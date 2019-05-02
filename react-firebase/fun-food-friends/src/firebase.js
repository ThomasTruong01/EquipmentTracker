// Initialize Firebase
import firebase from "firebase";
const config = {
	apiKey: "AIzaSyDk59GA3btf4EH81lo6j0rGzsGw13h278E",
	authDomain: "fun-food-friends-5cbac.firebaseapp.com",
	databaseURL: "https://fun-food-friends-5cbac.firebaseio.com",
	projectId: "fun-food-friends-5cbac",
	storageBucket: "fun-food-friends-5cbac.appspot.com",
	messagingSenderId: "530164296451"
};
firebase.initializeApp(config);
export default firebase;
