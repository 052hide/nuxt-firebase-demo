import firebase from 'firebase'
import { FirebaseOptions } from '@firebase/app-types'

// eslint-disable-next-line
let firebaseApp: firebase.app.App
if (firebase.apps.length === 0) {
  const config: FirebaseOptions = {
    apiKey: process.env.FB_APY_KEY,
    authDomain: process.env.FB_AUTH_DOMAIN,
    databaseURL: process.env.FB_DATABASE_URL,
    projectId: process.env.FB_PROJECT_ID,
    storageBucket: process.env.FB_STORAGE_BUCKET,
    messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
    appId: process.env.FB_APP_ID,
    measurementId: process.env.FB_MEASUREMENT_ID
  }
  firebaseApp = firebase.initializeApp(config)
} else {
  firebaseApp = firebase.app()
}

export default firebaseApp
