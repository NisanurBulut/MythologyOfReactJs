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
            <div className="mt-2 row">
              {animals.map((animal) => {
                return (
                 <div className="col-lg-4 col-md-4 col-sm-4 col-xs-6"  key={animal.id}>
                    <Animal
                  key={animal.id}
                  id={animal.id}
                  commonName={animal.commonName}
                  spesificName={animal.spesificName}
                  type={animal.type}
                  groupName={animal.groupName}
                  image={animal.image}
                />
                 </div>
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
