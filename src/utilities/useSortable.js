import React from 'react';

const getSortableEventProps = (e) => {
  const target = e.detail[1];
  return {
    index: Array.prototype.slice.call( e.target.children ).indexOf( target ),
    target,
  };
};

const useSortable = ({ handle, onMove }) => {
  const ref = React.useRef();

  React.useEffect(() => {
    const handleMoved = (e) => onMove(getSortableEventProps(e));
    const element = ref.current;

    element.addEventListener('moved', handleMoved);
    return () => {
      element.removeEventListener('moved', handleMoved);
    };
  }, [ref, onMove]);

  return {
    ref,
    'uk-grid': true,
    'uk-sortable': `handle: ${handle}`,
  };
};

export default useSortable;
