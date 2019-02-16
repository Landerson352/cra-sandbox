import React, { Component } from 'react';
import { compose, withPropsOnChange } from 'recompose';
import cn from 'classnames';

const withClassNames = (persistentClassNames) => withPropsOnChange(['className'], ({ className }) => ({
  className: cn(persistentClassNames, className),
}));

const UK = {
  primaryButton: compose(
    withClassNames('uk-button uk-button-primary'),
  )((props) => (
    <button {...props} />
  )),
  button: compose(
    withClassNames('uk-button uk-button-default'),
  )((props) => (
    <button {...props} />
  )),
  card: compose(
    withClassNames('uk-card uk-card-default'),
  )((props) => (
    <div {...props} />
  )),
  cardBody: compose(
    withClassNames('uk-card-body'),
  )((props) => (
    <div {...props} />
  )),
  stackedForm: compose(
    withClassNames('uk-form-stacked'),
  )((props) => (
    <form {...props} />
  )),
  formControls: compose(
    withClassNames('uk-form-controls'),
  )((props) => (
    <div {...props} />
  )),
  formLabel: compose(
    withClassNames('uk-form-label'),
  )((props) => (
    <label {...props} />
  )),
  input: compose(
    withClassNames('uk-input'),
  )((props) => (
    <input {...props} />
  )),
  modal: compose(
  )((props) => (
    <div data-uk-modal {...props} />
  )),
  modalDialog: compose(
    withClassNames('uk-modal-dialog'),
  )((props) => (
    <div {...props} />
  )),
  modalBody: compose(
    withClassNames('uk-modal-body'),
  )((props) => (
    <div {...props} />
  )),
};

UK.primaryButton.defaultProps = {
  type: 'button',
};

UK.button.defaultProps = {
  type: 'button',
};

UK.input.defaultProps = {
  type: 'text',
};

class App extends Component {
  render() {
    return (
      <div>
        <UK.button className="uk-margin-small-right" uk-toggle="target: #modal-example">Open</UK.button>

        <UK.modal id="modal-example">
          <UK.modalDialog>
            <UK.modalBody>
              <h2 className="uk-modal-title">Headline</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p className="uk-text-right">
                <UK.button className="uk-modal-close">Cancel</UK.button>
                <UK.primaryButton className="uk-margin-small-left">Save</UK.primaryButton>
              </p>
            </UK.modalBody>
          </UK.modalDialog>
        </UK.modal>

        <div className="uk-background-muted uk-padding-large">
          <UK.card className="uk-width-large uk-margin-auto-left uk-margin-auto-right">
            <UK.cardBody>
              <h2>Log in</h2>

              <UK.stackedForm>

                <div className="uk-margin-bottom">
                  <UK.formLabel htmlFor="login_username">Username</UK.formLabel>
                  <UK.formControls>
                    <UK.input id="login_username" />
                  </UK.formControls>
                </div>

                <div className="uk-margin-bottom">
                  <UK.formLabel htmlFor="login_password">Password</UK.formLabel>
                  <UK.formControls>
                    <UK.input id="login_password" type="password" />
                  </UK.formControls>
                </div>

                <div className="uk-flex uk-flex-middle uk-flex-left uk-margin-large-top">
                  <UK.primaryButton>Log in</UK.primaryButton>
                  <a href="#" className="uk-text-muted uk-margin-left">Need to create an account?</a>
                </div>

              </UK.stackedForm>
              
            </UK.cardBody>
          </UK.card>
        </div>
      </div>
    );
  }
}

export default App;
