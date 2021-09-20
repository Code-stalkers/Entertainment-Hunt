import React, { Component } from "react";

import { Modal, Button, Form, Card } from 'react-bootstrap'

class updateForm extends Component {



  render() {
    console.log(this.props.Id)
    return (
      <div>

        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Movie </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ width: '25rem' }}>


            {[ 'Success',].map((variant, idx) => (

              <Card border="danger"
                bg={variant.toLowerCase()}
                key={idx}
                text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                style={{ width: '18rem', hight: '10rem' }}
                className="mb-2"
              >
                <Card.Header>Movie Details</Card.Header>
                <Card.Img variant="left" src={this.props.Poster} />
                <Card.Body>
                  <Card.Title> {this.props.Title} </Card.Title>
                  <Card.Text>
                    You can Rank this Movies and share it with your friends
                    <br />
                    {this.props.type}
                    <br />
                    {this.props.Year}

                  </Card.Text>
                </Card.Body>
              </Card>))}


            <Form
              style={{ marginBottom: "300px" }}
              style={{ marginLeft: "180px" }}
              onSubmit={(e)=>this.props.updateComment(e,this.props.Id)}

            >


            <Form.Group className="mb-3" >
            <Form.Label>Add Your Review  </Form.Label>
            <Form.Control type ="text" name="comment" />
            </Form.Group>




            <Button variant="primary" type ="submit">
            Submit
            </Button>


      </Form>




          </Modal.Body>
          <Modal.Footer>

          </Modal.Footer>
        </Modal>


      </div >
    );
  }
}

export default updateForm;






// import React, { Component } from "react";

// import {Modal,Button,Form,Card} from 'react-bootstrap'

// class updateForm extends Component {



//   render() {
//     return (
//       <div>
//         <Modal show={this.props.show} onHide={this.props.handleClose}>
//           <Modal.Header closeButton>
//             <Modal.Title>Movie </Modal.Title>
//           </Modal.Header>
//           <Modal.Body style={{ width: '25rem' }}>


//          { [

//   'Success',

// ].map((variant, idx) => (

//           <Card border="danger"
//     bg={variant.toLowerCase()}
//     key={idx}
//     text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
//     style={{ width: '18rem',hight:'10rem' }}
//     className="mb-2"
//   >
//     <Card.Header>Movie Details</Card.Header>
//     <Card.Img variant="left" src={this.props.Poster} />
//     <Card.Body>
//       <Card.Title> {this.props.Title} </Card.Title>
//       <Card.Text>
//         You can Rank this Movies and share it with your friends
//         <br/>
//         {this.props.type}
//         <br/>
//         {this.props.Year}

//       </Card.Text>
//     </Card.Body>
//     </Card>))}



//           <Form
//           style={{ marginBottom: "300px" }}
//           style={{ marginLeft: "180px" }}

//           // onSubmit={this.props.updateMovie}


//         >
//           <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label>Add Your Review </Form.Label>
//             <Form.Control type="text" name="title" placeholder="Review"/>
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formBasicPassword">
//             <Form.Label>Rank </Form.Label>
//             <Form.Control
//               type="text"
//               name="description"
//               placeholder="Rank your movie" />

//           </Form.Group>


//           <Button variant="primary" type="submit">
//             Submit
//           </Button>
//         </Form>  





//           </Modal.Body>
//           <Modal.Footer>

//           </Modal.Footer>
//         </Modal>
//       </div>
//     );
//   }
// }

// export default updateForm;