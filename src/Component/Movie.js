import React, { Component } from "react";
import Star from "./Star";
import Modal from "./Modal";
import Recherche from "./Recherche";

export default class Movie extends Component {
  state = {
    b: [
      {
      image:
          "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
        name: "Inception",
        an: "2010",
        rate: 1
      },
      {
        image:
          "https://upload.wikimedia.org/wikipedia/en/thumb/0/06/Ultimate_Matrix_Collection_poster.jpg/220px-Ultimate_Matrix_Collection_poster.jpg",
        name: "the matrix",
        an: "1999",
        rate: 2
      },
      {
        image:
          "https://upload.wikimedia.org/wikipedia/en/8/8b/Django_Unchained_Poster.jpg",
        name: "Django Unchained",
        an: "2012",
        rate: 3
      },
      {
        image:
          "https://upload.wikimedia.org/wikipedia/en/4/48/Mission_Impossible_II.jpg",
        name: "Mission: Impossible 2",
        an: "2000",
        rate: 4
      },
      {
        image:
          "https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/First_blood_poster.jpg/220px-First_blood_poster.jpg",
        name: "First Blood" ,
        an: "1982",
        rate: 5
      }
    ],
    name: "",
    image: "",
    an: "",
    rate: "",
    input: "",
    input2: "",
    ratesearchvalue: "",
  };

  ajouter = e => {
    this.setState({
      b: [
        ...this.state.b,
        {
          image: this.state.image,
          name: this.state.name,
          an: this.state.an,
          rate: this.state.rate
        }
      ],
      name: "",
      image: "",
      an: "",
      rate: ""
    });
  };
  changer = f => {
    this.setState({ name: f.target.value });
  };

  changer1 = e => {
    this.setState({ image: e.target.value });
  };
  changer2 = e => {
    this.setState({ an: e.target.value });
  };
  changer3 = e => {
    this.setState({ rate: e.target.value });
  };

  newvalue = x => {
    this.setState({ input: x });
  };
  recherche = e => {
    this.setState({
      input2: this.state.input,
      input: ""
    });
  };

  oncli = e => {
    "do nothing here!";
  };
  ratesearch = e => {
    this.setState({
      ratesearchvalue: e
    });
  };

  render() {
    return (
      <div className="movies">
        <Recherche
          newvalue={this.newvalue}
          input={this.state.input}
          recherche={this.recherche}
          b={this.state.b}
          cancel={this.cancel}
          ratingrise={this.ratesearch}
        />
        <div className="movie">
          {this.state.b
            .filter(el =>
              el.name.toLowerCase().includes(this.state.input2.toLowerCase())
            )
            .filter(movie => this.state.ratesearchvalue <= movie.rate)
            .map(el => (
              <div className="imgfilm">
                <Star rate={el.rate} oncli={this.oncli} />
                <img src={el.image} alt="logo"></img>
                <div className="name">{el.name}</div> <br />
                <div className="name">{el.an}</div>
              </div>
            ))}
          <div className="imgfilm">
            <Modal
              ajt={this.ajouter}
              chng={this.changer}
              name={this.state.name}
              chng1={this.changer1}
              image={this.state.image}
              chng2={this.changer2}
              an={this.state.an}
              chng3={this.changer3}
              rate={this.state.rate}
            />
          </div>
        </div>
      </div>
    );
  }
}
