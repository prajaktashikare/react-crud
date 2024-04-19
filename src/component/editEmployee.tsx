import { iEmployee } from "./employee";
import { useState } from "react"
import "./employeeForm.css"

type Props = {
    data :iEmployee;
    onBackButtonClick : () => void;
    onupdateClickHnd : (data:iEmployee) => void;
}


const EditEmployee = (props:Props) => {
    const {data, onBackButtonClick, onupdateClickHnd} = props

    const [firstName, setFirstName] = useState(data.firstName)
    const [lastName, setLasttName] = useState(data.lastName)
    const [email, setEmail] = useState(data.email)

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
        const updatedData:iEmployee = {
            id: data.id,
            firstName : firstName,
            lastName : lastName,
            email: email
        }

        onupdateClickHnd(updatedData);
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
                    <input type="submit" value="Update Employee"/>
                </div>
            </form>
        </div>
        </>
    )
}

export default EditEmployee;