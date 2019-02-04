import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <button className="uk-button uk-button-default uk-margin-small-right" type="button" uk-toggle="target: #modal-example">Open</button>

        <div id="modal-example" data-uk-modal>
          <div className="uk-modal-dialog uk-modal-body">
            <h2 className="uk-modal-title">Headline</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p className="uk-text-right">
              <button className="uk-button uk-button-default uk-modal-close" type="button">Cancel</button>
              <button className="uk-button uk-button-primary uk-margin-small-left" type="button">Save</button>
            </p>
          </div>
        </div>

        <div className="uk-background-muted uk-padding-large">
          <div className="uk-width-large uk-card uk-card-default uk-card-body uk-margin-auto-left uk-margin-auto-right">
            <h2>Log in</h2>

            <form className="uk-form-stacked">

              <div className="uk-margin-bottom">
                <label className="uk-form-label" htmlFor="login_username">Username</label>
                <div className="uk-form-controls">
                  <input className="uk-input" id="login_username" type="text" />
                </div>
              </div>

              <div className="uk-margin-bottom">
                <label className="uk-form-label" htmlFor="login_password">Password</label>
                <div className="uk-form-controls">
                  <input className="uk-input" id="login_password" type="password" />
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
  }
}

export default App;
