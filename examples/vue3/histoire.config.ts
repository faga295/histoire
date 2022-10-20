import { defineConfig, getDefaultConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'

export default defineConfig({
  // outDir: 'hdist',
  plugins: [
    HstVue(),
  ],
  backgroundPresets: [
    ...(getDefaultConfig().backgroundPresets || []),
    {
      label: 'Custom gray',
      color: '#bbb',
      contrastColor: '#fff',
    },
  ],
})
