import React from "react";
import Movie from "./Component/Movie";
import WithLoading from "./Component/WithLoading.js";
import "./App.css";
const ListWithLoading = WithLoading(Movie);

// function App() {
//   return (
//     <div className="App">
//       <Movie />
//     </div>
//   );
// }

// export default App;
// import React, { Component } from 'react'

export default class App extends React.Component {
  state = {
    loading: false,
    repos: null
  };
  componentDidMount() {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 10000);
  }
  render() {
    return (
      <div>
        <ListWithLoading
          isLoading={this.state.loading}
          repos={this.state.repos}
        />
        {/* <Movie /> */}
      </div>
    );
  }
}
