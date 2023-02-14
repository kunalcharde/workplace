// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVARPHQrgfrhpDbS3AzceOdJ1-nT5nbPk",
  authDomain: "workplace-get-the-right-job.firebaseapp.com",
  projectId: "workplace-get-the-right-job",
  storageBucket: "workplace-get-the-right-job.appspot.com",
  messagingSenderId: "55546357197",
  appId: "1:55546357197:web:71ccc3286c435ff1a21084"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);