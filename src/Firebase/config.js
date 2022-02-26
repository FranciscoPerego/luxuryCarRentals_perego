// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVpNz0EKnensgAcgenYaZIRsj4XfEpibQ",
  authDomain: "luxury-car-rentals-perego.firebaseapp.com",
  projectId: "luxury-car-rentals-perego",
  storageBucket: "luxury-car-rentals-perego.appspot.com",
  messagingSenderId: "47966191812",
  appId: "1:47966191812:web:567b978dfdf55a0bc94991"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)