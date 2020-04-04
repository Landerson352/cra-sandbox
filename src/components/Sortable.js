import React from 'react';
import times from 'lodash/times';

import notify from '../utilities/notify';
import useSortable from '../utilities/useSortable';
import Card from './Card';
import Grid from './Grid';

const Sortable = () => {
  const sortable = useSortable({
    handle: '.uk-card',
    onMove: ({ index, target }) => {
      notify.primary(`Item ${target.dataset.key} dropped at position ${index}.`)
    },
  });

  return (
    <Grid as="ul" variant="small" childWidth="1-3" {...sortable}>
      {times(12, (i) => (
        <li key={i} data-key={i}>
          <Card variant="default body">Item {i}</Card>
        </li>
      ))}
    </Grid>
  );
};

export default Sortable;
