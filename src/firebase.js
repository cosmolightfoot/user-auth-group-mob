const config = {
    apiKey: "AIzaSyBa3U-OUQ36TVqINC99IqnwXMM5l3loeUI",
    authDomain: "user-auth-group-mob.firebaseapp.com",
    databaseURL: "https://user-auth-group-mob.firebaseio.com",
    projectId: "user-auth-group-mob"
 

};
firebase.initializeApp(config);
export const auth = firebase.auth();
const db = firebase.database();
export const favoritesByUserRef = db.ref('favorites-by-user');
