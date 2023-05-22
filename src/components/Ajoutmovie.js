import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Ajoutmovie({movies, setmovies}) {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newmovie, setnewmovie] = useState({
    name:"",
    posterurl:"",
    description:"",
    rating:0
  });
  const add = () => {setmovies([...movies, newmovie])}
  return (
    <div>
        <Button variant="warning" onClick={(handleShow)}>
        +
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>New movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie's title</Form.Label>
        <Form.Control type="text" placeholder="Movie name" onChange={(e) => setnewmovie({...newmovie, name:e.target.value})} />
        <Form.Label>Movie's description</Form.Label>
        <Form.Control type="text" placeholder="Movie description" onChange={(e) => setnewmovie({...newmovie, description:e.target.value})} />
        <Form.Label>Movie's rating</Form.Label>
        <Form.Control type="text" placeholder="Rating 1..5" onChange={(e) => setnewmovie({...newmovie, rating:e.target.value})} />
        <Form.Label>Movie's image</Form.Label>
        <Form.Control type="text" placeholder="image source" onChange={(e) => setnewmovie({...newmovie, posterurl:e.target.value})} />
      </Form.Group>
       </Form>
       </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => {add(); handleClose()}}>
            Add
          </Button>
          <Button variant="light" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Ajoutmovie