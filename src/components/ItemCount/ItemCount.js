import { useState } from "react"


export const ItemCount = ({max, min = 0}) => {

const [counter, setCounter]= useState(min)

const handleSumar = () => {
 counter < max && setCounter(counter +1)
}

const handleRestar = () => {
 counter > min && setCounter(counter -1)
   
   }

    return (
        <div>
            <button className="btn btn-outline-danger" onClick={handleRestar}>-</button>
            <span className="mx-2">{counter}</span>
            <button className="btn btn-danger" onClick={handleSumar}>+</button>
        </div>
    )
}