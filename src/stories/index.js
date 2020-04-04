import React from 'react';
import UIkit from 'uikit';

import { storiesOf } from '@storybook/react';

import '../theme.less';

import SortableDemo from '../components/SortableDemo';

storiesOf('Button', module)
  .add('Default', () => <button className="uk-button uk-button-default">Default</button>)
  .add('Primary', () => <button className="uk-button uk-button-primary">Primary</button>);

storiesOf('Sortable', module)
  .add('Default', () => <SortableDemo />);
