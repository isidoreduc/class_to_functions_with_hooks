import React from 'react';

const Loader = props => {
  return (
    <div>
      <div className='ui active dimmer'>
        <div className='ui text loader'>{props.loaderText} </div>
      </div>
      <p />
    </div>
  );
};

// a default props in case we forget to add props in parent
Loader.defaultProps = {
  loaderText: 'Loading...'
};

export default Loader;
