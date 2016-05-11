import React, { Component, PropTypes } from 'react';
import activeComponent from 'react-router-active-component';
import Nav from '../../atoms/Nav/Nav.react.js';
import NavItem from '../../atoms/NavItem/NavItem.react.js';
import Button from '../../atoms/Button/Button.react.js';

import css from './MainNavigation.css';

var navigationData = [
    { 'id': 1, 'name': 'Home', 'url': '/', 'type': 'internal' },
    { 'id': 2, 'name': 'Features', 'url': '/features', 'type': 'internal' },
    { 'id': 3, 'name': 'App', 'url': '/app', 'type': 'internal' },
    { 'id': 4, 'name': 'Login', 'url': 'https://unroll.me/a/login', 'type': 'external' },
    { 'id': 5, 'name': 'Signup', 'url': 'https://unroll.me/a/signup', 'type': 'external' }
];

// Create menu items with apropriate button type
var NavigationItem = React.createClass({
    render: function(){
      if (this.props.type === 'external') {
        return (
            <NavItem>
              <Button varient="link" href={this.props.url}>{this.props.name}</Button>
            </NavItem>
        );
      }
      else {
        return (
            <NavItem>
              <Button varient="link" buttonType="link" to={this.props.url}>{this.props.name}</Button>
            </NavItem>
        );
      }
    }
});

// Create Nav item
var Navigation = React.createClass({
    render: function(){
        return (
            <Nav varient="inline">
              {this.props.mainNavigation.map(function(navigationData) {
                return (
                  <NavigationItem
                    url={navigationData.url}
                    name={navigationData.name}
                    type={navigationData.type}
                    key={navigationData.id}
                  />
                );
              })}
            </Nav>
        );
    }
});

export default class MainNavigation extends Component {

  render() {

    const {
      className,
    } = this.props;

    const classNames = [
      css.root,
      css ? css[css] : null,
      className,
    ].join(' ');

    return (
        <Navigation className={classNames} mainNavigation={navigationData} />
    )
  }
};

MainNavigation.propTypes = {
  className: PropTypes.string,
};
