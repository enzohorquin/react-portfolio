import React, { useState, useEffect, Fragment } from 'react';
import DskTpNav from './DskTpNav';
import MobileNav from './MobileNav';

const Nav = () => {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [mobileView, setMobileView] = useState(true);
  const updateDimensions = () => {
    window.innerWidth > 500 ? setMobileView(false): setMobileView(true);
    return;
  }
  const handleClick = () => {
    setMobileToggle(!mobileToggle);
}
  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
  }, [])

  return (
    <Fragment>
      <DskTpNav toggleBtn={handleClick}/>
          <MobileNav toggleBtn={handleClick}
                     mobileToggle={mobileToggle} 
                     mobileView={mobileView}/>
    </Fragment>
  )

}
export default Nav;