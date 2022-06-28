import React from "react";
import { Link } from "react-router-dom";

const ProfesoresTableRow = (props) => {
  const { id, name, university, degree } = props.professor;
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{university}</td>
      <td>{degree}</td>
      <td>
        <Link to={`/EditProfessor/${id}`} className="btn btn-warning">
          Editar
        </Link>
      </td>
      <td>
        <button className="btn btn-danger">Apagar</button>
      </td>
    </tr>
  );
};
export default ProfesoresTableRow;
