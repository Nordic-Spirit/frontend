import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from '../views';
import { NotFound } from '../views';

const IndexRouter: React.FC = (): JSX.Element => {
  return (
    <Router>
      <Suspense fallback={<h1>Loading</h1>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default IndexRouter;
