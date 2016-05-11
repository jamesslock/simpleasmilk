import React, { Component, PropTypes } from 'react';

import css from './Hero.css';

export default class Hero extends Component {
  render() {

    const {
      className,
      children,
      size,
      image,
      position,
      varient,
      ...remainingProps,
    } = this.props;

    const classNames = [
      css.root,
      css ? css[css] : null,
      size ? css[size] : null,
      varient ? css[varient] : null,
      className,
    ].join(' ');

    var backgroundImage = {
      backgroundImage: 'url(' + image + ')',
      backgroundPosition: position,
    }

    return (

      <div
        className={classNames}
        style={backgroundImage}
        {...remainingProps}
      >
        {children}
      </div>

    )}
};

Hero.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  size: PropTypes.oneOf([
    'small',
    'medium',
    'large',
    'full',
  ]),
  varient: PropTypes.oneOf([
    'image',
  ]),
  image: PropTypes.string,
};
