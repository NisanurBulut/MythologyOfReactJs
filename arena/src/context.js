import React, { Component } from 'react';
import axios from 'axios';
const AnimalContext = React.createContext();
// Producer, Consumer
// Reducer'ın görevi sadece state değiştirmek olmalı
const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_ANIMAL':
      return {
        ...state, // eski
        animals: state.animals.filter((animal) => action.payload !== animal.id), // yeni
      };
    case 'ADD_ANIMAL':
      return {
        ...state, // eski
        animals: [...state.animals, action.payload],
      };
    case 'OPEN_FORM':
      return {
        ...state, // eski
        visible: action.payload,
      };
    default:
      return state;
  }
};

export class AnimalProvider extends Component {
  state = {
    visible: false,
    animals: [],
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };
  componentDidMount = async () => {
    const response = await axios.get('http://localhost:3001/animals');
    this.setState({
      animals: response.data,
    });
  };
  render() {
    return (
      <AnimalContext.Provider value={this.state} >
        {this.props.children}
      </AnimalContext.Provider>
    );
  }
}
const AnimalConsumer = AnimalContext.Consumer;
export default AnimalConsumer;
