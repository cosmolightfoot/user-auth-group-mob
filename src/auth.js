import loadHeader from './header-components.js';
import { auth, usersRef } from './firebase.js';

loadHeader({ skipAuth: true });
const ui = new firebaseui.auth.AuthUI(auth);



ui.start('#firebaseui-auth-container', {
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],

    signInSuccessUrl: './' + window.location.hash,
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    callbacks: {
        signInSuccesWithAuthResult(authResult) {
            const user = authResult.user;
            usersRef.child(user.uid)
                .set({
                    uid: user.uid,
                    displayName: user.displayName,
                    photoURL: user.photoURL
                });
            return true;
        }
    }

});