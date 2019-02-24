import React, { Component, Fragment } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import FormikGroup from './components/FormikGroup';
import { PrimaryButton, Card, StackedForm, FormLabel, FormControls, Input } from './components/UK';

const loginFormOptions = {
  initialValues: { loginUsername: 'landerson352' },
  onSubmit: (values, { setSubmitting }) => {
    // simulate an ajax delay
    setTimeout(() => {
      setSubmitting(false);
    }, 500);
  },
  validationSchema: Yup.object().shape({
    loginUsername: Yup.string().required('Required'),
    loginPassword: Yup.string().required('Required'),
  }),
};

class App extends Component {
  render() {
    return (
      <div className="bg-primary p-lg flex flex-middle flex-center" data-uk-height-viewport="expand: true">
        <Card className="w-lg bg-muted">
          <Card.Body>
            <h2>Log in</h2>

            <Formik {...loginFormOptions}>
              {(props) => (
                <StackedForm onSubmit={props.handleSubmit}>

                  <FormikGroup id="loginUsername" {...props}>
                    {({ label, input }) => (
                      <Fragment>
                        <FormLabel {...label}>Username</FormLabel>
                        <FormControls>
                          <Input {...input} />
                        </FormControls>
                      </Fragment>
                    )}
                  </FormikGroup>

                  <FormikGroup id="loginPassword" {...props}>
                    {({ label, input }) => (
                      <Fragment>
                        <FormLabel {...label}>Password</FormLabel>
                        <FormControls>
                          <Input {...input} type="password" />
                        </FormControls>
                      </Fragment>
                    )}
                  </FormikGroup>

                  <div className="flex flex-middle flex-left mt-lg">
                    <PrimaryButton type="submit" disabled={props.isSubmitting}>Log in</PrimaryButton>
                    <a href="#" className="text-muted ml">Need to create an account?</a>
                  </div>

                </StackedForm>
              )}
            </Formik>

          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default App;
