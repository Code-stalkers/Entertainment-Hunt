import React, { Component } from 'react'
import { Card, Modal } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';



export class ModalInfo extends Component {
    render() {
        const {user,isAuthenticated} = this.props.auth0;

        return (
            
            <div>
                  <Modal show={this.props.show}onHide={this.props.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>User Info</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Card>
                           
                            <Card.Body>
                                <>
                                    {isAuthenticated &&
                                        <>
                                         <Card.Img variant="top" src={user.picture} />
                                            <Card.Title>{user.name}</Card.Title>
                                            <Card.Title>{user.email}</Card.Title>
                                        </>
                                    }
                                </>

                            </Card.Body>
                        </Card>
                    </Modal.Body>
                </Modal>

            </div>
        )
    }
}

export default withAuth0(ModalInfo);
