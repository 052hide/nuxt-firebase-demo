<template>
  <div class="top-page">
    <ul>
      <li><nuxt-link to="login">Login</nuxt-link></li>
      <li><nuxt-link to="database">Database</nuxt-link></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class index extends Vue {}
</script>
