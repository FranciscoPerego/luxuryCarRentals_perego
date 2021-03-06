import { Contenedor } from "../../Contenedor/Contenedor"
import { Item } from "../Item/Item"


export const ItemList = ( {productos} ) => {

    return (
        <Contenedor>    
            <h2>WELCOME</h2> 
            <hr/>
        
            <div className="row wrapper">
                { productos.map( (el) => <Item key={el.id} {...el}/> )}
            </div> 
        </Contenedor>
    )
}