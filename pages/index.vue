<template>
  <div class="top-page">
    <h1>Top</h1>
    <ul>
      <li>
        <atom-button :is-disabled="true" theme="primary" rounded="full"
          >aaa</atom-button
        >
      </li>
      <li>
        <atom-link-button :is-disabled="true" to="/" theme="primary" size="lg"
          >bbb</atom-link-button
        >
      </li>
      <li>
        <atom-external-link-button href="/" theme="primary" size="full"
          >ccc</atom-external-link-button
        >
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import {
  AtomButton,
  AtomLinkButton,
  AtomExternalLinkButton
} from '~/components/atoms/AtomButton'

@Component({
  components: {
    AtomButton,
    AtomLinkButton,
    AtomExternalLinkButton
  }
})
export default class index extends Vue {}
</script>

<style lang="scss" scoped>
li {
  margin-bottom: 20px;
}
</style>
