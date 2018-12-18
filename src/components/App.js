import React, { Component } from 'react';
import './App.css';

import { get } from "../services/auction";
import CarCard from "./carCard/CarCard";

//components
import Navbar from './navbar/Navbar';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cars: []
    }
  }

  componentWillMount() {
    this.getData();
  }

  getData = () => {
    get()
      .then(response => this.setState({ cars: response.data }))
      .catch(err => alert(err));
  }

  render() {

    let cars = this.state.cars;

    return (
      <div className="App">
        <Navbar></Navbar>

        <div className="container">
          {cars.map((item, index) => <CarCard key={item.id} car={item}></CarCard>)}
        </div>
      </div>
    );
  }
}

export default App;
