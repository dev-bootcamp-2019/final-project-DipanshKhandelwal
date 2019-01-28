import React, { Component } from 'react'
import { Menu, Segment, Icon, Image } from 'semantic-ui-react'

export default class Navbar extends Component {
  state = { activeItem: 'store' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    this.props.setTab(name)
  }

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Image src={require('../assets/icon.png')} size='mini' style={{ width: 40, height: 40, marginRight: 5 }} />
          <Menu.Item name='store' active={activeItem === 'store'} onClick={this.handleItemClick} />
          <Menu.Item
            name='inventory'
            active={activeItem === 'inventory'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='profile'
            position='right'
            active={activeItem === 'profile'}
            onClick={this.handleItemClick}
          >
          <Icon name='ethereum' color='blue' />
          {this.props.balance} Ξ
          <div style={{ marginRight: 15 }} ></div>
            <Icon color={this.props.userRegistered ? 'green' : 'red'} name={this.props.userRegistered ? 'play' : 'stop'} />
          {this.props.account}
          </Menu.Item>
        </Menu>
      </Segment>
    )
  }
}
