import React from 'react';
import * as firebase from 'firebase';  

AgarrarDatos = () => {
    var docRef = firebase.firestore().collection("mediciones").doc("uEeACIDdgXFsY6uac7lb");
        docRef.get().then(function(doc) {
            if (doc.exists) {
                console.log("Document data:", doc.get("CO"));
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        })
}
GetDocumentsMediciones = () => {
    var docRef = firebase.firestore().collection("mediciones").where("CO", "==", 27)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
}
// esto agarra todos los documentos en los que 
GetDocumentsMediciones = () => {
    var docRef = firebase.firestore().collection("mediciones").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    });
    
    console.log(docRef);
}

//Este es el get de todos los documentos de mediciones
