import React, { Component } from 'react';

import { Button, PrimaryButton, Card, Modal, StackedForm, FormLabel, FormControls, Input } from './components/UK';

class App extends Component {
  render() {
    return (
      <div>
        <Button toggle="target: #modal-example">Open</Button>

        <Modal id="modal-example">
          <Modal.Dialog>
            <Modal.Body>
              <Modal.Title>Headline</Modal.Title>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p className="text-right">
                <Button modal-close>Cancel</Button>
                <PrimaryButton className="ml-sm">Save</PrimaryButton>
              </p>
            </Modal.Body>
          </Modal.Dialog>
        </Modal>

        <div className="bg-muted p-lg">
          <Card className="w-lg mx-auto">
            <Card.Body>
              <h2>Log in</h2>

              <StackedForm>

                <div className="mb">
                  <FormLabel htmlFor="login_username">Username</FormLabel>
                  <FormControls>
                    <Input id="login_username" />
                  </FormControls>
                </div>

                <div className="mb">
                  <FormLabel htmlFor="login_password">Password</FormLabel>
                  <FormControls>
                    <Input id="login_password" type="password" />
                  </FormControls>
                </div>

                <div className="flex flex-middle flex-left mt-lg">
                  <PrimaryButton>Log in</PrimaryButton>
                  <a href="#" className="text-muted ml">Need to create an account?</a>
                </div>

              </StackedForm>

            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default App;
