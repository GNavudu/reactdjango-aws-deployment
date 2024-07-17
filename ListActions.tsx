function ListActions() {
  const myActions = ["sum"];
  return (
    <>
      <h1>List</h1>
      <ul className="list-actions">
        <li className="list-actions-item">Sum</li>
        <li className="list-actions-item">subtract</li>
        <li className="list-actions-item">multiple</li>
        <li className="list-actions-item">divide</li>
      </ul>
    </>
  );
}

export default ListActions;
