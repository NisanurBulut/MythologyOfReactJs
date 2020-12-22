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
        commonName: 'Gray Wolf',
        spesificName: 'Canis lupus',
        type: 'Mammals',
        groupName: 'Pack',
        image: 'https://unsplash.com/photos/1AIYdIb3O5M',
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
