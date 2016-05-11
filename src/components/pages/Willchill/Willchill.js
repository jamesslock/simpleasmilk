import React, {Component} from "react";
import Helmet from "react-helmet";

// Atoms
import Button from '../../atoms/Button/Button.react.js';
import Container from '../../atoms/Container/Container.react.js';
import Hero from '../../atoms/Hero/Hero.react.js';
import Section from '../../atoms/Section/Section.react.js';
import Lettering from '../../atoms/Lettering/Lettering.react.js';

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

            <Hero size="large">
                <Section size="large">
                    <Container size="small">
                        <h1 className={styles.heroTitle}>WillChill</h1>
                        <Lettering className={styles.heroDescription} tagName="h1">
                          Keeping friends connected by scheduling chill times.
                        </Lettering>
                    </Container>
                </Section>
            </Hero>
        </div>
    )
  }
}
