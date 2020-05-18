import React, { Fragment } from 'react'

const Sushi = (props) => {
  const { id, name, price, img_url, handleEat, eaten } = props;
  
  return (
    <div className="sushi">
      <div className="plate" 
          onClick={() => handleEat(id)}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          eaten.find(eatenId => eatenId === id) ?
            null
          :
            <img src={img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi