import Firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

if (!Firebase.apps.length) {
  Firebase.initializeApp({
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID
  })
}

export default (context, inject) => {
  const $fb = {
    app: Firebase.app,
    firestore: Firebase.firestore,
    auth: Firebase.auth
  }
  inject("fb", $fb)
}
