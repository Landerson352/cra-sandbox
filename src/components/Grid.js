import React from 'react';

import Box from './Box';

const Grid = (props, ref) => (
  <Box ref={ref} ukComponent="grid" {...props} />
);

export default React.forwardRef(Grid);
