import React from 'react';

const getClassNames = (propertyValue, propertyName) => {
  if (!propertyValue) return [];

  if (typeof propertyValue !== 'string') {
    return [['uk', propertyName].join('-')];
  }

  return propertyValue.split(' ').map((value) => {
    return ['uk', propertyName, value].join('-');
  });
};

const ukElement = (props, ukComponent) => {
  const {
    align,
    animation,
    anim,
    background,
    bg,
    childWidth,
    cw,
    className,
    dark,
    flex,
    light,
    m,
    margin,
    p,
    padding,
    pos,
    position,
    text,
    uk = '',
    w,
    width,
    variant = 'default',
    ...restProps
  } = props;

  const componentClasses = ukComponent ? [
    ['uk', ukComponent].join('-'),
    ...variant.split(' ').map((value) => ['uk', ukComponent, value].join('-')),
  ] : [];

  const classes = [
    ...componentClasses,
    ...getClassNames(align, 'align'),
    ...getClassNames(animation || anim, 'animation'),
    ...getClassNames(background || bg, 'background'),
    ...getClassNames(childWidth || cw, 'child-width'),
    ...getClassNames(dark, 'dark'),
    ...getClassNames(flex, 'flex'),
    ...getClassNames(light, 'light'),
    ...getClassNames(margin || m, 'margin'),
    ...getClassNames(padding || p, 'padding'),
    ...getClassNames(position || pos, 'position'),
    ...getClassNames(text, 'text'),
    ...getClassNames(width || w, 'width'),
  ];

  const ukProps = Object.assign(...uk.split(' ').map(k => ({ [k]: true })));

  return {
    className: [...classes, className].join(' '),
    ...ukProps,
    ...restProps,
  }
};

const BoxComponent = (props, ref) => {
  const {
    as:Element = 'div',
    ukComponent,
    ...restProps
  } = props;

  return (
    <Element
      ref={ref}
      {...ukElement(restProps, ukComponent)}
    />
  );
};

const Flex = (props, ref) => (
  <Box ref={ref} ukComponent="flex" {...props} />
);

const Box = React.forwardRef(BoxComponent);
Box.Flex = React.forwardRef(Flex);

export default Box;
