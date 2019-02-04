const getSortableEventProps = (e) => {
  const target = e.detail[1];
  return {
    index: Array.prototype.slice.call( e.target.children ).indexOf( target ),
    target,
  };
};

export default getSortableEventProps;
