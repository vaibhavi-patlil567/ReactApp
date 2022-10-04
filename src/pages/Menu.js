import React from "react";
import { Link } from "react-router-dom";

import { CardBody, Container, Card, ListGroup, ListGroupItem} from 'reactstrap';

const Menu = () => {
    return (

        <Container>
            <br /><br /><br /> <br /> <br /> <br /> <br /> <br /> <br />
            <Card className="my-10 bg-warning  ">
                <CardBody>
                    <ListGroup>

                        
                    <Link className="list-group-item list-group-item-action" tag="a" to="/" action>
                            Home
                        </Link> 
                 
                         <Link className="list-group-item list-group-item-action" tag="a" to="/view-products" action>
                            View 
                        </Link> 
                     

                        <Link className="list-group-item list-group-item-action" tag="a" to="/add-products" action>
                            Add 
                        </Link> 

                        <Link className="list-group-item list-group-item-action" tag="a" to="/update-products" action>
                            Update 
                        </Link>

                        <Link className="list-group-item list-group-item-action" tag="a" to="/delete-products" action>
                            Delete
                        </Link>

                    </ListGroup>
                </CardBody>
            </Card>

        </Container>

    );
};

export default Menu;