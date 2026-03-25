import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LoanApplication from './pages/LoanApplication';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
import Repayment from './pages/Repayment';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/loan-application" component={LoanApplication} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/admin" component={Admin} />
        <Route path="/repayment" component={Repayment} />
        <Route path="/" exact component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default App;
