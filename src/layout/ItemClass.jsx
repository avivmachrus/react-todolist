import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const StyledItem = styled.div`
  flex: ${(props) => props.flex};
  text-align: ${(props) => props.textAlign};
  padding: ${(props) => props.padding};
`;

class Item extends React.Component {
  render() {
    const { children, flex, textAlign, padding } = this.props;
    return (
      <StyledItem
        className="flex-item"
        flex={flex}
        textAlign={textAlign}
        padding={padding}
      >
        {children}
      </StyledItem>
    );
  }

  static defaultProps = {
    textAlign: "left",
    padding: "unset",
  };

  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    flex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    textAlign: PropTypes.oneOf(["left", "right", "center", "justify"]),
    padding: PropTypes.string,
  };
}

export default Item;
