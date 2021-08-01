import { useState } from 'react';
import Layout from './components/layout/layout';
import { Route, Switch, Redirect } from 'react-router-dom';
import AddAmount from './components/pages/AddAmount';
import Dashboard from './components/pages/Dashboard';
import WithdrawAmount from './components/pages/WithdrawAmount';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/AddAmount' exact>
          <AddAmount></AddAmount>
        </Route>
        <Route path='/' exact>
          <Dashboard></Dashboard>
        </Route>
        <Route path='/withdrawAmount' exact>
          <WithdrawAmount></WithdrawAmount>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
