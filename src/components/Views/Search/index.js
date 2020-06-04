import React, { Component } from "react";
import "./styles.css";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default class index extends Component {
  state = {
    search: "",
    breeds: [],
  };

  componentDidMount() {
    axios("https://api.thecatapi.com/v1/breeds").then((resp) => {
      this.setState({
        breeds: resp.data.map((breed) => {
          return breed.name;
        }),
      });
    });
  }

  onSubmit(event) {
    event.preventDefault();

    // custom form handling here
  }

  // getCatsofBreed(breed) {
  //   return axios.get(
  //     "https://api.thecatapi.com/v1/breeds" +
  //       breed +
  //       "/images?api_key=56c151e1-0419-430a-85f1-85b5a51c2175"
  //   );

  breedList() {
    return this.state.breeds.map((breed) => {
      return <option value={breed}></option>;
    });
  }

  render() {
    return (
      <div className="d-flex justify-content-center">
        <Form className="search" onSubmit={this.onSubmit}>
          <div className="form-group">
            <label className="breedLabel">Breed Name:</label>
            <input
              className="searchBar form-control"
              type="text"
              name="breed"
              list="breeds"
              placeholder="Search by Breed"
              id="breed"
            ></input>
            <datalist id="breeds">{this.breedList()}</datalist>
            <Button className="searchButton" variant="dark" type="submit">
              Search
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

// <div className="d-flex justify-content-center">
//   <input
//     className="searchBar"
//     value={this.state.search}
//     onChange={this.handleInputChange}
//     type="text"
//     placeholder="Search by Breed"
//   />
// </div>

// <Form.Group controlId="exampleForm.ControlSelect1">
//   <Form.Label>Example select</Form.Label>
//   <Form.Control as="select">
//     <option>1</option>
//     <option>2</option>
//     <option>3</option>
//     <option>4</option>
//     <option>5</option>
//   </Form.Control>
// </Form.Group>

//   <Form.Group controlId="exampleForm.ControlTextarea1">
//     <Form.Label>Example textarea</Form.Label>
//     <Form.Control as="textarea" rows="3" />
//   </Form.Group>
