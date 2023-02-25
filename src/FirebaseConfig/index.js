// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhQovbMRu_PNNe_HjnCQFXum3-WlMQSVE",
  authDomain: "workplace-get-right-job.firebaseapp.com",
  projectId: "workplace-get-right-job",
  storageBucket: "workplace-get-right-job.appspot.com",
  messagingSenderId: "886063174899",
  appId: "1:886063174899:web:f2f306a87f2bd5af9d1386"
};
// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db=getFirestore(app);
export const storage=getStorage(app);