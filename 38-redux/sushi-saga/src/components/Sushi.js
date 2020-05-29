import React, { Fragment } from 'react'
import { connect } from 'react-redux'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate" 
          onClick={() => props.eatSushi(props.id, props.price, props.eaten)}> 
        { 
          props.eaten 
          ? null
          : <img src={props.img_url } width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.name} - ${props.price}
      </h4>
    </div>
  )
}

const mdp = dispatch => {
  return {
    eatSushi: (id, price, eaten) => dispatch({ type: 'EAT_SUSHI', payload: {id, price, eaten} })
  }
}

export default connect(null, mdp)(Sushi)