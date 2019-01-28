import React from 'react'
import { Card, Icon, Image, Label } from 'semantic-ui-react'

const Cardview = (props) => (
  <Card style={{ margin: 15, minWidth: 200 }} >
    <Image src={require(`../assets/icons/${props.item.name}.png`)} style={{ margin: 5, marginLeft: 20, marginRight: 20, height: 250 }} />
    <Card.Content>
      <Card.Header>{props.item.name} {props.num ? <Label as='a'>{props.num}</Label> : null} </Card.Header>
    </Card.Content>
    <Card.Content extra>
      <h3>
        <a onClick={() => props.buyItem(props.item.itemId)} >
          <Icon name='ethereum' color='blue' />
          {props.item.price}
        </a>
      </h3>
    </Card.Content>
  </Card>
)

export default Cardview