import React, { Component } from 'react';
import moment from 'moment';
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
      .then(response => {
        var sortedData = [];

        response.data.sort((a, b) => moment.duration(a.remainingTime) - moment.duration(b.remainingTime));

        for(var i in response.data) 
          sortedData.push(response.data[i]); 

        this.setState({ cars: sortedData });
      })
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
