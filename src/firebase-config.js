import { initializeApp } from "firebase/app";
import { getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5gQXuy8_Rkoi5RPFQfmRVZrgUej6ToXc",
  authDomain: "react-tut-f674e.firebaseapp.com",
  projectId: "react-tut-f674e",
  storageBucket: "react-tut-f674e.appspot.com",
  messagingSenderId: "479481454262",
  appId: "1:479481454262:web:6c10b690a3f918fe841017",
  measurementId: "G-HZDQ5F8ZMV"
};

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);