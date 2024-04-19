import { useEffect, useState } from "react";
import AddEmployee from "./addEmployee";
import EditEmployee from "./editEmployee";
import { iEmployee, PageEnum } from "./employee";
import EmployeeList from "./employeeList";
import "./home.css";

const Home = () => {

    const [employeeList, setEmployeeList] = useState([] as iEmployee[]);
    const [shownPage, setShownPage] = useState(PageEnum.list)
    const [dataToEdit, setDataToEdit] = useState({} as iEmployee)

    useEffect(() => {
        const listInString = window.localStorage.getItem("EmployeeList");
        if(listInString){
            _setEmployeeList(JSON.parse(listInString));
        }
    },[]);

    const onAddEmployeeClick = () => {
        setShownPage(PageEnum.add)
    }

    const showListPage = () => {
        setShownPage(PageEnum.list)
    }

    const _setEmployeeList = (list:iEmployee[]) => {
        setEmployeeList(list);
        window.localStorage.setItem("EmployeeList",JSON.stringify(list))
    }

    const addEmployee = (data:iEmployee) => {
        _setEmployeeList([...employeeList, data])
    }

    const deleteEmployee = (data:iEmployee) => {
        const indexToDelete = employeeList.indexOf(data);
        const tempList = [...employeeList]
        tempList.splice(indexToDelete, 1);
        _setEmployeeList(tempList)
    }

    const editEmployee = (data:iEmployee) => {
        setShownPage(PageEnum.edit);
        setDataToEdit(data)
    }

    const updateData = (data:iEmployee) => {
        const filterdData = employeeList.filter(x => x.id === data.id)[0];
        const indexOfRecod = employeeList.indexOf(filterdData);
        const tempData = [...employeeList]
        tempData[indexOfRecod] = data;
        _setEmployeeList(tempData)
    }

    return (
        <>
        <article className="article-header">
            <header>
                <h2>React : Simple CRUD Application</h2>
            </header>
        </article>

        <section className="section-content">
            {shownPage === PageEnum.list && (
            <>
                <input type="button" value="Add Employee" className="add-employee-btn" onClick={onAddEmployeeClick} />
                <EmployeeList list = {employeeList} onDeleteClickHnd ={deleteEmployee} onEdit={editEmployee}/>
            </>)}

            {shownPage === PageEnum.add && <AddEmployee onBackButtonClick={showListPage} onSubmitClickHnd={addEmployee}/>}

            {shownPage === PageEnum.edit && <EditEmployee data={dataToEdit} onBackButtonClick={showListPage} onupdateClickHnd={updateData} />}
      
        </section>
    </> 
    );
   
};

export default Home;