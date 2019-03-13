import loadHeader from './header-components.js';
import loadGallery from './gallery-components.js';
import { auth, favoritesByUserRef } from '../src/firebase.js';
import { objectToArray } from '../src/object-to-array.js';

loadHeader();

auth.onAuthStateChanged(user => {
    const userFavoritesRef = favoritesByUserRef.child(user.uid);
    userFavoritesRef.on('value', snapshot => {
        const value = snapshot.val();
        console.log(value);
        const characters = objectToArray(value);
        loadGallery(characters);
    });

});