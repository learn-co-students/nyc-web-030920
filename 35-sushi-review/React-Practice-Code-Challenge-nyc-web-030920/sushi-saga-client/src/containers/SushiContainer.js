import React, { Fragment, Component } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {
  state = {
    startIndex: 0
  }

  updateIndex = () => {
    // if the new index is going to be beyond the length of the sushis array
    // go back to zero 
    let newIndex = this.state.startIndex + 4;
    if(newIndex >= this.props.sushis.length) {
      newIndex = 0

      /**
       * SUPPOSE WE...  show 3 sushi per page
       * when you get to the end, how do show 3 sushi on the last page (last sushi + first 2)
       * and then continue the rotation appropriately
       * 
       * 
       * HINT: modulo operator
       */
    }
    this.setState({ startIndex: newIndex })
  }

  render(){
    const { startIndex } = this.state;
    const slicedSushis = this.props.sushis.slice( startIndex, startIndex + 4 );

    console.log(startIndex)
    return (
      <Fragment>
        <div className="belt">
          { slicedSushis.map(sushi => <Sushi key={sushi.id} {...sushi} handleEat={this.props.handleEat} eaten={this.props.eaten}/>) // Sushi props will be  { id, name, price, img_url }
            /* 
                Render Sushi components here!
            */
          }
          <MoreButton updateIndex={this.updateIndex}/>
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer


