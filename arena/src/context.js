import React, { Component } from 'react';

const AnimalContext = React.createContext();
// Producer, Consumer

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_ANIMAL':
      return {
        ...state, // eski
        animals: state.animals.filter((animal) => action.payload !== animal.id), // yeni
      };
    default:
      return state;
  }
};

export class AnimalProvider extends Component {
  state = {
    animals: [
      {
        id: 1,
        commonName: "Gray Wolf",
        spesificName: "Canis lupus",
        type: "Mammals",
        groupName: "Pack",
        image:'https://images.unsplash.com/photo-1607350999170-b893fef057ea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      },
    ],
    dispathc: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };
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
