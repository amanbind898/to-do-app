
const Todoitems = ({ todoitems,handleDelete}) => {
  return (
    todoitems.map((x) => (
      <div key={x.id} className="row myrow">
        <div className="col-6">
          {x.name}
        </div>
        <div className="col-4">
          {x.dueDate}
        </div>
        <div className="col-2">
          <button 
            type="button" 
            className="btn btn-danger" 
            onClick={() => handleDelete(x.id)}
          >
            Delete
          </button>
        </div>
      </div>
    ))
  );
}

export default Todoitems;
