import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updatePassword,
} from 'firebase/auth';
import { auth } from './firebaseConfig';

export const implementCreateUserWithEmailAndPassword = async (
    email,
    password
) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const implementSignInWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

export const implementSignOut = () => {
    return auth.signOut();
};

export const implementPasswordChange = (password) => {
    return updatePassword(auth.currentUser, password);
};
