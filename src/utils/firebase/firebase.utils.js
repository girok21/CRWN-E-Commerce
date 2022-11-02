import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAfKjkRiTKEisEECTaRCMeN1l5iJXXU7OY",
  authDomain: "crwn-e-commerce-128f5.firebaseapp.com",
  projectId: "crwn-e-commerce-128f5",
  storageBucket: "crwn-e-commerce-128f5.appspot.com",
  messagingSenderId: "581829650867",
  appId: "1:581829650867:web:e3b97149805d06a628c3c6"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt : "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  if(!userSnapshot.exists()) {//if user data does not exists
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    
    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error){
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
}