import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import react from '@vitejs/plugin-react'



const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx", 
    "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@storybook/addon-a11y', 

  ],
  framework: {
    name: "@storybook/react-vite",
    options: {
      builder: {
        viteConfigPath: './vite.config.ts'
      }
    },
  },
  docs: {
    //👇 See the table below for the list of supported options
    autodocs: 'tag',
    defaultName: 'Documentation',
  },
  async viteFinal(config, { configType }) {
    if (configType === 'PRODUCTION') {
      config.base = '/design-system/'
    }
    return mergeConfig(config, {
      resolve: {
        alias: { foo: 'bar' },
      },
    });
  },

};
export default config;
