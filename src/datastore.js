import firebase from 'firebase';
var config = {
    apiKey: '<AIzaSyC11XkhD6Aj-hA_bvND_MUuDZh-oT_2GZs>',
    authDomain: '<first-project-fed84.firebaseapp.com>',
    databaseURL: '<https://first-project-fed84.firebaseio.com>',
    storageBucket: '<first-project-fed84.appspot.com>',
    projectId: '<first-project-fed84>'
};
firebase.initializeApp(config);

const ourDB = firebase.database();
const ourAuth = firebase.auth();

export function addTextbook(textbookName, textbookPrice, link) {
    ourDB.ref('Textbooks/').push({
          textbookName, textbookPrice, link
    });
}

export function removeTextbook(textbookID) {
    ourDB.ref('Textbooks/' + textbookID).remove();
}

export function fetchTextbooks(callback) {
    ourDB.ref('Textbooks/').on('value', (snapshot) => {
        const allTextbooks = snapshot.val();
        callback(allTextbooks);
    });
}

export function updateName(id, newName) {
    ourDB.ref('Textbooks/'+ id).on('value', (snapshot) => {
        const updates = { dogName: newName };
        const whereToUpdate = ourDB.ref('Dogs/' + id);
        whereToUpdate.update(updates);
    });
}