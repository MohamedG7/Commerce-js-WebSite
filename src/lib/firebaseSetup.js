import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBtbYmXrTaz1q1KXz8MB1bOuRBCsZtnN_U",
  authDomain: "skype-clone-113c0.firebaseapp.com",
  projectId: "skype-clone-113c0",
  storageBucket: "skype-clone-113c0.appspot.com",
  messagingSenderId: "1068164912182",
  appId: "1:1068164912182:web:26e503e6b0cbf79fa9b497",
  measurementId: "G-T57SF08LPS"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

