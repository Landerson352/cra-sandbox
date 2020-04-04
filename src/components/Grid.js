import React from 'react';

import Box from './Box';

const Grid = (props, ref) => (
  <Box
    ref={ref}
    uk="grid"
    ukComponent="grid"
    {...props}
  />
);

export default React.forwardRef(Grid);
