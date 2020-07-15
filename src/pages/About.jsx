import React from "react";
import { Link } from "react-router-dom";

import Paper from "../components/paper/Paper";
import Container from "../layout/Container";

const About = () => {
  return (
    <Paper>
      <Container
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
      />
      <h1>this is About Page</h1>
      <Link to="./">Back to Home</Link>
    </Paper>
  );
};

export default About;
