import { useContext, useState} from "react"
import { CartContext } from "../../Context/CartContext"
import { ItemCount } from "../ItemCount/ItemCount"
import {Link} from 'react-router-dom'


export const ItemDetail = ( {nombre, id , precio, img , stock , categoria, descripcion}) =>{

  const [cantidad, setCantidad] = useState(0)

    const { agregarAlCarrito, isInCart } = useContext(CartContext)

    const handleAgregar = () => {
        if (cantidad === 0) return

        if (!isInCart(id)) {
            const addItem = {
                id, nombre, precio, stock, cantidad
            }
    
            agregarAlCarrito(addItem)
        }
    }

return (
  <div className="centrar">
      <h3 className="margenSuperior3 subrayado">{nombre}</h3>
      <img src={img} alt={nombre} className='grid'/>
      <p className="margenSuperior4">{descripcion}</p>
      <h4 className="letrasRojas">Precio:US${precio}</h4>

      {
        isInCart(id)
        ?  <Link to="/cart" className="btn btn-danger my-3">
           Finalizar reserva
          </Link>
          :
           <>
           <ItemCount max={stock} counter={cantidad} setCounter={setCantidad}
            />
            <button className="btn btn-danger my-3" onClick={handleAgregar}>
             RESERVAR
             </button>
              </>
             }
      
  </div>
)
}

