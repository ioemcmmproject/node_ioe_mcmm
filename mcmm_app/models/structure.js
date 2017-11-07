const firebaseApp = firebase.initializeApp(
    functions.config().firebase
);

function getvalue() {
    const neighborhood = firebaseApp.database().ref();
    const architect = firebaseApp.database().ref();
    const decade = firebaseApp.database().ref();
    //return ref.once('value').then(snap => snap.val());
}  

// var structure = 
// here is where we should put the if statement that uses the key that we need to decode