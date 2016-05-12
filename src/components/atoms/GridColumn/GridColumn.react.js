import React, { Component, PropTypes } from 'react';

import css from './GridColumn.css';

export default class GridColumn extends Component {
  render() {

    const {
      className,
      children,
      type,
      ...remainingProps,
    } = this.props;

    const classNames = [
      css.root,
      css ? css[css] : null,
      type ? css[type] : null,
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

GridColumn.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  type: PropTypes.oneOf([
    'matchHeight',
  ]),
};
