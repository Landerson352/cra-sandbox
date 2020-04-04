import React from 'react';

import './CustomComponent.less';
import Box from './Box';

const CustomComponent = () => (
  <Box
    bg="primary"
    light
    m="large"
    p="large"
    className="custom-component"
  >
    CustomComponent
  </Box>
);

export default CustomComponent;
