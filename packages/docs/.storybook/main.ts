/* * @type { import('@storybook/react-vite').StorybookConfig } */
import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig  = {
  stories: ["../src/pages/**/*.stories.mdx", "../src/stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(config, { configType }) {
    if (configType === 'PRODUCTION') {
      config.base = '/design-system/'
    }
    return config
  },
};
export default config;