import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Nav from './Nav';
import DogList from './DogList';
import DogDetails from './DogDetails';

function App(props) {
  return (
    <div className="App">
    <BrowserRouter>
      <Nav dogs={props.dogs}/>
      <Routes>
        <Route exact path="/dogs" element={<DogList dogList={props.dogs}/>}/>
        <Route exact path="/dogs/:name" element={<DogDetails dogs={props.dogs}/>}/>
        <Route path="*" element={<Navigate to="/dogs" replace/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: "/whiskey.jpg",
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: "/duke.jpg",
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: "/perry.jpg",
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: "/tubby.jpg",
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}
export default App;
