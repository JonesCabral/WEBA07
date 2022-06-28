import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RestrictPage from "../../../utils/RestrictPage";

const CreateProfessor = () => {
  const [name, setName] = useState("");
  const [university, setUniversity] = useState("");
  const [degree, setDegree] = useState("");

  const handleSubmit = (event) => {};


  (firebase) => {
    return (
        <RestrictPage isLogged={firebase.getUser()!=null}>
            <CreateProfessor 
                firebase={firebase}
                setShowToast={setShowToast}
                setToast={setToast}/>
        </RestrictPage>
    )

}


  return (
    <div>
      <h2>Criar CreateProfessor</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={name == null || name === undefined ? "" : name}
            name="name"
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label>university</label>
          <input
            type="text"
            className="form-control"
            value={university ?? ""}
            university="university"
            onChange={(event) => setUniversity(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label>degree</label>
          <input
            type="text"
            className="form-control"
            value={degree ?? ""}
            name="degree"
            onChange={(event) => setDegree(event.target.value)}
          />
        </div>

        <div className="form-group" style={{ paddingTop: 10 }}>
          <input
            type="submit"
            value="Criar Professor"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateProfessor;
