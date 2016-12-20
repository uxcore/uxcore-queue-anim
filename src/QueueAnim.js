/**
 * QueueAnim Component for uxcore
 * @author eternalsky
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */
const React = require('react');
class QueueAnim extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>uxcore-queue-anim component</div>
    );
  }
}

QueueAnim.defaultProps = {
};


// http://facebook.github.io/react/docs/reusable-components.html
QueueAnim.propTypes = {
};

QueueAnim.displayName = 'QueueAnim';

module.exports = QueueAnim;
