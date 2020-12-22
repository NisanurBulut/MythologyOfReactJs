import React, { Component } from 'react'

const animalContext = React.createContext();
// Producer, Consumer
export class animalProvider extends Component {
    state = {
        animals:[
            {
                commonName:"Gray Wolf",
                spesificName:"Canis lupus",
                type:"Mammals",
                groupName:"Pack",
                image:"https://unsplash.com/photos/1AIYdIb3O5M"
            }
        ]
    }
    render() {
        return (
            <animalContext.Provider value={this.state}>
                {this.props.children}
            </animalContext.Provider>
        )
    }
}
const animalConsumer = animalContext.Consumer;
export default animalConsumer;