import UIkit from 'uikit';

const _default = (message) => UIkit.notification(message, { pos: 'top-right', status: 'default' });
const primary = (message) => UIkit.notification(message, { pos: 'top-right', status: 'primary' });
const warning = (message) => UIkit.notification(message, { pos: 'top-right', status: 'warning' });
const danger = (message) => UIkit.notification(message, { pos: 'top-right', status: 'danger' });

export default {
  default: _default,
  primary,
  warning,
  danger,
};
