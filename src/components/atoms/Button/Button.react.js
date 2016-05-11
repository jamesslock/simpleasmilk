import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import css from './Button.css';
import { active } from './Button.css';

export default class Button extends Component {
  render() {

    const {
      className,
      active,
      buttonType,
      children,
      context,
      size,
      style,
      varient,
      fullWidth,
      onClick,
      ...remainingProps,
    } = this.props;

    const classNames = [
      css.root,
      context ? css[context] : null,
      varient ? css[varient] : null,
      css ? css[css] : null,
      size ? css[size] : null,
      fullWidth ? css.fullWidth : null,
      className,
    ].join(' ');

    const activeClassName = [
      css.active,
    ];

    return buttonType === 'link' ?

      <Link
        className={classNames}
        activeClassName={activeClassName}
        {...remainingProps}
      >
        {children}
      </Link>

      :

      <a
        className={classNames}
        {...remainingProps}
      >
        {children}
      </a>

  }
};

Button.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  context: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary'
  ]),
  varient: PropTypes.oneOf([
    'link',
    'outline',
  ]),
  style: PropTypes.oneOf([
    'soft',
    'hard',
  ]),
  size: PropTypes.oneOf([
    'natural',
    'small',
    'medium',
    'large',
    'huge',
  ]),
  onClick: PropTypes.func,
};
