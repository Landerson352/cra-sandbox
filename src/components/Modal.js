import React from 'react';

export const useModal = (id) => {
  return [
    { id },
    { 'uk-toggle': `target: #${id}` },
  ];
};

const Modal = (props, ref) => {
  const { children, title, ...restProps } = props;

  return (
    <div ref={ref} data-uk-modal {...restProps}>
      <div className="uk-modal-dialog uk-modal-body">
        <h2 className="uk-modal-title">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default React.forwardRef(Modal);
