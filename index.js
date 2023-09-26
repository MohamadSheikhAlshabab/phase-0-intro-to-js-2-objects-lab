const employee = {
    name : "" ,
    streetAddress: ""
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    let newEmployee = {
        ...employee, 
        [key] : value
    };
    return newEmployee;
}

updateEmployeeWithKeyAndValue(employee,'streetAddress',"11 Broadway");

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee
}

destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway');

function deleteFromEmployeeByKey(employee, key){
    let newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}

deleteFromEmployeeByKey(employee, 'name');

function destructivelyDeleteFromEmployeeByKey(employee, key){
    let newEmployee = employee;
    delete newEmployee[key];
    return employee;
};

destructivelyDeleteFromEmployeeByKey(employee, 'name');