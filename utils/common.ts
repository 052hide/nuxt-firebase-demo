import { DocumentData } from '@firebase/firestore-types'
import firebase from 'firebase'

export function getCreateTimestamp(): DocumentData {
  const dt = firebase.firestore.FieldValue.serverTimestamp()
  const res: DocumentData = {
    createdAt: dt,
    updatedAt: dt
  }
  return res
}

export function getupdateTimestamp(): DocumentData {
  const dt = firebase.firestore.FieldValue.serverTimestamp()
  const res: DocumentData = {
    updatedAt: dt
  }
  return res
}
