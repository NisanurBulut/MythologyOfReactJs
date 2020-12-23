import React, { Component } from 'react';

const AnimalContext = React.createContext();
// Producer, Consumer

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_ANIMAL":
      return {
        ...state, // eski
        animals: state.animals.filter((animal) => action.payload !== animal.id), // yeni
      }
      case "ADD_ANIMAL":
      return {
        ...state, // eski
        animals:[...state.animals, action.payload]
      }
      case "OPEN_FORM":
        return {
          ...state, // eski
          visible:action.payload
        }
    default:
      return state;
  }
};

export class AnimalProvider extends Component {
  state = {
    visible:false,
    animals: [],
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    }
  }
  render() {
    return (
      <AnimalContext.Provider value={this.state}>
        {this.props.children}
      </AnimalContext.Provider>
    );
  }
}
const AnimalConsumer = AnimalContext.Consumer;
export default AnimalConsumer;
