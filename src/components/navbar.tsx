import React, { Component } from 'react'
import { Menu, Image } from 'semantic-ui-react'

export default class MenuExampleSecondary extends Component {
    state = { activeItem: 'home' }
  
    handleItemClick = (e:any, { name }: any) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
        <Menu secondary>
            <Image src={'logo-soundwave.png'} size={'mini'} floated='left' />
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='messages'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='friends'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          />
         
        </Menu>
      )
    }
  }


