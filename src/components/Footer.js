import React from 'react'
import {Container, Row, Col } from 'react-bootstrap'


const Footer = () => {
    return (
        <footer>
            <Container >
                <Row className='mx-auto px-1 py-5'>

                    
                <Col>
                    <Row className="row1"><span className="f1">Training and Placement Cell </span><br/> <span className="f2">School of Engineering, Tezpur University</span></Row>
                    <Row className="row2"><span className='f4'>T&amp;P Cell,Deans Building,<br/>School of Engineering,<br/>03712-273258 
                    <br/>pijush@tezu.ernet.in,<br/>tuplacement1@gmail.com <br/>tuplacement2@gmail.com</span>
                    </Row>
                </Col>

                <Col>
                </Col>

                <Col>
                    <Row className="row2"><span className='f3'>Events</span></Row>
                    <Row className="row2"><span className='f3'>Placements</span></Row>
                    <Row className="row2"><span className='f3'>Latest Job Postings</span></Row>
                    <Row className="row2"><span className='f3'>News&amp;Notifications</span></Row>

                </Col>

                <Col>
                    <Row className="row2"><span className='f3'>About Us</span></Row>
                    <Row className="row2"><span className='f3'>Home</span></Row>
                    <Row className="row2"><span className='f3'>People</span></Row>
                    

                </Col>

                <Col>
                    <Row className="row2"><span className='f3'>Visitors</span></Row>
                    <Row className="row2"><span className='f3'>Stories</span></Row>
                    <Row className="row2"><span className='f3'>Admin Console</span></Row>
                    

                </Col>

                </Row>
            </Container>
        
        </footer>
    )
}

export default Footer
 