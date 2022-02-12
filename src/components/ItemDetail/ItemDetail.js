


export const ItemDetail = ( {nombre, id , precio, img , stock , categoria}) =>{
  return (
    <div>
        <h3 className="margenSuperior3">{nombre}</h3>
        <img src={img} alt={nombre}/>
        <p>{categoria}</p>
        <h4>Precio:US${precio}</h4>
    </div>
  )
}

