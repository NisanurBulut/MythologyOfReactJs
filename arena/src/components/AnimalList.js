import React, { Component } from 'react';
import Animal from './Animal';
import { animalConsumer } from "../context";
class AnimalList extends Component {
  render() {
    return (
      <animalConsumer>
        {(value) => {
          const { animalList } = value;
          return (
            <div>
              {animalList.map((animal) => {
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
      </animalConsumer>
    );
  }
}
export default AnimalList;
