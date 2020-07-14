import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "emotion-theming";
import styled from "@emotion/styled";

import Button from "../button/Button";
import Container from "../../layout/Container";
import Item from "../../layout/Item";

const StyledInput = styled.input`
  text-align: center;
  background: none;
  border: none;
  padding: 0 64px;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.color.primary.red};
  outline: none;
  font-family: "Homemade Apple", sans-serif;
  font-size: 1.6rem;
  text-transform: lowercase;
`;

class Todoform extends React.Component {
  state = {
    value: "",
  };

  handleFormSubmit = (e) => {
    // destructure /= this.state.value
    const { value } = this.state;
    const { addTodo } = this.props;
    e.preventDefault();

    // check empty form
    if (!value) {
      alert("Empty todo not allowed !");
      return;
    }

    if (value.length > 40) {
      alert("Please create a shorter todo !");
      this.setState({ value: "" });
      return;
    }

    addTodo(value);
    this.setState({ value: "" });
  };

  handleOnChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { showAdd, theme } = this.props;
    if (showAdd) {
      return (
        <section className="todoform-component">
          <form onSubmit={this.handleFormSubmit}>
            <Container alignItems="flex-start">
              <Item flex={1} padding="10px 0 10px 10px">
                <StyledInput
                  theme={theme}
                  type="text"
                  value={this.state.value}
                  onChange={this.handleOnChange}
                />
              </Item>
              <Item padding="10px 0 0 10px">
                {/* <button css={styles.addBtn({ theme })}>Add</button> */}
                <Button text="Add" />
              </Item>
            </Container>
          </form>
        </section>
      );
    } else {
      return null;
    }
  }

  static propTypes = {
    addTodo: PropTypes.func.isRequired,
    showAdd: PropTypes.bool.isRequired,
  };
}

export default withTheme(Todoform);
