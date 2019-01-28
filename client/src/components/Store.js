import React from 'react'
import Cardview from './Cardview'
import { Grid, Image } from 'semantic-ui-react'

class Store extends React.Component {
  render() {
    return (
      <Grid divided='vertically' style={{ display: 'flex', flex: 1, justifyContent: 1, padding: 20 }} >
        <Grid.Row columns={3} style={{ justifyContent: 'center' }} >
          {
            this.props.data.map((item, index) =>
              <Grid.Column style={{ justifyContent: 'space-around', display:'flex' }} key={index} >
                <Cardview item={item} buyItem={this.props.buyItem} />
              </Grid.Column>
            )
          }
        </Grid.Row>
      </Grid>
    )
  }
}

export default Store