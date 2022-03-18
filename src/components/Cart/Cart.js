import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import {BsTrash} from 'react-icons/bs'
import { Link } from "react-router-dom"



export const Cart = () => {

    const {cart, totalCart, vaciarCart, eliminarItem} = useContext(CartContext)
    
    if (cart.length === 0) {
        return <div className="container my-4 centrar">
                <h2>Usted no ha realizado ninguna reserva</h2>
                <Link to="/" className="btn btn-danger">Volver a Inicio</Link>
        </div>
    }

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
            <Link to='/Checkout' className="btn btn-danger mx-4" >Confirmar pago</Link>
            <button className="btn btn-danger" onClick={vaciarCart}>Cancelar</button>
            
        </div>

    </div>
)
}