import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { db } from "../../Firebase/config";
import { doc, getDoc } from "firebase/firestore";



export const ItemDetailContainer = () => {
     const [loading, setLoading] = useState (false)
     const [item, setItem] = useState (null)

     const { itemId } = useParams()
     

     useEffect (() =>  {
         setLoading(true)
        
         //1
         const docRef = doc(db, 'productos', itemId)
         //2
         getDoc(docRef)
         .then((doc) => {
             setItem({id: doc.id, ...doc.data()})
         })
         .finally(() => {
            setLoading(false)
         })
     }, [])

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