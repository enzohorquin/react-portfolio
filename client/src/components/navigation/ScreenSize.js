import React, { Fragment } from 'react';
import windowSize from 'react-window-size';
 
const ScreenSize = ({ windowWidth }) => {
  return (
    <Fragment>
      {windowWidth}
    </Fragment>
  )
}
 
export default windowSize(ScreenSize);