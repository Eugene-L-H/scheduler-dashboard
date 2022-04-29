import React, { Component } from 'react';
import Loading from './Loading';
import Panel from './Panel';

import classnames from 'classnames';

const data = [
  {
    id: 1,
    label: 'Total Interviews',
    value: 6,
  },
  {
    id: 2,
    label: 'Least Popular Time Slot',
    value: '1pm',
  },
  {
    id: 3,
    label: 'Most Popular Day',
    value: 'Wednesday',
  },
  {
    id: 4,
    label: 'Interviews Per Day',
    value: '2.3',
  },
];

const selectPanel = (id) => {
  this.setState({
   focused: id
  });
 }

class Dashboard extends Component {
  state = { loading: false, focused: null };
  render() {
    const dashboardClasses = classnames('dashboard', {
      'dashboard--focused': this.state.focused,
    });

    if (this.state.loading) {
      return <Loading />;
    }

    const panels = (
      this.state.focused
        ? data.filter((panel) => this.state.focused === panel.id)
        : data
    ).map((panel) => (
      <Panel
        key={panel.id}
        id={panel.id}
        label={panel.label}
        value={panel.value}
        onClick={this.setState(selectPanel(panel.id))
      />
    ));
    return <main className={dashboardClasses}>{panels}</main>;
  }
}

// The same but without classes:
// function Dashboard(props) {
//   const dashboardClasses = classnames("dashboard");
//   return <main className={dashboardClasses} />;
// }

export default Dashboard;
