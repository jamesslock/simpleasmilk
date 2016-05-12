import React, {Component} from "react";
import Helmet from "react-helmet";
import Markdown from 'react-remarkable';

// Atoms
import Button from '../../atoms/Button/Button.react.js';
import Container from '../../atoms/Container/Container.react.js';
import Hero from '../../atoms/Hero/Hero.react.js';
import Overlay from '../../atoms/Overlay/Overlay.react.js';
import Section from '../../atoms/Section/Section.react.js';
import Lettering from '../../atoms/Lettering/Lettering.react.js';

// Styles
import styles from './Willchill.css';
import helpers from 'global/helpers';

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

            <Hero size="large" className={helpers.verticalAlign}>
                <Section size="large">
                    <Container size="small">
                        <h1 className={styles.heroTitle}>WillChill</h1>
                        <Lettering className={styles.heroDescription} tagName="h1">
                          We believe that good, lasting relationships are built on quality time spent together.
                        </Lettering>
                    </Container>
                </Section>
            </Hero>

            <Container size="full">
                <Hero size="huge" varient="image" position="top center" image="/img/hero.jpg" className={helpers.verticalAlign}>
                    <Overlay />
                    <Section size="large" className={helpers.textCenter}>
                        <img src="/img/willchill_logo.svg" width="480px"/>
                    </Section>
                </Hero>

                <Section size="large">
                    <Container size="small">
                        <p>WillChill is a fun app that simplifies your social schedule. Enter your free time each week, pick the friends you want to hang out with, and we'll take care of finding the best time for you to meet up. Stop scheduling, start chilling.</p>
                        <p>With WillChill, you select the times that work for you, then swipe through your friends to tell us who you'd like to hang with. When you and a friend want to hang out, we'll let you know and schedule it for you two! You can figure out the specifics using our built-in chat.</p>
                        <blockquote>"We believe that good, lasting relationships are built on quality time spent together."</blockquote>

                    </Container>
                </Section>

                <Section size="large">
                    <Container size="small">
                        <h1>Wireframes</h1>
                        <p>One through the initial login & matching with a friend, the more complex task of messaging and how group's would work.</p>
                    </Container>
                    <img src="/img/willchill-wireframes.png" />
                </Section>

                <Section size="large">
                    <img class="imageFull" src="/img/willchill-inaction.jpg" />
                </Section>
            </Container>
        </div>
    )
  }
}
