import React, { Component, PropTypes } from 'react';

import css from './Section.css';

export default class Section extends Component {
  render() {

    const {
      className,
      children,
      context,
      size,
      ...remainingProps,
    } = this.props;

    const classNames = [
      css.root,
      context ? css[context] : null,
      css ? css[css] : null,
      size ? css[size] : null,
      className,
    ].join(' ');

    return (

      <div
        className={classNames}
        {...remainingProps}
      >
        {children}
      </div>

    )

  }
};

Section.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  context: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary'
  ]),
  size: PropTypes.oneOf([
    'small',
    'medium',
    'large',
    'huge',
  ]),
};
