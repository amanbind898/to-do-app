
function Addtodo({onButtonClick,todoName,todoDate}) {
  
  return (
    <form className="row" onSubmit={(event) => onButtonClick(event,todoName,todoDate)}>
    
      <div className="col-6">
        <input
          ref={todoName} // Assign the ref to the input element
          //ref={todoName}  todoName.current.value tells you the value of the input field
          //all method of ref are :
          //current: This property is used to access the DOM element.
          //constructor: This property is used to create a new ref object.
          //prototype: This property is used to access the prototype of the ref object.
          //toString(): This method is used to convert the ref object to a string.
          
          className="input-text"
          type="text"
          placeholder="Enter the task here"
          
         
        />
      </div>
      <div className="col-4">
        <input placeholder="Enter the due date" className="input-text"
          ref={todoDate}
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
