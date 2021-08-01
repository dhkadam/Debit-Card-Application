import React from 'react';

import classes from './Layout.module.css';
import MainNavigation from './MainNavigation';


const Layout = (props: any) => {
    return (
      <React.Fragment>
        <MainNavigation />
        <main className={classes.main}>{props.children}</main>
      </React.Fragment>
    );
  };
  
  export default Layout;