import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";

import { app } from "app/firebase";

const auth = getAuth(app);

export const signInWithGmail = async () => {
  const gmailProvider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, gmailProvider);
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential?.accessToken;
  const { user } = result;

  return { user, token };
};

export const signInWithFacebook = async () => {
  const facebookProvider = new FacebookAuthProvider();

  return signInWithPopup(auth, facebookProvider);
};
