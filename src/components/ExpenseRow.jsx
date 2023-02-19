import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashCan} from "@fortawesome/free-regular-svg-icons";

let ExpenseRow = (props) => {
    let onDeleteHandler = () => {
        props.onDeleteExpense(props.expense.id);
    };
    return(
        <tr>
        <td> {props.expense.name} </td>
        <td> {props.expense.date}</td>
        <td>{props.expense.value}$ </td>
        <td colSpan="2">{props.expense.description}</td>
        <td className="text-right">
            <a href="#" onClick={onDeleteHandler} className="delete" >
            <FontAwesomeIcon icon={faTrashCan} />
            </a>
            </td>
      </tr>

    );
};
export default ExpenseRow;