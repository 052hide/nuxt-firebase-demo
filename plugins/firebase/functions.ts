import firebase from './firebase'
import 'firebase/functions'

const functions = firebase.functions('asia-northeast1')
if (process.env.NODE_ENV !== 'production') {
  functions.useFunctionsEmulator('http://localhost:5000')
}

export default functions
