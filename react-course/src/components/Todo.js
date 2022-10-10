function Todo(props) {
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="button">Delete</button>
      </div>
    </div>
  );
}

export default Todo;
//should start with capital character
