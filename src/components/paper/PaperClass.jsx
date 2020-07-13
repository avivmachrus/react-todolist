import React from "react";
import styled from "@emotion/styled";
import { withTheme } from "emotion-theming";
import PropTypes from "prop-types";

class Paper extends React.Component {
  render() {
    const { children, theme } = this.props;
    const {
      background: { main },
      color: { primary },
    } = theme;

    const StyledPaper = styled.div`
      margin-top: 100px;
      width: 600px;
      height: 800px;
      background-color: ${main.paper};
      border-radius: 4px;
      padding: 32px;
    `;

    const StyledFrame = styled.div`
      border: 1px solid ${primary.black};
      height: 100%;
    `;

    return (
      <StyledPaper theme={theme}>
        <StyledFrame theme={theme}>{children}</StyledFrame>
      </StyledPaper>
    );
  }

  static propTypes = {
    // define children contain type one or two react component
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
  };
}

export default withTheme(Paper);
