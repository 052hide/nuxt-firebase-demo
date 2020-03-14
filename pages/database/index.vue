<template>
  <div class="top-page">
    <div class="menu">
      <h3>メニュー</h3>
      <ul>
        <li><nuxt-link to="/">>Top</nuxt-link></li>
        <li><nuxt-link to="/login">>Login</nuxt-link></li>
      </ul>
    </div>
    <div v-if="names">
      {{ names }}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { findAll as findAllUser } from '~/models/queries/user'

@Component({
  middleware: 'auth'
})
export default class index extends Vue {
  names: any[] = []

  async mounted() {
    const usersRef = await findAllUser()
    usersRef.forEach((userRef) => {
      const data = userRef.data()
      this.names.push(data.name)
    })
  }
}
</script>

<style lang="scss" scoped>
.menu {
  margin: 2rem 0;
  padding-bottom: 2rem;
  border-bottom: 1px solid #333;
  h3 {
    margin-bottom: 10px;
  }
  a {
    text-decoration: underline;
  }
}
</style>
