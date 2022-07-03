import React from "react";
import {Container,Row,Col, Card, Button} from 'react-bootstrap'

  
export default function App ({title, subtitle, img, followers}) {
  return (
        <div style={{margin: '20px'}}>
    <Card style={{ width: '18rem' , height: '20rem' }}>
                    <Card.Img variant="top" src={img} style = {{height: '11rem', objectFit:"cover"}}/>
                    <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    
                    <Card.Text>
                    
                         {subtitle}
                    </Card.Text>
                    <div style = {{ display: 'flex', flexFlow: 'row'}}>
                        <Button variant="primary">Follow</Button>
                        <div style = {{ color: 'grey', alignSelf: 'flex-end', position: 'relative', left: '40%'}}> {followers} Followers</div>
                    </div>
                    </Card.Body>
                    </Card>
                    </div>
  );
}