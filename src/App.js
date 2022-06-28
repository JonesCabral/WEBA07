import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

//import "./App.css";

import Home from "./components/Home";
import About from "./components/About";

import CreateStudent from "./components/crud/student/CreateStudent";
import ListStudent from "./components/crud/student/ListStudent";
import EditStudent from "./components/crud/student/EditStudent";

import CreateProfessor from "./components/crud/professor/CreateProfessor";
import ListProfessor from "./components/crud/professor/ListProfessor";
import EditProfessor from "./components/crud/professor/EditProfessor";

//import Page1 from "./components/Page1";
//import Page2 from "./components/Page2";

<>
  <Route path="listStudent" element={<ListStudent setShowToast={setShowToast} setToast={setToast} />} /><Route path="editStudent/:id" element={<EditStudent setShowToast={setShowToast} setToast={setToast} />} /></>

function App() {
  function studentDropDown() {
    return (
      <li class="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href=""
          id="navbarDropdownMenuLink"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Estudante
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li className="navitem">
            <Link to="/createStudent" className="nav-link">
              Criar Estudante
            </Link>
          </li>
          <li className="navitem">
            <Link to="/listStudent" className="nav-link">
              Listar Estudante
            </Link>
          </li>
        </ul>
      </li>
    );
  }

  function professorDropDown() {
    return (
      <li class="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Professor
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li className="navitem">
            <Link to="/createProfessor" className="nav-link">
              Criar Professor
            </Link>
          </li>
          <li className="navitem">
            <Link to="/ListProfessor" className="nav-link">
              Listar Professor
            </Link>
          </li>
        </ul>
      </li>
    );
  }

  return (
    <div className="container">
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <Link to={"/"} className="navbar-brand" style={{ paddingLeft: 10 }}>
          CRUD
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="navitem">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="navitem">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            {studentDropDown()}
            {professorDropDown()}
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />

        <Route path="createStudent" element={<CreateStudent />} />
        <Route path="listStudent" element={<ListStudent />} />
        <Route path="editStudent/:id" element={<EditStudent />} />

        <Route path="createProfessor" element={<CreateProfessor />} />
        <Route path="listProfessor" element={<ListProfessor />} />
        <Route path="editProfessor/:id" element={<EditProfessor />} />
      </Routes>
    </div>
  );
}

export default App;
