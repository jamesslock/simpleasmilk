import React, {Component} from "react";
import Helmet from "react-helmet";

import Button from '../../atoms/Button/Button.react.js';

// Styles
import styles from './Willchill.css';
import m from 'global/modifiers';

export default class Willchill extends Component {
  render() {
    return(
        <div>
            <Helmet
                title="WillChill - Simple as Milk"
                meta={[
                    {"name": "description", "content": "Helmet application"}
                ]}
            />
        <h1>WillChill</h1>
        </div>
    )
  }
}
