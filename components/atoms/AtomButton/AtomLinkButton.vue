<template>
  <nuxt-link
    :to="to"
    :class="[
      {
        'is-outline': isOutline,
        'is-disabled': isDisabled
      },
      theme,
      sizeClass,
      rounded
    ]"
    class="atom-link-button"
    ><slot
  /></nuxt-link>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class index extends Vue {
  @Prop() to!: string
  @Prop() theme!: 'primary' | 'secondary'
  @Prop() isDisabled?: boolean
  @Prop() isOutline?: boolean
  @Prop() size!: 'sm' | 'md' | 'lg' | 'full'
  @Prop() rounded?: 'sm' | 'md' | 'full'

  get sizeClass() {
    return `size--${this.size}`
  }

  get roundedClass() {
    return this.rounded ? `rounded--${this.rounded}` : ''
  }
}
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
