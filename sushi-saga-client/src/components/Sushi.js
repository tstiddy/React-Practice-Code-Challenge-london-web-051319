import React, { Fragment } from 'react'

const Sushi = ({ img_url, isEaten, name, price, clickHandler }) => {
  return (
    <div className="sushi">
      <div className="plate"
        onClick={clickHandler}>
        {
          isEaten ?
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