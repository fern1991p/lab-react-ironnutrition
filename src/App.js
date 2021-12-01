import React, { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddForm from './components/AddForm';
import Search from './components/Search';
import Total from './components/Total';


function App() {

  const [allFoods, setFoods] = useState(foods)
  const [showForm, setShowForm] = useState(false)
  const [allFoodsCopy, setFoodsCopy] = useState(foods)
  const [checkoutData, setCheckout] = useState([])

  function handleClick(food, quantity){

    console.log('hey, its clicking')
    // display food and calories 

    let checkoutFood= {
      name: food.name, 
      calories: food.calories,
      quantity: quantity,
    }

    setCheckout([checkoutFood, ...checkoutData])


  }


  function handleSubmit(event){

   event.preventDefault()
    let newFood = {
      name: event.target.name.value, 
      calories: event.target.calories.value,
      image: event.target.image.value
    }
  
    setFoods([newFood, ...allFoods])
    setFoodsCopy([newFood, ...allFoods])
    setShowForm(false)
  }


  function handleToggle(){
    setShowForm(!showForm)
  }



  function handleSearch(event){
    let search = event.target.value

    let filteredFoods = allFoods.filter((elem) => {
      return elem.name.includes(search)
    })

    setFoodsCopy(filteredFoods)
  }
  
  return (


    <div class="columns"> 
      <div class="column"> 
      <Search btnSearch={handleSearch}/>

       {
          showForm ? (<AddForm btnSubmit={handleSubmit}/>) : (<button onClick={handleToggle}>Show Form</button>)
        }


      <h1> My foods </h1>
     {
      allFoodsCopy.map((elem, i) => {
            return <FoodBox 
              key={i}
              food={elem}
              btnClick={handleClick}
            />
        })

      }
      </div>
        <div class="column"> 

          <Total checkoutData={checkoutData} />

        </div>
    </div>
  );
}


export default App;
