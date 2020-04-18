import React from 'react';

export default props => (
  <table className="table" style={{ cursor: "pointer" }}>
    <thead>
      <tr>
        <th onClick={props.onSort.bind(null, "id")}>
          Coder {props.sortField === "id" ? <small>{props.sort}</small> : null}
        </th>
        <th onClick={props.onSort.bind(null, "score")}>
          SCORE {props.sortField === "score" ? <small>{props.sort}</small> : null}
        </th>
      </tr>
    </thead>
    <tbody>
      {props.data.map(item => (
        <tr
          key={item.id + item.phone}
          onClick={props.onRowSelect.bind(null, item)}
        >
          <td>{item.id}</td>
          {/*<td>{item.firstName}</td>*/}
          {/*<td>{item.lastName}</td>*/}
          {/*<td>{item.email}</td>*/}
          {/*<td>{item.phone}</td>*/}
          <td>{item.score}</td>
        </tr>
      ))}
    </tbody>
  </table>
);