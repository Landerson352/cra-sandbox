import React from 'react';
import UIkit from 'uikit';

import { storiesOf } from '@storybook/react';

import '../index.less';

import Sortable from '../components/Sortable';

storiesOf('Button', module)
  .add('Default', () => <button className="uk-button uk-button-default">Default</button>)
  .add('Primary', () => <button className="uk-button uk-button-primary">Primary</button>);

storiesOf('Sortable', module)
  .add('Default', () => <Sortable />);
