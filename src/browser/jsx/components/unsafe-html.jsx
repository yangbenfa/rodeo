import React from 'react';
import ReactDOM from 'react-dom';
import commonReact from '../services/common-react';

/**
 * @class UnsafeHTML
 * @extends ReactComponent
 * @property props
 */
export default React.createClass({
  displayName: 'UnsafeHTML',
  propTypes: {
    id: React.PropTypes.string.isRequired,
    src: React.PropTypes.string.isRequired
  },
  componentDidMount: function () {
    const el = ReactDOM.findDOMNode(this);

    if (el) {
      el.setAttribute('src', this.props.src);
    }
  },
  shouldComponentUpdate(nextProps, nextState) {
    return commonReact.shouldComponentUpdate(this, nextProps, nextState);
  },
  render: function () {
    const className = commonReact.getClassNameList(this);

    return <iframe className={className.join(' ')} frameBorder="0" id={this.props.id} sandbox="allow-scripts"></iframe>;
  }
});
