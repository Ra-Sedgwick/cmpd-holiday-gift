// @flow
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './header';
import Sidebar from './sidebar';
import Home from './home';
import HouseholdIndex from './household/householdIndex.js';
import NewHousehold from './household/new-household';
import { AffiliationList, Affiliation } from './affiliations';
import UsersList from './users/UsersList';
import PendingUsersList from './users/PendingUsersList';

const ContentTitle = (): React.Node =>
  <section className="content-header">
    <h1>Header</h1>
  </section>;

export default class Dashboard extends React.Component<{location: mixed}> {
  // TODO: Return AdminLTE base template and register sub-routes here
  render(): React.Node {
    return (
      <div className="wrapper">
        <Header />
        <Sidebar />
        <div className="content-wrapper">
          <ContentTitle />
          <section className="content">
            <Switch location={this.props.location}>
              <Route exact path="/dashboard" component={Home} />
              {/* TODO: Finish routes */}
              <Route exact path="/dashboard/household" component={HouseholdIndex} />
              <Route exact path="/dashboard/household/create" component={NewHousehold} />
              {/* <Route exact path="/dashboard/household/edit/:id" component={Home} /> */}
              <Route exact path="/dashboard/affiliation" component={AffiliationList} />
              <Route exact path="/dashboard/affiliation/:affiliation_id" component={Affiliation} />
              <Route exact path="/dashboard/user" component={UsersList} />
              <Route exact path="/dashboard/user/pending" component={PendingUsersList} />
            </Switch>
          </section>
        </div>
      </div>
    );
  }
}
