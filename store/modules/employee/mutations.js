const mutations = {
    setEmployeeList(state, employeeList){
        state.employeeList = employeeList
        console.log(state.employeeList);
    }
}

export default mutations;