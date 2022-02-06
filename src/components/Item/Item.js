import { Button, Card } from "react-bootstrap"


export const Item = ( {id, nombre, precio, img} ) => {

    return (
        
        <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                  <div className="letrasNegras"> Precio por dia: US${precio}</div> 
                </Card.Text>
                <Button variant="danger">RESERVAR</Button>
            </Card.Body>
        </Card>
    )
}