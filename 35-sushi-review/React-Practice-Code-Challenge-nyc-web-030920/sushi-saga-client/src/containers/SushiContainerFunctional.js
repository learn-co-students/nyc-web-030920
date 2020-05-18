import React, { Fragment, Component } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = props => {
    // doesn't need state logic cause the only state was startIndex
    // which now lives in App

    // other differences
    // sushis props is an array of only 4 sushis
    // new prop updateIndex method from APP now

    return (
      <Fragment>
        <div className="belt">
          { props.sushis.map(sushi => <Sushi key={sushi.id} {...sushi} handleEat={props.handleEat} eaten={props.eaten}/>) // Sushi props will be  { id, name, price, img_url }
            /* 
                Render Sushi components here!
            */
          }
          <MoreButton updateIndex={props.updateIndex}/>
        </div>
      </Fragment>
    )
}

export default SushiContainer


