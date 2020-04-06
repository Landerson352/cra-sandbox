import React from 'react';
import { uniqueId } from 'lodash';

import Box from './Box';

export const useModal = (explicitId) => {
  const id = React.useRef(explicitId || `modal-${uniqueId()}`).current;

  return [
    { id },
    { uk: `toggle=target:#${id}` },
  ];
};

const ModalComponent = (props, ref) => {
  const { children, title, ...restProps } = props;

  return (
    <Box ref={ref} uk="modal" {...restProps}>
      <Box modal="dialog body">
        <Box as="h2" modal="title">{title}</Box>
        {children}
      </Box>
    </Box>
  );
};

const Modal = React.forwardRef(ModalComponent);
Modal.useModal = useModal;

export default Modal;
