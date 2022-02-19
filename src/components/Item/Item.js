import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"


export const Item = ( {id, nombre, precio, img} ) => {

    return (
        
        <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                  <div className="letrasNegras"> Precio por dia: US${precio}</div> 
                </Card.Text>
                <Link to={`/detail/${id}`}> 
                <Button variant="danger">VER MAS</Button>
                </Link>  
            </Card.Body>
        </Card>
    )
}