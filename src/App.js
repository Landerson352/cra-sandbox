import React, { Component } from 'react';

import UK from './components/UK';

class App extends Component {
  render() {
    return (
      <div>
        <UK.Button toggle="target: #modal-example">Open</UK.Button>

        <UK.Modal id="modal-example">
          <UK.ModalDialog>
            <UK.ModalBody>
              <UK.ModalTitle>Headline</UK.ModalTitle>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p className="text-right">
                <UK.Button modal-close>Cancel</UK.Button>
                <UK.PrimaryButton className="ml-3">Save</UK.PrimaryButton>
              </p>
            </UK.ModalBody>
          </UK.ModalDialog>
        </UK.Modal>

        <div className="bg-almost-white p-8">
          <UK.Card className="w-lg mx-auto">
            <UK.CardBody>
              <h2>Log in</h2>

              <UK.StackedForm>

                <div className="mb-4">
                  <UK.FormLabel htmlFor="login_username">Username</UK.FormLabel>
                  <UK.FormControls>
                    <UK.Input id="login_username" />
                  </UK.FormControls>
                </div>

                <div className="mb-4">
                  <UK.FormLabel htmlFor="login_password">Password</UK.FormLabel>
                  <UK.FormControls>
                    <UK.Input id="login_password" type="password" />
                  </UK.FormControls>
                </div>

                <div className="flex flex-middle flex-left mt-8">
                  <UK.PrimaryButton>Log in</UK.PrimaryButton>
                  <a href="#" className="text-muted ml-4">Need to create an account?</a>
                </div>

              </UK.StackedForm>

            </UK.CardBody>
          </UK.Card>
        </div>
      </div>
    );
  }
}

export default App;
