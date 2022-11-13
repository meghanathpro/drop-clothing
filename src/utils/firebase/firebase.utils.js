import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBnyZav-8s2c_kbqcb7WyLYWzIpmL6BKQo",
  authDomain: "drop-clothing-db.firebaseapp.com",
  projectId: "drop-clothing-db",
  storageBucket: "drop-clothing-db.appspot.com",
  messagingSenderId: "797221760777",
  appId: "1:797221760777:web:9ea0eca1827302694aadd8",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
