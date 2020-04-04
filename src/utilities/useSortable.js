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

    ref.current.addEventListener('moved', handleMoved);
    return () => {
      ref.current.removeEventListener('moved', handleMoved);
    };
  }, [ref, onMove]);

  return {
    ref,
    ['data-uk-grid']: true,
    ['data-uk-sortable']: `handle: ${handle}`,
  };
};

export default useSortable;
