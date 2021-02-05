import React, {Component} from 'react'
import StyledPerson from './Person.css';
import Auxiliary from '../../../hoc/Auxiliary';
class Person extends Component {
    constructor(props){
        super(props);
    }
    render (){
        return(
            <React.Fragment>
                <h1 onClick={this.props.click}>I'm {this.props.name}
            && I love numbers for example : {this.props.number}</h1>
            <p>{this.props.children}</p>
            <input type="text"
            onChange={this.props.changed} value={this.props.name} />
            </React.Fragment>
        // <div className={StyledPerson.Person}>
        //     <h1 onClick={this.props.click}>I'm {this.props.name}
        //     && I love numbers for example : {this.props.number}</h1>
        //     <p>{this.props.children}</p>
        //     <input type="text"
        //     onChange={this.props.changed} value={this.props.name} />
        // </div>
        );
    }
}
export default Person;
