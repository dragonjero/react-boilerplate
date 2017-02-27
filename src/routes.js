import React from 'react';
import { Route } from 'react-router';

import App from './containers/App';
import HelloWorld from './components/Guidelines';

export default (
  <Route path="/" component={App}>
    <Route path="/help/ui" component={HelloWorld} />
  </Route>
);
