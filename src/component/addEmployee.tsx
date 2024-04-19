import { useState } from "react"
import { iEmployee } from "./employee";
import "./employeeForm.css"

type Props = {
    onBackButtonClick : () => void;
    onSubmitClickHnd : (data:iEmployee) => void;
}

const AddEmployee = (props:Props) =>{

    const [firstName, setFirstName] = useState("")
    const [lastName, setLasttName] = useState("")
    const [email, setEmail] = useState("")

    const {onBackButtonClick, onSubmitClickHnd} = props;

    const onFirstNameChanged = (e:any) => {
        setFirstName(e.target.value)
    }

    const onLastNameChanged = (e:any) => {
        setLasttName(e.target.value)
    }

    const onEmailChanged = (e:any) => {
        setEmail(e.target.value)
    }

    const onSubmitBtnClickHnd = (e:any) => {
        e.preventDefault();
        const data:iEmployee = {
            id: new Date().toJSON().toString(),
            firstName : firstName,
            lastName : lastName,
            email: email
        }

        onSubmitClickHnd(data);
        onBackButtonClick()
    }
    return (
        <>
        <div className="form-container">
            <div>
                <h3>Add Employee Form</h3>
            </div>
            <form onSubmit={onSubmitBtnClickHnd}>
                <div>
                    <label>First Name : </label>
                    <input type="text" value={firstName} onChange={onFirstNameChanged}/>
                </div>
                <div>
                    <label>Last Name : </label>
                    <input type="text" value={lastName} onChange={onLastNameChanged} />
                </div>
                <div>
                    <label className="label">Email : </label>
                    <input type="text" value={email} onChange={onEmailChanged}/>
                </div>
                <div>
                    <input type="button" value="Back" onClick={onBackButtonClick}/>
                    <input type="submit" value="Add Employee"/>
                </div>
            </form>
        </div>
        </>
    )
}

export default AddEmployee;