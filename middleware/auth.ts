import { Context } from '@nuxt/types'
import firebase from 'firebase'
import { authStore } from '~/store'

const auth = ({
  route,
  redirect
}: {
  route: Context['route']
  redirect: Context['redirect']
}) => {
  return firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authStore.login(user)
    } else if (route.name !== 'login') {
      redirect('/login')
    }
  })
}

export default auth
