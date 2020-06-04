import React, { Component } from "react";
import axios from "axios";
import "./styles.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default class CatList extends Component {
  state = {
    search: "",
    users: [],
  };

  // component did mount function, which will go get a list of cats.
  //  store that list of cats in the components state
  //  then getrandomcat needs to select one of those cats at random
  // build card using that cat

  getRandomCat() {
    return (
      <Card className="catCard">
        <Card.Img
          variant="top"
          src="https://api.thecatapi.com/v1/images/search?api_key=56c151e1-0419-430a-85f1-85b5a51c2175"
        />
        <Card.Body>
          <Card.Title>Admire the cat</Card.Title>
          <Card.Text>Do you love this cat?</Card.Text>
          <Button className="catButtonLeft" variant="success">
            Love
          </Button>
          <Button className="catButtonRight" variant="danger">
            Pass
          </Button>

          {/* This needs to keep track of likes */}
          <Card.Text>0 Cats tolerate you so far.</Card.Text>
        </Card.Body>
      </Card>
    );
  }

  componentDidMount() {
    axios(
      "https://api.thecatapi.com/v1/images/search?api_key=56c151e1-0419-430a-85f1-85b5a51c2175"
    ).then((resp) => {
      this.setState({ users: resp.data.results });
      console.log(resp);
    });
  }

  // }
  // getCatsofBreed(breed) {
  //   return axios.get(
  //     "https://api.thecatapi.com/v1/breeds" +
  //       breed +
  //       "/images?api_key=56c151e1-0419-430a-85f1-85b5a51c2175"
  //   );
  // }
  // getCategory() {
  //   return axios.get(
  //     "https://api.thecatapi.com/v1/categories?api_key=56c151e1-0419-430a-85f1-85b5a51c2175"
  //   );
  // }

  render() {
    return (
      <div className="d-flex justify-content-center">{this.getRandomCat()}</div>
    );
  }
}
