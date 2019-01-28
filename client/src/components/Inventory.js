import React from 'react'
import Cardview from './Cardview'
import { Grid, Icon, Header } from 'semantic-ui-react'

const Inventory = (props) => (
  <Grid divided='vertically' style={{ display: 'flex', flex: 1, justifyContent: 1, padding: 20 }} >
    <Grid.Row columns={3} style={{ justifyContent: 'center' }} >
      {
        props.boughtItems.map((boughtItem) => {
          if (boughtItem.num > 0) {
            return (
              <Grid.Column style={{ justifyContent: 'space-around', display: 'flex' }} key={boughtItem.itemId} >
                <Cardview item={props.data[boughtItem.itemId]} buyItem={props.buyItem} num={boughtItem.num} />
              </Grid.Column>
            )
          }
        })
      }
      <div>
        <Header size='huge'>You don't have anything else !!</Header>
        <Icon loading size='big' name='dont' />
      </div>
    </Grid.Row>
  </Grid>
)

export default Inventory