import React from "react";
import { Navbar, Nav, Container} from "react-bootstrap";
import AddMovie from "../AddMovie/AddMovie";
import Search from "../Filter/Search";
import ReactStars from "react-rating-stars-component";

const NavBar = ({ setMovies, movies, setFilterSearch, setRate }) => {
  // const ratingChanged = (newRating) => {
  //   console.log(newRating);
  // };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">MovieApp</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"> 
              <Nav.Link href="#pricing">All movies</Nav.Link>
            </Nav>
            <Nav>
              <AddMovie setMovies={setMovies} movies={movies} />
              <ReactStars
                count={5}
                onChange={(e)=> setRate(e)}
                
                size={24}
                activeColor="#ffd700"
              />,
              <Search setFilterSearch={setFilterSearch} />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
