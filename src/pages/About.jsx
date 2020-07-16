import React from "react";

import Paper from "../components/paper/Paper";
import Container from "../layout/Container";

import AboutContent from "../components/aboutContent/aboutContent";

const About = () => {
  return (
    <Paper>
      <Container
        flexDirection="column"
        justifyContent="space-between"
        height="100%"
      >
        <AboutContent />
      </Container>
    </Paper>
  );
};

export default About;
