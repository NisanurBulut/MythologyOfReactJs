import React, { Component } from 'react';
import { ThemeContext } from '../../containers/AppContextApi/contexts/ThemeContext';

class ThemeToggle extends Component {
  static contextType = ThemeContext; // burada erişimi sağlayabilmek için bu keywordler kullanılmak zorunda
  render() {
    const { toggleTheme } = this.context; // context içerisinden adı toggleTheme olan değişkeni al diyoruz burada
    return <button onClick={toggleTheme}>Toggle Theme</button>;
  }
}

export default ThemeToggle;
