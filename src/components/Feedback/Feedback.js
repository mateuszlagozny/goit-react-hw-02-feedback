import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Feedback extends Component {
  render() {
    const { options, handleLeaveFeedback } = this.props;
    return (
      <ul>
        {options.map(option => (
          <li key={option}>
            <button
              type="button"
              value={option}
              onClick={() => handleLeaveFeedback(option)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

Feedback.propTypes = {
  handleLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad'])),
};

export default Feedback;
