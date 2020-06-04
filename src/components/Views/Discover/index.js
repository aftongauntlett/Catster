import React, { Component } from "react";
import axios from "axios";
import "./styles.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default class CatList extends Component {
  state = {
    imageURL: "",
    search: "",
    users: [],
    score: 0,
  };

  componentDidMount() {
    this.getNewImage();
  }

  getNewImage() {
    axios("https://api.thecatapi.com/v1/images/search?limit=1").then((resp) => {
      this.setState({
        imageURL: resp.data[0].url,
      });
    });
  }

  love = () => {
    this.getNewImage();
    const randomNum = Math.floor(Math.random() * 10);
    console.log(randomNum);
    if (randomNum <= 3) {
      this.setState({
        score: this.state.score + 1,
      });
    }
  };

  pass = () => {
    this.getNewImage();
  };

  getRandomCat() {
    return (
      <Card className="catCard">
        <Card.Title>Admire the cat</Card.Title>
        <Card.Body>
          <Card.Img
            className="discoverCatImg"
            variant="top"
            src={this.state.imageURL}
          />
          <Card.Text>Do you love this cat?</Card.Text>

          <Button
            onClick={this.love}
            className="catButtonLeft"
            variant="success"
          >
            Yes!
          </Button>
          <Button
            onClick={this.pass}
            className="catButtonRight"
            variant="danger"
          >
            Nope.
          </Button>
          <Card.Text> {this.state.score} Cats tolerate you so far.</Card.Text>
        </Card.Body>
      </Card>
    );
  }

  render() {
    return (
      <div className="d-flex justify-content-center">{this.getRandomCat()}</div>
    );
  }
}
