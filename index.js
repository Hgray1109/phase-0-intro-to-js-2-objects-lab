
const employee = {
    sam: "11 broadway"

};

function updateEmployeeWithKeyAndValue(employee, key, value){
    return Object.assign({}, employee, {[key]: value}); 
    
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
employee[key]= value;
return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const newEmp= Object.assign({}, employee)
    delete newEmp[key]
    return newEmp
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee 
}