import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';


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
    },
  },
  docs: {
    autodocs: 'tag',
    defaultName: 'Documentation',
  },
  core: {
    builder: '@storybook/builder-vite'
  },
  async viteFinal(config, { configType }) {
    if (configType === 'PRODUCTION') {
      config.base = '/design-system'
    }
    return await config
  },

};
export default config;
