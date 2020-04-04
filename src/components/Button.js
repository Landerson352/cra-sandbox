import React from 'react';

import Box from './Box';

const Button = (props, ref) => (
  <Box
    ref={ref}
    as="button"
    ukComponent="button"
    type="button"
    {...props}
  />
);

export default React.forwardRef(Button);
