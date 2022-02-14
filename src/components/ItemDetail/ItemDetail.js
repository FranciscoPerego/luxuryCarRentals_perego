


export const ItemDetail = ( {nombre, id , precio, img , stock , categoria, descripcion}) =>{
  return (
    <div className="centrar">
        <h3 className="margenSuperior3">{nombre}</h3>
        <img src={img} alt={nombre}/>
        <p className="margenSuperior4">{descripcion}</p>
        <h4 className="letrasRojas">Precio:US${precio}</h4>
    </div>
  )
}

