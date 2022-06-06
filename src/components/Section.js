import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Section extends Component {
  render() {
    return (
      <section>
        <div>
          <h2>{this.props.title}</h2>
          {this.props.children}
        </div>
      </section>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;