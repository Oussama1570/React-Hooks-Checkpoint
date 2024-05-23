import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Title from 'antd/es/skeleton/Title';
import { Rate } from 'antd';



const AddMovie = ({ add }) => {
  

  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  // initialisation : 

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState("");
  const [poster, setPoster] = useState("");
 


// update state:


const handleTitle = (e) => { 
  setTitle(e.target.value)
};


const handDescription = (e) => { 
  setDescription(e.target.value)
};



const handleRate = (e) => { 
  setRate(e.target.value)
};



const handlePoster = (e) => { 
  setPoster(e.target.value)
};



// function add :

const handleAdd = (e) => {

   let newMovie = { title, description, rate, poster};
    add(newMovie);
}


  return (
    <div>



<Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter Title"  value={title}  onChange={(e) => handleTitle(e)}/>

        <Form.Label>Description</Form.Label>
        <Form.Control type="email" placeholder="Enter description" value={description}  onChange={(e) => handDescription(e)} />

        <Form.Label>Email address</Form.Label>
        <Form.Control type="number" placeholder="Enter rate"  value={rate}  onChange={(e) => handleRate(e)}/>

        <Form.Label>Email address</Form.Label>
        <Form.Control type="url" placeholder="Enter poster" value={poster}  onChange={(e) => handlePoster(e)} />

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>














    </div>
  );
};

export default AddMovie;