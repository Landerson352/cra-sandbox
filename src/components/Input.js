import React from 'react';

import Box from './Box';

const Input = (props, ref) => (
  <Box
    ref={ref}
    as="input"
    ukComponent="input"
    type="text"
    {...props}
  />
);

export default React.forwardRef(Input);
