import { getApp, getApps, initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { firebaseAppConfig } from '../config/firebase-app.config';

let app: FirebaseApp;

if (!getApps().length) {
  app = initializeApp(firebaseAppConfig);
}

export { app };
export const auth = getAuth(getApp());
