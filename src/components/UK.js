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
  'data-uk-toggle': props.toggle,
});

const PrimaryButton = withClassNames('uk-button uk-button-primary')(renderElement('button'));

const Button = withClassNames('uk-button uk-button-default')(renderElement('button'));

const Card = withClassNames('uk-card uk-card-default')(renderElement('div'));

const CardBody = withClassNames('uk-card-body')(renderElement('div'));

const StackedForm = withClassNames('uk-form-stacked')(renderElement('form'));

const FormControls = withClassNames('uk-form-controls')(renderElement('div'));

const FormLabel = withClassNames('uk-form-label')(renderElement('label'));

const Input = withClassNames('uk-input')(renderElement('input'));

const Modal = renderElement('div');
Modal.defaultProps = {
  'data-uk-modal': true,
};

const ModalDialog = withClassNames('uk-modal-dialog')(renderElement('div'));

const ModalBody = withClassNames('uk-modal-body')(renderElement('div'));

const ModalTitle = withClassNames('uk-modal-title')(renderElement('h2'));

export default {
  PrimaryButton,
  Button,
  Card,
  CardBody,
  StackedForm,
  FormControls,
  FormLabel,
  Input,
  Modal,
  ModalDialog,
  ModalBody,
  ModalTitle,
};
