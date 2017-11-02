const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const express = require('express');
const engines = require('consolidate');

const firebaseApp = firebase.initializeApp(
    functions.config().firebase
);

function getvalue() {
    const ref = firebaseApp.database().ref();
    return ref.once('value').then(snap => snap.val());
}

const app = express();
app.engine('hbs', engines.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');

app.get('/', (request, response) => {
    response.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    getvalue().then(value => {
        response.render('index', { value });
    });
});

app.get('/value.json', (request, response) => {
    response.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    getvalue().then(value => {
        response.json(value);
    });
});

exports.app = functions.https.onRequest(app);
