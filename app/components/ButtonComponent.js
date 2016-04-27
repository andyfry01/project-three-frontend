import React from 'react';
import {Link} from 'react-router';

const ButtonComponent = React.createClass({

  render: function() {

    return (
      <div>
        <Link to={this.props.link}>
        <button style={this.props.style}>{this.props.buttonText}</button>
        </Link>
      </div>
    );
  }
});

export default ButtonComponent;
