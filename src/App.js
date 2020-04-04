import React from 'react';

import Box from './components/Box';
import Button from './components/Button';
import Card from './components/Card';
import Form from './components/Form';
import Modal, { useModal } from './components/Modal';
import SortableDemo from './components/SortableDemo';

const App = () => {
  const [modal, modalTrigger] = useModal('example-modal');

  return (
    <div>
      <SortableDemo />
      <Button className="uk-margin-small-right" {...modalTrigger}>Open</Button>

      <Modal title="Headline" {...modal}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <Box.Flex flex="right">
          <Button className="uk-modal-close">Cancel</Button>
          <Button variant="primary" m="small-left">Save</Button>
        </Box.Flex>
      </Modal>

      {/* Login form using custom components */}
      <Box bg="muted" p="large">
        <Card variant="default body" m="auto-left auto-right" w="large">
          <h2>Log in</h2>
          <Form variant="stacked">
            <Form.Group label="Username" id="login_username_1" />
            <Form.Group label="Password" id="login_password_1" type="password" />
            <Box.Flex flex="middle left" m="large-top">
              <Button variant="primary">Log in</Button>
              <Box as="a" href="#" text="muted" m="left">Need to create an account?</Box>
            </Box.Flex>
          </Form>
        </Card>
      </Box>

      {/* Login form using plain HTML */}
      <div className="uk-background-muted uk-padding-large">
        <div className="uk-width-large uk-card uk-card-default uk-card-body uk-margin-auto-left uk-margin-auto-right">
          <h2>Log in</h2>

          <form className="uk-form-stacked">

            <div className="uk-margin-bottom">
              <label className="uk-form-label" htmlFor="login_username_2">Username</label>
              <div className="uk-form-controls">
                <input className="uk-input" id="login_username_2" type="text" />
              </div>
            </div>

            <div className="uk-margin-bottom">
              <label className="uk-form-label" htmlFor="login_password_2">Password</label>
              <div className="uk-form-controls">
                <input className="uk-input" id="login_password_2" type="password" />
              </div>
            </div>

            <div className="uk-flex uk-flex-middle uk-flex-left uk-margin-large-top">
              <button className="uk-button uk-button-primary" type="button">Log in</button>
              <a href="#" className="uk-text-muted uk-margin-left">Need to create an account?</a>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
