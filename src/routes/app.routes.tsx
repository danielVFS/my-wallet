import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import CreateCoin from '../pages/CreateCoin';
import RemoveOrUpdateCoin from '../pages/RemoveOrUpdateCoin';

import Layout from "../components/Layout";

const AppRoutes: React.FC = () => (
  <Layout>
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/create-coin" exact component={CreateCoin} />
      <Route path="/remove-or-update-coin" exact component={RemoveOrUpdateCoin} />
    </Switch>
  </Layout>
);

export default AppRoutes;
