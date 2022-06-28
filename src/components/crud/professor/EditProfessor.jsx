import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { professores } from "./data.js";

const EditProfessor = () => {
  const [name, setName] = useState("");
  const [university, setUniversity] = useState("");
  const [degree, setDegree] = useState("");

  const params = useParams();

  useEffect(() => {
    const professor = professores[params.id];
    setName(professor.name);
    setUniversity(professor.university);
    setDegree(professor.degree);
  }, [params.id]);

  const handleSubmit = (event) => {};

  return (
    <div>
      <h2>Editar Professor</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome</label>
          <input
            type="text"
            className="form-control"
            value={name == null || name === undefined ? "" : name}
            name="name"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Curso</label>
          <input
            type="text"
            className="form-control"
            value={university ?? ""}
            university="university"
            onChange={(event) => setUniversity(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>IRA</label>
          <input
            type="text"
            className="form-control"
            value={degree ?? ""}
            degree="degree"
            onChange={(event) => setDegree(event.target.value)}
          />
        </div>
        <div className="form-group" style={{ paddingTop: 10 }}>
          <input
            type="submit"
            value="Editar professor"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default EditProfessor;
