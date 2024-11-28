import { initializeApp } from 'firebase/app';
import { getAuth, EmailAuthProvider } from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { auth as firebaseuiAuth } from 'firebaseui';

const firebaseConfig = {
    apiKey: 'AIzaSyC0vEo4laNl6GZW8YeNh7CD9sWvsNCEAzA',
    authDomain: 'react-animal-training-app.firebaseapp.com',
    projectId: 'react-animal-training-app',
    storageBucket: 'react-animal-training-app.firebasestorage.app',
    messagingSenderId: '516421218114',
    appId: '1:516421218114:web:c5530de40aac96e0b922db',
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const ui = new firebaseuiAuth.AuthUI(auth);
const db = getFirestore(firebaseApp);

export function startFirebaseAuth(elementId) {
    const uiConfig = {
        signInOptions: [
            {
                provider: EmailAuthProvider.PROVIDER_ID,
                signInMethod: EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
                requireDisplayName: false,
            },
        ],
    };
    ui.start(elementId, uiConfig);
}

export async function getExercises() {
    const exercisesCol = collection(db, 'exercises');
    const exercisesSnapshot = await getDocs(exercisesCol);
    const exerciseList = exercisesSnapshot.docs.map((exercise) =>
        exercise.data()
    );
    return exerciseList;
}

export { db, firebaseApp, auth };
