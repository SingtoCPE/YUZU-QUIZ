const mutations = {
    setEmployeeList(state, employeeList){
        state.employeeList = employeeList
    },
    setEmployeeItem(state, employeeItem){
        state.employeeItem = employeeItem
    }, 
    setIdEmployeeUpdate(state, idEmployeeUpdate){
        state.idEmployeeUpdate = idEmployeeUpdate
    }, 
    setIsDialogCreateEmployee(state, isDialogCreateEmployee){
        state.isDialogCreateEmployee = isDialogCreateEmployee
    },   
    setIsDialogUpdateEmployee(state, isDialogUpdateEmployee){
        state.isDialogUpdateEmployee = isDialogUpdateEmployee
    },
}

export default mutations;