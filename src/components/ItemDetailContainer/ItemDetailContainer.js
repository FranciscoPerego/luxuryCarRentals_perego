import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";



export const ItemDetailContainer = () => {
     const [loading, setLoading] = useState (false)
     const [item, setItem] = useState (null)

     const { itemId } = useParams()
     console.log(itemId)

     console.log(item)

     useEffect (() =>  {
         setLoading(true)

        pedirDatos()
             .then((res) =>{
                 setItem(res.find((el) => el.id === Number(itemId)) )
     })
     .finally(() => {
         setLoading(false)
         }
         )
     }, [itemId])

     return (
        <>
        {
                loading 
                    ? <h2></h2> 
                    : <ItemDetail {...item}/>
                } 
                </>
            )
        }