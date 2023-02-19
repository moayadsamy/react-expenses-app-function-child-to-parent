import ExpenseRow from './ExpenseRow';
export default function ExpensesTable (props) {
    return (
        <div className="row mt-5 mb-5">
        <div className="custom-card ">
          <table className="table ">
            <thead>
              <tr>
                <th> Title</th>
                <th> Date</th>
                <th>value</th>
                <th>Description</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {props.expenses.map((element) => (
                <ExpenseRow key={element.id} expense={element} onDeleteExpense={props.onDeleteExpense}/>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    
    );
};