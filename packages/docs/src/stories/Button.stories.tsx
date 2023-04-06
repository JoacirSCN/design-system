import type { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonProps } from '@ignite-ui/react'

export default {
  title: 'Form/Button',
  component: Button,
  /* Se eu passar o args aqui, o Primary e secondary herdam essa prop */
  args: {
    children: 'Enviar',
  },
} as Meta<ButtonProps>

/* export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: 'Enviar',
  },
}
 */

export const Primary: StoryObj<ButtonProps> = {}

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
  },
}
