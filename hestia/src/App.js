import logo from './logo.svg';
import './App.css';
import  BookContextProvider from './contexts/BookContext';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar/>
      </BookContextProvider>
    </div>
  );
}

export default App;
