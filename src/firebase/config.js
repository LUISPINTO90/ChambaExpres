import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_CHAMBA_EXPRES_PUBLIC_API_KEY,
  authDomain: import.meta.env.VITE_CHAMBA_EXPRES_PUBLIC_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_CHAMBA_EXPRES_PUBLIC_PROJECT_ID,
  storageBucket: import.meta.env.VITE_CHAMBA_EXPRES_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_CHAMBA_EXPRES_PUBLIC_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_CHAMBA_EXPRES_PUBLIC_APP_ID,
  measurementId: import.meta.env.VITE_CHAMBA_EXPRES_PUBLIC_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { app, auth, googleProvider };
