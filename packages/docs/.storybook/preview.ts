// .storybook/preview.ts
import { Preview } from '@storybook/react';
import { themes } from '@storybook/theming'


const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#000',
        },
        {
          name: 'white',
          value: '#fff',
        },
      ],
    },
    docs: {
      theme: themes.dark
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: 'centered',
  }
};

export default preview;