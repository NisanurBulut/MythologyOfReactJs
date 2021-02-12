import React, { Component, createContext } from 'react';

export const FormContext = createContext();

class FormContextProvider extends Component {
  state = {
    isFormOpen: false,
  };
  toggleForm = () => {
    console.log(this.state.isFormOpen);
    this.setState({ isFormOpen: !this.state.isFormOpen });
  };
  render() {
    return (
      <FormContext.Provider
        value={{ ...this.state, toggleForm: this.toggleForm }}
      >
        {this.props.children}
      </FormContext.Provider>
    );
  }
}

export default FormContextProvider;
