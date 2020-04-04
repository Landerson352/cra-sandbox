import React from 'react';
import cn from 'classnames';

const Card = (props) => {
  const { className, variant = 'default', body, ...restProps } = props;

  const classes = ['uk-card', `uk-card-${variant}`];
  if (body) classes.push('uk-card-body');

  return (
    <div className={cn(...classes, className)} {...restProps} />
  );
};

export default Card;
