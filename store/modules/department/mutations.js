const mutations = {
    setDepartmentList(state, departmentList){
        state.departmentList = departmentList
    },
    setIsDialogCreateDepartment(state, isDialogCreateDepartment){
        state.isDialogCreateDepartment = isDialogCreateDepartment
    },   
    setIsDialogUpdateDepartment(state, isDialogUpdateDepartment){
        state.isDialogUpdateDepartment = isDialogUpdateDepartment
    },
    setIsDialogAlert(state, isDialogAlert){
        state.isDialogAlert = isDialogAlert
    }
}

export default mutations;