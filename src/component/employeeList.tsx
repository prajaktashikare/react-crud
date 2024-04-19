import { useState } from "react";
import { iEmployee } from "./employee";
import "./employeeList.css";
import EmployeeModal from "./employeeModal";

type Props = {
    list : iEmployee[];
    onDeleteClickHnd : (data:iEmployee) => void;
    onEdit : (data:iEmployee) => void;
}

const EmployeeList = (props:Props) => {
    const {list, onDeleteClickHnd, onEdit } = props;

    const [showmodal, setShowModal ] = useState(false);

    const [dataToShow, setDataToShow] = useState(null as iEmployee | null);

    const viewEmployee = (data:iEmployee) => {
        setDataToShow(data);
        setShowModal(true);
    }

    const onCloseModal = () => setShowModal(false)

    return (
        <div>
            <article>
                <h3 className="list-header">Employee List</h3>
            </article>
            <table>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
           
         {list.map((employee) => {
             console.log(employee)
             return (
                <tr key={employee.id}>
                    <td>{`${employee.firstName} ${employee.lastName}`}</td>
                    <td>{employee.email}</td>
                    <td>
                        <div>
                            <input type="button" value="View" onClick={() => viewEmployee(employee)}/>
                            <input type="button" value="Edit" onClick={() => onEdit(employee)}/>
                            <input type="button" value="Delete" onClick={() => onDeleteClickHnd(employee)}/>
                        </div>
                    </td>
                </tr>
             )
         })}
            
            </table>
            {showmodal && dataToShow !== null && <EmployeeModal onClose={onCloseModal} data={dataToShow} />}
            
        </div>      
    )
    
}

export default EmployeeList;