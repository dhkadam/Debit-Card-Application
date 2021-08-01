import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Debit Card Transaction</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to='/AddAmount' activeClassName={classes.active}>
            Add Amount
            </NavLink>
          </li>
          <li>
            <NavLink to='/WithdrawAmount' activeClassName={classes.active}>
            Withdraw amount
            </NavLink>
          </li>
          <li>
            <NavLink to='/' activeClassName={classes.active}>
            Dashbord
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
