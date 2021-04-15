// import React from 'react'
import 'semantic-ui-css/semantic.min.css';


import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'

export default class MenuExamplePointing extends Component {
  state = { activeItem: 'about' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div >
        <Menu pointing style={{
            backgroundColor: 'lightblue'
        }}>
          <Menu.Item
              name='Nicholas Silva'
            //   active={activeItem === 'home'}
              onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
          <Menu.Item
            name='about'
            active={activeItem === 'about'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='projects'
            active={activeItem === 'projects'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='research'
            active={activeItem === 'research'}
            onClick={this.handleItemClick}
          />
           <Menu.Item
            name='experience'
            active={activeItem === 'experience'}
            onClick={this.handleItemClick}
          />
           <Menu.Item
            name='CV'
            active={activeItem === 'CV'}
            onClick={this.handleItemClick}
          />
            <Menu.Item>
              <Input icon='search' placeholder='Search...'  />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}
