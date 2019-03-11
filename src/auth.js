import loadHeader from './header-components.js';
import { auth } from './firebase.js';

loadHeader({ skipAuth: true });
const ui = new firebaseui.auth.AuthUI(auth);

ui.start('#firebaseui-auth-container', {
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],

    signInSuccessUrl: './',
    credentialHelper: firebaseui.auth.CredentialHelper.NONE
});