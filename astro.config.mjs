import { defineConfig } from 'astro/config'

import compress from 'astro-compress'

// https://astro.build/config
export default defineConfig({
  integrations: [
    compress({
      css: false,
      html: true, // note `true` is passed here
      js: false,
      img: false,
      svg: false
    })
  ]
})
