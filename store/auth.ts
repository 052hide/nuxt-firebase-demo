import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import firebase from 'firebase'

@Module({
  name: 'auth',
  namespaced: true,
  stateFactory: true
})
export default class AuthModule extends VuexModule {
  private authUserInfo: firebase.UserInfo | null = null

  @Mutation
  private SET_USER_INFO(authUserInfo: firebase.UserInfo | null) {
    this.authUserInfo = authUserInfo
  }

  @Action({ rawError: true })
  public login(authUser: firebase.User) {
    const authUserInfo: firebase.UserInfo = {
      uid: authUser.uid,
      displayName: authUser.displayName,
      email: authUser.email,
      phoneNumber: authUser.phoneNumber,
      photoURL: authUser.photoURL,
      providerId: authUser.providerId
    }
    this.SET_USER_INFO(authUserInfo)
  }

  @Action({ rawError: true })
  public logout() {
    this.SET_USER_INFO(null)
  }

  public get getAuthUserInfo() {
    return this.authUserInfo
  }
}
