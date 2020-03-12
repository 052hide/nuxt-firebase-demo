<template>
  <button
    :class="[
      {
        'is-outline': isOutline,
        'is-disabled': isDisabled
      },
      theme,
      sizeClass,
      roundedClass
    ]"
    class="atom-link-button"
    :disabled="isDisabled"
    @click="buttonClick()"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class index extends Vue {
  @Prop() theme!: 'primary' | 'secondary'
  @Prop() isOutline?: boolean
  @Prop() isDisabled?: boolean
  @Prop() size!: 'sm' | 'md' | 'lg' | 'full'
  @Prop() rounded?: 'sm' | 'md' | 'full'

  buttonClick() {
    this.$emit('buttonClick')
  }

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
