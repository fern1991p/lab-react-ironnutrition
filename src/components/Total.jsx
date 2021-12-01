import React from 'react'

function Total(props) {



    const {checkoutData} = props

    // We calculate the sum of all totals using the 'reduce' method
    const total = checkoutData.reduce((sum, elem) => {

        return sum + (elem.quantity*elem.calories)

    }, 0)

 
    

    return (
        <div>
            <h1>Today's foods</h1>

            {
                checkoutData.map((elem) => {
                    const {name, quantity, calories} = elem

                    return (
                        <div>
                            {name} x {quantity} = {quantity*calories}

                            


                        </div>    
                    )
                })
            }
            <h1>Total {Math.round(total)} </h1>

        </div>
    )
}

export default Total

