// import fb from 'firebase'
import firebase from './firebase'
import '@firebase/auth'

const auth = firebase.auth()

// auth.setPersistence(fb.auth.Auth.Persistence.LOCAL)

export default auth
