import React from 'react';
import { Link } from 'react-router';

// import CSSTransitionGroup from 'react-addons-css-transition-group';

const ProjectNode = React.createClass({
  render() {
    // es6 syntax to create 3 variables that pull their data from
    // this.props
    // const { post, idx, comments } = this.props;
    const { name, projId, status, costToDate, estimateToComplete } = this.props.project;
    return (
      <tr>
        <td>{name}</td>
        <td>{projId}</td>
        <td>{status}</td>
        <td>{costToDate}</td>
        <td>{estimateToComplete}</td>
      </tr>
    );
  }
});

export default ProjectNode;
