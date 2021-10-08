const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const express = require('express');
const cors = require('cors');

const router = express();
// Automatically allow cross-origin requests
router.use(cors({ origin: true }));

router.get('/user/:id', async(req, res) => {///id del usuario
    const user = await
    admin.firestore().collection('users').doc(req.params.id).get();
    res.send(user);
});

router.get('/users', async(req, res) => {//trae todos los users
    const users = await admin.firestore().collection('users').get();
    var lista = [];
    users.docs.forEach(doc => {
    lista.push({ id: doc.id, data: doc.data() });
    });
    res.send(lista);
});

router.post('/user', async(req, res) => {// post para crear
    const user = await admin.firestore().collection('users')
    .add(req.body);
    res.send(user);
    });
    router.put('/user/:id', async(req, res) => {// put para actualizar
    const user = await
    admin.firestore().collection('users').doc(req.params.id)
    .update(req.body);
    res.send(user);
    });
    router.delete('/user/:id', async(req, res) => {// delete para borrar
    const user = await
    admin.firestore().collection('users').doc(req.params.id).delete();
    res.send(user);
});

    // Expose Express API as a single Cloud Function:
exports.test = functions.https.onRequest(router);// estas son las funciones a importar