import type { Meta } from '@storybook/react';
import { Alerts } from './alerts';

const Story: Meta<typeof Alerts> = {
  component: Alerts,
  title: 'Alerts',
};
export default Story;

export const Primary = {
  args: {},
};