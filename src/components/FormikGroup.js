import React, { Fragment } from 'react';

const nbsp = <Fragment>&nbsp;</Fragment>;

const FormikGroup = ({ id, touched, errors, handleBlur, handleChange, values, children }) => (
  <div className="mb-sm">
    {children({
      label: { htmlFor: id },
      input: { id, value: values[id], onChange: handleChange, onBlur: handleBlur },
    })}
    <div className="text-danger text-small">{ touched[id] && errors[id] || nbsp }</div>
  </div>
);

export default FormikGroup;
