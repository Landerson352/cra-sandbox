import React from 'react';
import omit from 'lodash/omit';
import { withPropsOnChange } from 'recompose';
import cn from 'classnames';

const withClassNames = (persistentClassNames) => withPropsOnChange(['className'], ({ className }) => ({
  className: cn(persistentClassNames, className),
}));

const renderElement = (defaultTag) => (props) => React.createElement(props.tag || defaultTag, {
  // TODO: move into withPropsOnChange HoC
  type: (props.tag || defaultTag) === 'button' ? 'button' : ((props.tag || defaultTag) === 'input' ? 'text' : null),

  ...omit(props, ['modal-close', 'toggle', 'tag']),
  className: cn(props.className, { 'uk-modal-close': props['modal-close'] }),
  'data-uk-toggle': props['data-uk-toggle'] || props.toggle,
});

export const PrimaryButton = withClassNames('uk-button uk-button-primary')(renderElement('button'));

export const Button = withClassNames('uk-button uk-button-default')(renderElement('button'));

export const Card = withClassNames('uk-card uk-card-default')(renderElement('div'));

Card.Body = withClassNames('uk-card-body')(renderElement('div'));

export const StackedForm = withClassNames('uk-form-stacked')(renderElement('form'));

export const FormControls = withClassNames('uk-form-controls')(renderElement('div'));

export const FormLabel = withClassNames('uk-form-label')(renderElement('label'));

export const Input = withClassNames('uk-input')(renderElement('input'));

export const Modal = renderElement('div');
Modal.defaultProps = {
  'data-uk-modal': true,
};

Modal.Dialog = withClassNames('uk-modal-dialog')(renderElement('div'));

Modal.Body = withClassNames('uk-modal-body')(renderElement('div'));

Modal.Title = withClassNames('uk-modal-title')(renderElement('h2'));

export default {
  PrimaryButton,
  Button,
  Card,
  StackedForm,
  FormControls,
  FormLabel,
  Input,
  Modal,
};
