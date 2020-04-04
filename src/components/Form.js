import React from 'react';

import Box from './Box';
import Input from './Input';

const FormComponent = (props, ref) => (
  <Box ref={ref} as="form" ukComponent="form" {...props} />
);

const Label = (props, ref) => (
  <Box ref={ref} as="label" ukComponent="form-label" {...props} />
);

const Controls = (props, ref) => (
  <Box ref={ref} ukComponent="form-controls" {...props} />
);

const Group = (props, ref) => {
  const { label, ...restProps } = props;

  return (
    <Box margin="bottom">
      <Form.Label htmlFor={props.id}>{label}</Form.Label>
      <Form.Controls>
        <Input ref={ref} {...restProps} />
      </Form.Controls>
    </Box>
  );
};

const Form = React.forwardRef(FormComponent);
Form.Label = React.forwardRef(Label);
Form.Controls = React.forwardRef(Controls);
Form.Group = React.forwardRef(Group);

export default Form;
