import React, { Component, createContext } from 'react';
export const ThemeContext = createContext();

// Bir Context nesnesi oluşturur.
// React, bu Context nesnesine abone bir bileşen oluşturduğunda,
// context’in mevcut değerini ağaçtaki en yakın Provider'dan okuyacaktır.
class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: { style: '#555', ui: '#ddd', bg: '#eee' },
    dark: { style: '#ddd', ui: '#333', bg: '#555' },
  };
  toggleTheme = () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
  };
  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state, toggleTheme:this.toggleTheme }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
/**
 * Her Context nesnesi, tüketici bileşenlerin context güncellemelerine abone olmasını sağlayan
 * bir React Provider bileşeni ile birlikte gelir.
 * Provider bileşeni, bu Provider’ın soyundan gelen tüketici bileşenlerine geçirilecek olan
 * bir value prop’unu kabul eder. Birçok tüketici bir Provider’a bağlanabilir.
 * Provider’lar ağaçtaki daha derin değerleri değiştirmek için iç içe geçirilebilirler.
 * Bir Provider’ın soyundan gelen tüm tüketiciler, Provider’ın value prop’u her değiştiğinde yeniden oluşturulur.
 * Provider’ın soyundan gelen tüketicilere (.contextType ve useContext de dahil olmak üzere) yayılması,
 * shouldComponentUpdate metoduna tabi değildir,
 * dolayısıyla herhangi bir bileşen güncellemeyi önlediğinde bile tüketici güncellenir.
 */
