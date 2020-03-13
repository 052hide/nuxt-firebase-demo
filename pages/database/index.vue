<template>
  <div class="top-page">
    <template v-if="names">
      {{ names }}
    </template>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { findAll as findAllUser } from '~/models/queries/user'

@Component
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
