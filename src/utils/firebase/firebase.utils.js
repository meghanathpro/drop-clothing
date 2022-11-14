import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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

export const db = getFirestore();
export const createUseDocFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  //if user data doesnot exist
  // create set the document with the data from userAuth in mycollection

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log("err creating user", error.message);
    }
  }

  return userDocRef;

  //if user data exists

  //return userdocref
};
