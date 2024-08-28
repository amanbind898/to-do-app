

function Addtodo({onButtonClick},) {
  
const getTask = () => {
    let task = document.querySelector('.input-text').value;
    return task;
  }
  const getDate = () => {
    let date = document.querySelector('input[type="date"]').value;
    return date;
  }

  return (
    <form className="row" onSubmit={() => onButtonClick(getTask(), getDate())}
    >
      <div className="col-6">
        <input
          className="input-text"
          type="text"
          placeholder="Enter the task here"
          
         
        />
      </div>
      <div className="col-4">
        <input
          type="date"
         
       
        />
      </div>
      <div className="col-2">
        <button
        type="submit"
          className="btn btn-success"
    
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default Addtodo;
