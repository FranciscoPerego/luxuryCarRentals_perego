import './ItemListContainer.css'

const ItemListContainer = ( {greeting} ) => {

    return (
        <section className='margenSuperior'>
            <hr/>
            <h2>{greeting}</h2>
        </section>
    )    
  }

  export default ItemListContainer