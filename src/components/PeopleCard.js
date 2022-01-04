import React from 'react'
import {Card} from "react-bootstrap"

function PeopleCard(props) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title>{props.title} </Card.Title>
                    <Card.Text>
                        {props.text}
                    </Card.Text>
    
                </Card.Body>
            </Card>
        </div>
    )
}

export default PeopleCard