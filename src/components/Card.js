import React from 'react';

import Box from './Box';

const Card = (props, ref) => (
  <Box
    ref={ref}
    ukComponent="card"
    {...props}
  />
);

export default React.forwardRef(Card);
