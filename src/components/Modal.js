import React from 'react';
import cn from 'classnames';

export const useModal = (id) => {
  return [
    { id },
    { ['uk-toggle']: `target: #${id}` },
  ];
};

export const ModalTitle = () => (
  <h2 className="uk-modal-title">Headline</h2>
);

const Modal = (props) => {
  const { children, ...restProps } = props;

  return (
    <div data-uk-modal {...restProps}>
      <div className="uk-modal-dialog uk-modal-body">
        {children}
      </div>
    </div>
  );
};

export default Modal;
