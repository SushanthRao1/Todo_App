import './App.css';
import Router from './router'
import TodoList from '../src/components/ToDoList/TodoList';
import Classcomp from '../src/components/reactBasics/Classcomp';
import Movie from './components/reactBasics/Funcomp.jsx';
import UseStateHK from './components/reactBasics/useStateHK.jsx';
import APIDemo from './components/reactBasics/ApiDemo.jsx';
import Calculator from './components/reactBasics/Statecomp.jsx';
import EveneChange from './components/reactBasics/InputEvent.jsx';
import UseReducer from './components/reactBasics/useReducer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css' //it will support all the other components
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";


function Linksfun() {
  return (<div>
    <Link to="/">HOME</Link> <br />
    <Link to="/TodoList">TodoList</Link> <br />
    <Link to="/Calculator">Calculator</Link> <br />
    <Link to="/Classcomp">Classcomp</Link> <br />
    <Link to="/Eventchange">EventHandler</Link><br />
    <Link to="/APIDemo">APIDEMO</Link><br />
    <Link to="/Movie">FunctionalComp</Link><br />
    <Link to="/UseStateHK">UseStateHooK</Link><br />
    <Link to="/UseReducer">UseReducer</Link><br /></div>)
}

function Routerfun() {
  return (<div>
    <BrowserRouter>
      <Routes>
        <Route path="/TodoList"><TodoList /></Route>
        <Route path="/Calculator"><Calculator /></Route>
        <Route path="/Classcomp"><Classcomp /></Route>
        <Route path="/Eventchange"><EveneChange /></Route>
        <Route path="/APIDemo"><APIDemo /></Route>
        <Route path="/Movie"><Movie /></Route>
        <Route path="/UseStateHK"><UseStateHK /></Route>
        <Route path="/UseReducer"><UseReducer /></Route>
      </Routes>
    </BrowserRouter>
  </div>)
}

// function App() {
//   return (
//     <div className="App">
//       <Router />

//     </div >
//   );
// }

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
