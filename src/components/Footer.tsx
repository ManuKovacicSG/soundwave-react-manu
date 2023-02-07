import React, { Component } from "react";
import { Input, Menu, Segment } from "semantic-ui-react";

export default class Footer extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e: any, { name }: any) =>
    this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Segment inverted>
        <Menu inverted secondary>
          <Menu.Item
            name="About Us"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Contact"
            active={activeItem === "messages"}
            onClick={this.handleItemClick}
          />

          <Menu.Menu position="right">
            <Menu.Item
              icon="twitter"
              name="Twitter"
              active={activeItem === "logout"}
              onClick={this.handleItemClick}
            ></Menu.Item>
            <Menu.Item
              icon="facebook"
              name="Facebook"
              active={activeItem === "logout"}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      </Segment>
    );
  }
}
