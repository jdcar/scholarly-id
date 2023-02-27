import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import Categories from './Accordians'
import './App.css';
import Star from './star.png'

function App() {
  return (
    <div className="App">
      <h1>Managing Your Online Scholarly Identity</h1>
      <h4>This site is designed to walk through the process of creating and updating your online scholarly identity.</h4>
      <p>Created by Jamie Carlstone, Authority Metadata Librarian at Northwestern University for the workshop Managing your Scholarly Identity Online</p>
      <p> <> The <img alt="star" display= "block" width= "25pt" src={Star}></img>  indicates highest priority</></p>
      <Categories/>
    </div>
  );
}

export default App;
