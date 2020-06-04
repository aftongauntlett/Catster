import React, { Component } from "react";
import "./styles.css";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

export default class index extends Component {
  state = {
    imageURL: "",
    search: "",
    breeds: [],
    selectedBreed: {},
  };

  componentDidMount() {
    axios("https://api.thecatapi.com/v1/breeds").then((resp) => {
      this.setState({
        breeds: resp.data.map((breed) => {
          return breed.name;
        }),
        rawBreeds: resp.data,
      });
    });
  }

  onSubmit(event) {
    event.preventDefault();
  }

  breedList() {
    return this.state.breeds.map((breed) => {
      return <option value={breed}></option>;
    });
  }

  breedImage() {
    return this.state.breeds.map((breedImage) => {
      return <option value={breedImage}></option>;
    });
  }

  getImage(breed) {
    const url = "https://api.thecatapi.com/v1/images/search?breed_ids=" + breed;
    axios.get(url).then((resp) => {
      console.log(resp.data);
      this.setState({
        imageURL: resp.data[0].url,
      });
    });
  }

  selectBreed = (event) => {
    const breed = this.state.rawBreeds.filter((breed) => {
      return breed.name === event.target.value;
    })[0];
    if (breed) {
      this.setState({
        selectedBreed: breed,
      });
      this.getImage(breed.id);
    }
  };

  image() {
    if (this.state.imageURL !== "") {
      return (
        <Card.Img
          className="breedImage"
          variant="top"
          src={this.state.imageURL}
        />
      );
    }
  }

  searchBreedCat() {
    return (
      <Card className="catCard">
        <Form className="search" onSubmit={this.onSubmit}>
          <div className="form-group">
            {this.image()}
            <Card.Title>Breed Name:</Card.Title>
            <input
              onChange={this.selectBreed}
              className="searchBar form-control"
              type="text"
              name="breed"
              list="breeds"
              placeholder="Search by Breed"
              id="breed"
            ></input>
            <datalist id="breeds">{this.breedList()}</datalist>
          </div>
        </Form>
      </Card>
    );
  }

  render() {
    return (
      <div className="d-flex justify-content-center">
        {this.searchBreedCat()}
      </div>
    );
  }
}
