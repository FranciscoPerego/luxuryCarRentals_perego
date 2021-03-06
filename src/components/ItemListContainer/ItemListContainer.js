import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { db } from "../../Firebase/config"
import { collection, getDocs, query, where } from "firebase/firestore"

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)

    console.log(productos)

    const { catId } = useParams ()

    


    useEffect( () => {
        setLoading(true)

        //1
        const productosRef = collection(db, "productos")
        const q = catId ? query ( productosRef, where("categoria", "==", catId)) : productosRef
        //2
        getDocs(q)
         .then((resp) => {

          setProductos(resp.docs.map((doc) => {
             return {
                 id: doc.id, 
                 ...doc.data()
             }
          })) 
         })
         .finally(() => {
            setLoading(false)
         })

    }, [catId])

    return (
        <>
            {
                loading 
                    ? <h2></h2> 
                    : <ItemList  productos={productos}/>
                } 
                </>
            )
        }