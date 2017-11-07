function getvalue() {
        const ref = firebaseApp.database().ref();
        return ref.once('value').then(snap => snap.val());
    } 

var structure = 