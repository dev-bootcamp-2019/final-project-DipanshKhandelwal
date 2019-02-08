import React from 'react'
import { Header, Image, Icon } from 'semantic-ui-react'

const Profile = (props) => (
  <div style={{ padding: 50 }} >
    <Header as='h2'>
      <Image circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' />
      <Header size='small'>{props.user}</Header>
      <Header size='tiny' style={{ color: '#3f3f3f' }}>
        <Icon name='ethereum' color='blue' />
        {props.balance} Ξ
      </Header>
    </Header>
    <a><h2 style={{ cursor: 'cell' }} onClick={()=>props.setTab('inventory')} >Check your inventory !!</h2></a>
  </div>
)

export default Profile