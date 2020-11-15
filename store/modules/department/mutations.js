const mutations = {
    setDepartmentList(state, departmentList){
        state.departmentList = departmentList
    },
    setDepartmentItem(state, departmentItem){
        state.departmentItem = departmentItem
    }, 
    setIdDepartmentUpdate(state, idDepartmentUpdate){
        state.idDepartmentUpdate = idDepartmentUpdate
    },
    setIsDialogCreateDepartment(state, isDialogCreateDepartment){
        state.isDialogCreateDepartment = isDialogCreateDepartment
    },   
    setIsDialogUpdateDepartment(state, isDialogUpdateDepartment){
        state.isDialogUpdateDepartment = isDialogUpdateDepartment
    },
}

export default mutations;