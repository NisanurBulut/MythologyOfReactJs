import React, { Component } from 'react';
import Animal from './Animal';
import AnimalConsumer from "../context";
class AnimalList extends Component {
  render() {
    return (
      <AnimalConsumer>
        { value => {
          const { animals } = value;
          return (
            <div>
              {animals.map((animal) => {
                return (
                  <Animal
                    key={animal.id}
                    id={animal.id}
                    commonName={animal.commonName}
                    spesificName={animal.spesificName}
                    type={animal.type}
                    groupName={animal.groupName}
                    image={animal.image}
                  />
                );
              })}
            </div>
          );
        }}
      </AnimalConsumer>
    );
  }
}
export default AnimalList;
