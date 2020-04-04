import React from 'react';
import cn from 'classnames';

const Button = (props) => {
  const { className, variant = 'default', ...restProps } = props;

  const classes = ['uk-button', `uk-button-${variant}`];

  return (
    <button type="button" className={cn(...classes, className)} {...restProps} />
  );
};

export default Button;
