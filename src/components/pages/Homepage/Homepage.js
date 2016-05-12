import React, {Component} from "react";
import Helmet from "react-helmet";

import Button from '../../atoms/Button/Button.react.js';
import Container from '../../atoms/Container/Container.react.js';
import Grid from '../../atoms/Grid/Grid.react.js';
import GridRow from '../../atoms/GridRow/GridRow.react.js';
import GridColumn from '../../atoms/GridColumn/GridColumn.react.js';
import GridItem from '../../atoms/GridItem/GridItem.react.js';
import GridContent from '../../atoms/GridContent/GridContent.react.js';

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

            <Container size="full">
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
    )
  }
}
