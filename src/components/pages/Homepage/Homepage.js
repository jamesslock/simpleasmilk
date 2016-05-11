import React, {Component} from "react";
import Helmet from "react-helmet";

import Button from '../../atoms/Button/Button.react.js';

// Styles
import styles from './Homepage.css';
import m from 'global/modifiers';

export default class Homepage extends Component {
  render() {
    return(
        <div>
            <Helmet
                title="Simple as Milk"
                meta={[
                    {"name": "description", "content": "Helmet application"}
                ]}
            />
            <h1>Simple as Milk</h1>
            <Button context="primary" buttonType="link" to="/projects/willchill">Will Chill</Button>
        </div>
    )
  }
}
