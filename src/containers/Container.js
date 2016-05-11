import React, {Component, PropTypes} from "react";

// Styles
import styles from 'global/Site.css';

export default class AppContainer extends Component {
	render () {
    const {children} = this.props
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}
