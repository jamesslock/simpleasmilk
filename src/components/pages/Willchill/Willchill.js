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
                          Keeping friends connected by scheduling chill times.
                        </Lettering>
                    </Container>
                </Section>
            </Hero>

            <Container size="full">
                <Hero size="huge" varient="image" position="top center" image="/img/hero.jpg" className={helpers.verticalAlign}>
                    <Overlay />
                    <Section size="large" className={helpers.textCenter}>
                        <img src="/img/willchill_logo.svg" />
                    </Section>
                </Hero>

                <Section size="large">
                    <Container size="small">
                        <p>I was called from these reflections by the sight of a freckled woman with yellow hair and a yellow gown, standing in the porch of the inn, under a dull red lamp swinging there, that looked much like an injured eye, and carrying on a brisk scolding with a man in a purple woollen shirt.</p>

                        <p>"Get along with ye," said she to the man, "or I'll be combing ye!"</p>

                        <blockquote>"Come on, Queequeg," said I, "all right. There's Mrs. Hussey."</blockquote>

                        <p>And so it turned out; Mr. Hosea Hussey being from home, but leaving Mrs. Hussey entirely competent to attend to all his affairs. Upon making known our desires for a supper and a bed, Mrs. Hussey, postponing further scolding for the present, ushered us into a little room, and seating us at a table spread with the relics of a recently concluded repast, turned round to us and said&mdash;"Clam or Cod?"</p>

                        <p>"What's that about Cods, ma'am?" said I, with much politeness.</p>

                        <p>"Clam or Cod?" she repeated.</p>

                        <p>"A clam for supper? a cold clam; is THAT what you mean, Mrs. Hussey?" says I, "but that's a rather cold and clammy reception in the winter time, ain't it, Mrs. Hussey?"</p>

                        <p>But being in a great hurry to resume scolding the man in the purple Shirt, who was waiting for it in the entry, and seeming to hear nothing but the word "clam," Mrs. Hussey hurried towards an open door leading to the kitchen, and bawling out "clam for two," disappeared.</p>
                    </Container>
                </Section>
            </Container>
        </div>
    )
  }
}
