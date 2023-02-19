import { useRef } from "react";

let ExpenseForm = (props) => {

    // Hooks - use--
    let nameRef = useRef();
    let dateRef = useRef();
    let valueRef = useRef();
    let descriptionRef = useRef();


    let onSubmitHandler = (event) => {
        event.preventDefault();
        if (checkData()) {
            let newExpense = getNewExpense();
            props.onNewExpense(newExpense);
            clearFrom();
        }
    };

    let checkData = () => {
        if (
            nameRef.current.value != "" &&
            dateRef.current.value != "" &&
            valueRef.current.value != "" &&
            descriptionRef.current.value != "" 
        ) {
            return true;
        }
        alert("Enter required data!");
        return false;
    };

    let getNewExpense = () => {
        return {
          id: Date.now(),
            name: nameRef.current.value,
            date: dateRef.current.value,
            value: valueRef.current.value,
            description: descriptionRef.current.value,
        };
    };

    let clearFrom = () => {
        nameRef.current.value = "";
        dateRef.current.value = "";
        valueRef.current.value = "";
        descriptionRef.current.value = "";
    }
    return (
        <form className="row" onSubmit={onSubmitHandler}>
        <div className="mb-3 col-md-6">
          <label className="form-label">Title</label>
          <input type="text" className="form-control addTitle" aria-describedby="" 
          ref={nameRef}
          />
        </div>

        <div className="mb-3 col-md-6">
          <label className="form-label">Date</label>
          <input type="date" className="form-control addDate" aria-describedby="" 
          ref={dateRef}
          />
        </div>


        <div className="mb-3 col-md-6">
          <label className="form-label">Value</label>
          <input type="number" className="form-control addValue" aria-describedby="" 
          ref={valueRef}
          />
        </div>
        <div className="mb-3 col-md-6">
          <label htmlFor="title" className="form-label">Description</label>
          <input type="text" className="form-control addDescrption" aria-describedby="" 
          ref={descriptionRef}
          />
        </div>
        <div className="mb-3 col-md-12 text-right">
          <button type="submit" className="btn btn-primary addBtn">Add</button>
        </div>
      </form>

    );
};

export default ExpenseForm;