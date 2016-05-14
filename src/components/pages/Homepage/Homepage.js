import React, {Component} from "react";
import Helmet from "react-helmet";

import Button from '../../atoms/Button/Button.react.js';
import Hero from '../../atoms/Hero/Hero.react.js';
import Container from '../../atoms/Container/Container.react.js';
import Grid from '../../atoms/Grid/Grid.react.js';
import GridRow from '../../atoms/GridRow/GridRow.react.js';
import GridColumn from '../../atoms/GridColumn/GridColumn.react.js';
import GridItem from '../../atoms/GridItem/GridItem.react.js';
import GridContent from '../../atoms/GridContent/GridContent.react.js';
import Overlay from '../../atoms/Overlay/Overlay.react.js';
import Section from '../../atoms/Section/Section.react.js';

// Styles
import styles from './Homepage.css';
import m from 'global/modifiers';
import helpers from 'global/helpers';

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

            <Hero size="full" varient="primary">
                Hello
            </Hero>

            <div className={styles.homeGrid}>
                <Container size="full">
                    <GridRow>
                        <GridColumn flex="flex-14">
                            <GridItem>
                                <GridContent
                                    style="square"
                                    varient="image"
                                    type="caseStudy"
                                    to="/willchill"
                                    image="/img/willchill.png"
                                />
                            </GridItem>
                        </GridColumn>
                        <GridColumn type="matchHeight">
                            <GridItem>
                                <GridContent varient="image" image="/img/high-five.png" />
                            </GridItem>
                            <GridItem>
                                <GridContent varient="image" image="/img/crew-animation.gif" />
                            </GridItem>
                        </GridColumn>
                    </GridRow>
                    <GridRow>
                        <GridColumn>
                            <GridItem>
                                <GridContent style="square" varient="image" image="/img/hero.jpg" />
                            </GridItem>
                        </GridColumn>
                        <GridColumn type="matchHeight">
                            <GridItem>
                                <GridContent varient="image" image="/img/hero.jpg" />
                            </GridItem>
                            <GridItem>
                                <GridContent varient="image" image="/img/hero.jpg" />
                            </GridItem>
                        </GridColumn>
                        <GridColumn type="matchHeight">
                            <GridItem>
                                <GridContent style="square" varient="image" image="/img/hero.jpg" />
                            </GridItem>
                        </GridColumn>
                    </GridRow>
                    <GridRow>
                        <GridColumn type="matchHeight">
                            <GridItem>
                                <GridContent varient="image" image="/img/hero.jpg" />
                            </GridItem>
                            <GridItem>
                                <GridContent varient="image" image="/img/hero.jpg" />
                            </GridItem>
                        </GridColumn>
                        <GridColumn>
                            <GridItem>
                                <GridContent style="square" varient="image" image="/img/hero.jpg" />
                            </GridItem>
                        </GridColumn>
                    </GridRow>
                </Container>
            </div>
        </div>
    )
  }
}
