/** @type { import('@storybook/react-vite').StorybookConfig } */
const config  = {
  stories: ["../src/pages/**/*.stories.mdx", "../src/stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
  ],
  framework: "@storybook/react-vite",
  core: {
    builder: '@storybook/builder-vite'
  },
  async viteFinal(config, {configType}) {
    if(configType === 'PRODUCTION') {
      return config.base = '/design-system/'
    }
    return config
  }
  ,
};
export default config;
