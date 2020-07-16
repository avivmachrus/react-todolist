import React from "react";
import { Link } from "react-router-dom";

import Container from "../../layout/Container";
import Item from "../../layout/Item";

import * as styles from "./aboutContent.styles";

const AboutContent = () => {
  return (
    <section className="about-page-component-content">
      <Container flexDirection="column">
        <Item textAlign="center">
          <h1 css={styles.aboutPageHeader}>About this app</h1>
          <h3 css={styles.aboutPageSubHeader}>
            what i learn by building this app
          </h3>
        </Item>
        <Item>
          <Container>
            <p css={styles.aboutPageParagraph}>
              By building this app. I have learned React from the ground app. I
              know more about component, props, function, emotion css, styling
              in React, CSS in JS, React Router, ...and more !
            </p>
          </Container>
        </Item>
        <Item textAlign="center">
          <Link to="/">
            <span css={styles.backToHome}>Back to Home</span>
          </Link>
        </Item>
      </Container>
    </section>
  );
};

export default AboutContent;
