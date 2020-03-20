import Star from "./Star";
import React, { Component } from "react";

export default class Recherche extends Component {
  state = {
    ratingnumber: 0
  };
  oncli = e => {
    this.props.ratingrise(e);
    this.setState({
      ratingnumber: e
    });
  };
  render() {
    return (
      <div className="search">
        <input
          className="entre"
          type="text"
          value={this.props.input}
          onChange={e => this.props.newvalue(e.target.value)}
        />
        <button className="btnsrch" onClick={this.props.recherche}>
          SEARCH
        </button>
        <div className="stars">
          <h5>Minimum Rating</h5>
          <i className="star">
            <Star rate={this.state.ratingnumber} oncli={this.oncli} />
          </i>
        </div>
      </div>
    );
  }
}
