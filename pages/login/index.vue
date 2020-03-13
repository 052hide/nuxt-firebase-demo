<template>
  <div class="login-page">
    <div>
      <div v-if="getAuthUserInfo()">
        <button @click="logout()">
          ログアウト
        </button>
      </div>
      <div v-else class="loginform__content">
        <input v-model="email" type="text" placeholder="Email" />
        <input v-model="password" placeholder="Password" type="password" />
        <div class="loginform__buttons">
          <button @click="login()">
            ログイン
          </button>
          <button @click="register()">
            ユーザー登録
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import auth from '~/plugins/firebase/auth'
import { authStore } from '~/store'

@Component
export default class LoginForm extends Vue {
  email: string = ''
  password: string = ''

  getAuthUserInfo() {
    return authStore.getAuthUserInfo
  }

  async login(): Promise<void> {
    let userCredential: firebase.auth.UserCredential | null = null
    try {
      userCredential = await auth.signInWithEmailAndPassword(
        this.email,
        this.password
      )
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
    if (userCredential && userCredential.user) {
      await authStore.login(userCredential.user)
    } else {
      await authStore.logout()
    }
  }

  async register(): Promise<void> {
    try {
      await auth.createUserWithEmailAndPassword(this.email, this.password)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  }

  async logout(): Promise<void> {
    try {
      await auth.signOut()
      await authStore.logout()
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  }
}
</script>
