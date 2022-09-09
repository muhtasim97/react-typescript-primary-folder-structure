import { storiesOf } from '@storybook/react';
import Text from './Text';
storiesOf('Text', module)
  .add('red', () => <Text color='red' />)
  .add('blue', () => <Text color='blue' />);
