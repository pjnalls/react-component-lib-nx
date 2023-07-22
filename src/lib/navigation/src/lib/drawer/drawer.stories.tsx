import type { Meta } from '@storybook/react';
import { Drawer } from './drawer';

const Story: Meta<typeof Drawer> = {
  component: Drawer,
  title: 'Drawer',
};
export default Story;

export const Primary = {
  args: {},
};