import React from 'react';

import Box from './components/Box';
import Button from './components/Button';
import Card from './components/Card';
import Form from './components/Form';
import Modal from './components/Modal';
import SortableDemo from './components/SortableDemo';

const App = () => {
  const [modal, modalTrigger] = Modal.useModal();

  return (
    <div>
      <Box p="large" bg="muted">
        <h2>Sortable demo</h2>
        <SortableDemo />
      </Box>

      <Box p="large">
        <Button m="small-right"{...modalTrigger}>Open example modal</Button>
      </Box>

      <Modal title="Headline" {...modal}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <Box.Flex flex="right">
          <Button uk="modal-close">Cancel</Button>
          <Button variant="primary" m="small-left">Save</Button>
        </Box.Flex>
      </Modal>

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

    </div>
  );
};

export default App;
