<template>
  <a
    :href="href"
    :class="[
      {
        'is-outline': isOutline,
        'is-disabled': isDisabled
      },
      theme,
      sizeClass,
      rounded
    ]"
    class="atom-external-link-button"
    target="_blank"
    rel="noopener"
    ><slot
  /></a>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class index extends Vue {
  @Prop() href!: string
  @Prop() theme!: 'primary' | 'secondary'
  @Prop() isDisabled?: boolean
  @Prop() isOutline!: boolean
  @Prop() size?: 'sm' | 'md' | 'lg' | 'full'
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
