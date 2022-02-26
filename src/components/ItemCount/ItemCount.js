export const ItemCount = ({max, min = 0 , counter , setCounter}) => {

const handleSumar = () => {
 counter < max && setCounter(counter +1)
}

const handleRestar = () => {
 counter > min && setCounter(counter -1)
   
   }

    return (
        <div>
            <button 
            className={`btn ${counter === min ? 'btn-outline-warning' : 'btn-outline-danger '}`}
            disabled={counter === min}
            onClick={handleRestar}>-</button>
            <span className="mx-2">{counter}</span>
            <button 
            className={`btn ${counter === max ? 'btn-outline-warning' : 'btn-outline-danger '}`} 
            disabled={counter === max}
            onClick={handleSumar}>+</button>
        </div>
    )
}