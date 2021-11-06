import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./AddMovie.css";
import {Modal , Button } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";



const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const AddMovie = ({ setMovies, movies }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [photo, setPhoto] = useState("");
  const [description, setDescription] = useState("");
  const [addRate, setAddRate] = useState("");
  const addMovie = () => {
    let newMovie = {
      id: uuidv4(),
      posterUrl: photo,
      title: title,
      description: description,
      rate: addRate,
    };

    if (photo === "" || title === "" || addRate === ""){
      return alert("Fill all the blanks!");
    }

    setMovies([...movies, newMovie]);
    closeModal()
  };
  function openModal() {
    setIsOpen(!modalIsOpen);
  }
  function closeModal() {
    setIsOpen(false);
  }


  return (
    // <div className="addmovie">
    //   <input
    //     type="text"
    //     placeholder="title"
    //     onChange={(e) => setTitle(e.target.value)}
    //   />
    //   <input
    //     type="text"
    //     placeholder="photo"
    //     onChange={(e) => setPhoto(e.target.value)}
    //   />
    //   <input
    //     type="text"
    //     placeholder="description"
    //     onChange={(e) => setDescription(e.target.value)}
    //   />
    //   <button onClick={() => addMovie()}> Add</button>
    // </div>
    <div>
      <button onClick={openModal} className="stylingButton">Add Movie</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal">
    </Modal>

    {modalIsOpen && <Modal.Dialog>
  <Modal.Header closeButton>
  <input
        type="text"
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
      />
  </Modal.Header>
  

  <Modal.Body >
  <input
        type="text"
        placeholder="photo"
        onChange={(e) => setPhoto(e.target.value)}
      />
  <input
        type="text"
        placeholder="description"
        onChange={(e) => setDescription(e.target.value)}
      />
   <ReactStars
    count={5}
    onChange={(e)=> setAddRate(e)}
    size={24}
    activeColor="#ffd700"
  />,
  </Modal.Body>

  <Modal.Footer>
 
    <Button variant="primary"  onClick={() => addMovie()}>Add</Button>
  </Modal.Footer>
</Modal.Dialog>}
</div>
  );
};

export default AddMovie;
