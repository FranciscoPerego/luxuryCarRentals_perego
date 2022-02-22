import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import {BsTrash} from 'react-icons/bs'



export const Cart = () => {

    const {cart, totalCart, vaciarCart, eliminarItem} = useContext(CartContext)

return (
    <div className="cointainer my-2 centrar">
        <h3>¿Desea confirmar las siguientes reservas?</h3>
        {
           cart.map((item) => (
               <div key={item.id}>
                 <h4>{item.nombre}</h4>  
                 <p>Cantidad de dias: {item.cantidad}</p>
                 <p>Precio: US${item.cantidad * item.precio}</p>
                 <button className="btn btn-danger" onClick={() => eliminarItem(item.id)}>
                  <BsTrash/>
                 </button>
               </div>
           )) 
        }
        <div className="linea"></div>
        <h2>Total: US${totalCart()}</h2>
        <div className="my-3">
            <button className="btn btn-danger mx-4" >Confirmar pago</button>
            <button className="btn btn-danger" onClick={vaciarCart}>Cancelar</button>
            
        </div>

    </div>
)
}