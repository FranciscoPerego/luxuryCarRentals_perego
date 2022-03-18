import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { useState } from "react"
import { Navigate } from "react-router-dom"
import { collection , addDoc, Timestamp , writeBatch, query, where ,documentId, getDocs} from "firebase/firestore"
import { db } from "../../Firebase/config"
import { Link } from "react-router-dom"


export const Checkout = () => {

    const {cart, totalCart, vaciarCart} = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)

    const generarOrden = async () => {
        const orden = {
            comprador: values,
            items: cart,
            total: totalCart(),
            fyh: Timestamp.fromDate(new Date())
    }

    const batch = writeBatch(db)
    const ordersRef = collection(db,"orders")
    const productosRef = collection(db,"productos")

    const q = query(productosRef, where(documentId(), 'in', cart.map((el) => el.id)))
    const productos = await getDocs(q)
    const outOfStock = []

    productos.docs.forEach((doc) => {
        const item = cart.find((el) => el.id === doc.id)

        if (doc.data().stock >= item.cantidad) {
            batch.update(doc.ref, {
                stock: doc.data().stock - item.cantidad
            })
        } else {
            outOfStock.push(item)
        }
})

if (outOfStock.length === 0) {
    addDoc(ordersRef,orden)
       .then((doc) => {
           batch.commit()
           setOrderId(doc.id)
           vaciarCart()
       })
} else {
    alert("Uno de los productos que selecciono no estan disponibles para reservar, favor de verificar.")
}

}
    
    const [values, setValues] = useState({
        nombre: '',
        email: '',
        tel: '',
    })


    const handleInputChange = (e) => {
        
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (values.nombre.lenghth < 3) {
            alert('Nombre invalido. VERIFICAR.')
            return
        }
        if(values.email.length < 7){
            alert('El email ingresado es invalido')
            return
        }
        if(values.tel.length < 7){
            alert('El telefono ingresado es invalido')
            return
        }

       
    generarOrden()

    }

   
    if (orderId) {
        return (
            <div className="container my-4 centrar">
            <h3>Usted ha finalizado su reserva exitosamente</h3>
            
            <h4>Su numero de reserva es: {orderId} </h4>
            <Link to='/' className="btn btn-danger">Volver al inicio</Link>
            </div>
        )
    }

if (cart.length === 0) {
    return <Navigate to='/'/>
}
    
return(
        <div className="container my-5 centrar form">
        <h2>Para finalizar la reserva te solicitamos completar los siguientes campos:</h2>
         <form onSubmit={handleSubmit}>
         <input
             className="form-control my-2 inputSize"
             type='text'
             placeholder="Tu nombre"
             value={values.nombre}
             onChange={handleInputChange}
             name='nombre'
         />
         <input
             className="form-control my-2 inputSize"
             type='email'
             placeholder="Tu email"
             value={values.email}
             onChange={handleInputChange}
             name='email'
         />
         <input
             className="form-control my-2 inputSize"
             type='tel'
             placeholder="Tu telefono"
             value={values.tel}
             onChange={handleInputChange}
             name='tel'
         />

         <button type="submit" className="btn btn-danger">
             Enviar
         </button>
     </form>
        </div>
    )  
    }

