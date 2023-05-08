import React from 'react';
import gif from '../../images/loading.gif'

const Loader = () => {
  return (
<>
    <div>
      <img className='loader' src={gif} alt="" />
    </div>
    </>
  );
}

export default Loader;
