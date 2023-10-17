import React from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const ACard = ({ data, isLoading }) => {
    console.log(data);
    return (
        <>
            {isLoading ? (
                <div>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            ) : (
                <Row>
                    {
                        data.map(({id, title, body}) => {
                            return (
                                <Col key={id} className='mb-4'>
                                    <Card style={{ width: '18rem', height:'20rem' }}>
                                        <Card.Body>
                                            <Card.Title>{title}</Card.Title>
                                            <Card.Text>{body}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            )}
        </>
    );
};

export default ACard;