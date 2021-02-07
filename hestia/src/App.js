import logo from './logo.svg';
import './App.css';
import  BookContextProvider from './contexts/BookContext';
import Navbar from './components/Navbar';
import BookList  from './components/BookList';
function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar/>
        <BookList />
      </BookContextProvider>
    </div>
  );
}

export default App;
