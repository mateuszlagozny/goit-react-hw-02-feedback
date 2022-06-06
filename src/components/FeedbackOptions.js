import React, { Component } from "react"; 
import PropTypes from 'prop-types';


class FeedbackOptions extends Component {
    render() {
        const { options, onLeaveFeedback } = this.props;
        return (
            <ul>
                {options.map(option => (
                    <li key={option}>
                        <button
                            type="button"
                            value={option}
                            onclick= {() => onLeaveFeedback(option)}
                        >
                            {option}
                        </button> 
                        
                


                    </li>
                ))}
            </ul>
        )
            
        
    }
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad'])),
};

export default FeedbackOptions;