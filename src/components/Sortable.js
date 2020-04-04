import React from 'react';
import times from 'lodash/times';

import notify from '../utilities/notify';
import useSortable from '../utilities/useSortable';
import Card from './Card';

const Sortable = () => {
  const sortable = useSortable({
    handle: '.uk-card',
    onMove: ({ index, target }) => {
      notify.primary(`Item ${target.dataset.key} dropped at position ${index}.`)
    },
  });

  return (
    <ul {...sortable} className="uk-grid-small uk-child-width-1-3">
      {times(12, (i) => (
        <li key={i} data-key={i}>
          <Card body>Item {i}</Card>
        </li>
      ))}
    </ul>
  );
};

export default Sortable;
