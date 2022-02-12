


export const ItemDetail = ( {nombre, id , precio, img , stock , categoria}) =>{
  return (
    <div>
        <h2>{nombre}</h2>
        <img src={img} alt={nombre}/>
        <p>{categoria}</p>
        <h4>Precio:US${precio}</h4>
    </div>
  )
}

