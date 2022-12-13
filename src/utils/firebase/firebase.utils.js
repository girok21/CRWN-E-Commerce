import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,

} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
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

export const addCollectionAndDocuments = async (
  collectionKey, 
  objectsToAdd,
  field
  ) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log('done');
}

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories')
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot)=>{
    const {title, items} = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
}

export const createUserDocumentFromAuth = async (userAuth, displayName) => {
  if(!userAuth) return;
  
  if(!userAuth.displayName)
    userAuth.displayName = displayName;
  
  const userDocRef = doc(db, 'users', userAuth.uid);
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

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password)
    return;
    return await createUserWithEmailAndPassword(auth, email, password);
}

export const loginUserWithEmailAndPassword = async(email, password) =>{
  if(!email || !password)
    return;
  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async() => await signOut(auth);

export const onAuthStateChangedListner =  (callback) => 
   onAuthStateChanged(auth, callback)