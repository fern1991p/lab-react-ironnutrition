import React from 'react';
import {useState} from "react";







export default function FoodBox(props) {

let {food} = props;
const {btnClick} = props;
const [quantity, setQuantity] = useState()

function handleQuantity (event){
  setQuantity(event.target.value)
}
  return (
    
      <div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={food.image} alt="" />
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{food.name}</strong> <br />
          <small>{food.calories}</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input value ={quantity} onChange={handleQuantity} className="input" type="number" />
        </div>
        <div className="control">
          <button onClick= {() => {btnClick(food, quantity)} } className="button is-info">
            +
          </button>
        </div>
      </div>
    </div>
  </article>
</div>
    
  )
}
