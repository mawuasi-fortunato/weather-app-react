import React from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';

import './Loading.styles.css';

const Loading = () => {
  return (
    <div className='app__loading'>
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor = '#c0efff'
        color = '#e15b64'
      />
    </div>
  );
}

export default Loading;