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
import Grid from '../../atoms/Grid/Grid.react.js';
import GridRow from '../../atoms/GridRow/GridRow.react.js';
import GridColumn from '../../atoms/GridColumn/GridColumn.react.js';
import GridItem from '../../atoms/GridItem/GridItem.react.js';
import GridContent from '../../atoms/GridContent/GridContent.react.js';

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
                        <h1 className={styles.heroTitle}>Case Study:</h1>
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
                        <h2>WillChill</h2>
                        <p className="intro">WillChill is a fun app that simplifies your social schedule. Enter your free time each week, pick the friends you want to hang out with, and they'll take care of finding the best time for you to meet up. Stop scheduling and start chilling.</p>
                    </Container>
                    <Container size="small">
                        <div className={styles.halves}>
                            <h3>Project Mission</h3>
                            <p>The founders of WillChill aproched us to redesign their iOS app, rebuild the user experience from the ground up implementing several new features and come up with a new fund brand for the company.</p>
                        </div>
                        <div className={styles.halves}>
                            <h3>Our Role</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipdatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </Container>
                </Section>

                <Section size="large">
                    <Container size="small">
                        <h2>Branding</h2>
                        <p>WillChill is a fun app that simplifies your social schedule. Enter your free time each week, pick the friends you want to hang out with, and they'll take care of finding the best time for you to meet up. Stop scheduling and start chilling.</p>
                        <br/><br/><br/>
                    </Container>
                    <Container size="full">
                        <GridRow>
                            <GridColumn type="matchHeight">
                                <GridItem>
                                    <GridContent>
                                        <h2>Logo</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    </GridContent>
                                </GridItem>
                                <GridItem>
                                    <GridContent varient="image" image="/img/willchill-markType.png" />
                                </GridItem>
                            </GridColumn>
                            <GridColumn flex="flex-14">
                                <GridItem>
                                    <GridContent
                                        style="square"
                                        varient="image"
                                        image="/img/willchill-mark.png"
                                    />
                                </GridItem>
                            </GridColumn>
                        </GridRow>
                        <GridRow>
                            <GridColumn>
                                <GridItem>
                                    <GridContent style="square" varient="image" image="/img/willchill-mark2.png" />
                                </GridItem>
                            </GridColumn>
                            <GridColumn type="matchHeight">
                                <GridItem>
                                    <GridContent varient="image" image="/img/willchill-type.png" />
                                </GridItem>
                                <GridItem>
                                    <GridColumn>
                                        <GridItem>
                                            <GridContent varient="image" image="/img/willchill-markDark.png" />
                                        </GridItem>
                                    </GridColumn>


                                    <GridColumn>
                                        <GridItem>
                                            <GridContent varient="image" image="/img/willchill-markLight.png" />
                                        </GridItem>
                                    </GridColumn>
                                </GridItem>
                            </GridColumn>
                            <GridColumn type="matchHeight">
                                <GridItem>
                                    <GridContent style="square" varient="image" image="/img/willchill-icon.png" />
                                </GridItem>
                            </GridColumn>
                        </GridRow>
                    </Container>
                </Section>

                <Section size="large">
                    <Container size="small">
                        <h1>Interactive Prototypes</h1>
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
