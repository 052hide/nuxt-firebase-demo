import { storiesOf } from '@storybook/vue'
import { text, boolean, select } from '@storybook/addon-knobs/vue'
import { AtomButton, AtomLinkButton, AtomExternalLinkButton } from './index.ts'

storiesOf('Atoms/AtomButton', module)
  .add('Button', () => ({
    components: { AtomButton },
    template: `
    <AtomButton
      :theme="theme"
      :isOutline="isOutline"
      :isDisabled="isDisabled"
      :size="size"
      :rounded="rounded"
    >{{ slot }}</AtomButton>
  `,
    props: {
      slot: {
        default: text('slot', 'Button')
      },
      theme: {
        default: select('theme', ['primary', 'secondary'], 'primary')
      },
      isOutline: {
        default: boolean('isOutline', true)
      },
      isDisabled: {
        default: boolean('isDisabled', false)
      },
      size: {
        default: select('size', ['', 'sm', 'md', 'lg', 'full'], '')
      },
      rounded: {
        default: select('rounded', ['', 'sm', 'md', 'lg', 'full'], '')
      }
    }
  }))
  .add('LinkButton', () => ({
    components: { AtomLinkButton },
    template: `
    <AtomLinkButton
      :to="to"
      :theme="theme"
      :isOutline="isOutline"
      :isDisabled="isDisabled"
      :size="size"
      :rounded="rounded"
    >{{ slot }}</AtomLinkButton>
  `,
    props: {
      slot: {
        default: text('slot', 'Nuxt-Link')
      },
      to: {
        default: text('to', '/')
      },
      theme: {
        default: select('theme', ['primary', 'secondary'], 'primary')
      },
      isOutline: {
        default: boolean('isOutline', true)
      },
      isDisabled: {
        default: boolean('isDisabled', false)
      },
      size: {
        default: select('size', ['', 'sm', 'md', 'lg', 'full'], '')
      },
      rounded: {
        default: select('rounded', ['', 'sm', 'md', 'lg', 'full'], '')
      }
    }
  }))
  .add('ExternalLinkButton', () => ({
    components: { AtomExternalLinkButton },
    template: `
    <AtomExternalLinkButton
      :href="href"
      :theme="theme"
      :isOutline="isOutline"
      :isDisabled="isDisabled"
      :size="size"
      :rounded="rounded"
    >{{ slot }}</AtomExternalLinkButton>
  `,
    props: {
      slot: {
        default: text('slot', 'Link')
      },
      href: {
        default: text('href', '/')
      },
      theme: {
        default: select('theme', ['primary', 'secondary'], 'primary')
      },
      isOutline: {
        default: boolean('isOutline', true)
      },
      isDisabled: {
        default: boolean('isDisabled', false)
      },
      size: {
        default: select('size', ['', 'sm', 'md', 'lg', 'full'], '')
      },
      rounded: {
        default: select('rounded', ['', 'sm', 'md', 'lg', 'full'], '')
      }
    }
  }))
