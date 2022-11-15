import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
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

const googleprovider = new GoogleAuthProvider();

googleprovider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleprovider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleprovider);

export const db = getFirestore();
export const createUseDocFromAuth = async (
  userAuth,
  additionalinformation = {}
) => {
  if (!userAuth) return;
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
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalinformation,
      });
    } catch (error) {
      console.log("err creating user", error.message);
    }
  }

  return userDocRef;

  //if user data exists

  //return userdocref
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
