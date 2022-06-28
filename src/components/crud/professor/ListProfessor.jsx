import React from "react";
import { professores } from "./data";
import ProfessoresTableRow from "./ProfesoresTableRow";

const ListProfessor = () => {
  function generateTable() {
    if (!professores) return;
    return professores.map((professores, i) => {
      return <ProfessoresTableRow professor={professores} key={i} />;
    });
  }

  return (
    <div>
      <h2>Listar Professores</h2>
      <table className="table table-striped">
        <thead>
          <th>ID</th>
          <th>Nome</th>
          <th>university</th>
          <th>degree</th>
          <th colSpan="2"></th>
        </thead>
        <tbody>{generateTable()}</tbody>
      </table>
    </div>
  );
};

export default ListProfessor;
