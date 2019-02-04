import React from 'react';
import times from 'lodash/times';

import getSortableEventProps from '../utilities/getSortableEventProps';
import notify from '../utilities/notify';

class Sortable extends React.Component {
  constructor(props) {
    super(props);
    this.grid = React.createRef();
  }
  componentDidMount() {
    this.grid.current.addEventListener('moved', (e) => {
      const { index, target } = getSortableEventProps(e);
      notify.primary(`Item ${target.dataset.key} dropped at position ${index}.`);
    });
  }
  render() {
    return (
      <ul ref={this.grid}
          data-uk-grid
          data-uk-sortable="handle: .uk-card"
          className="uk-grid-small uk-child-width-1-3"
      >
        {times(12, (i) => (
          <li key={i} data-key={i}>
            <div className="uk-card uk-card-default uk-card-body">Item {i}</div>
          </li>
        ))}
      </ul>
    );
  }
}

export default Sortable;
