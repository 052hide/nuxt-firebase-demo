import Vue from 'vue'

import { configure, addDecorator } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'

addDecorator(withKnobs)

Vue.component('nuxt-link', {
  props:   ['to'],
  methods: {
    log() {
      action('link target')(this.to)
    },
  },
  template: '<a :href="to" @click.prevent="log()"><slot>NuxtLink</slot></a>',
})

const req = require.context('../components', true, /.stor(y|ies).js?$/)
const loadStories = () => {
  req.keys().forEach(file => req(file))
}

configure(loadStories, module)
