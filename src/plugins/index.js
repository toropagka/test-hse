import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import pinia from '../store'

export async function registerPlugins (app) {
  await loadFonts()
  await app
    .use(vuetify)
    .use(pinia)
}
