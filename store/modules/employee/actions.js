import axios from "axios";

const actions = {
    async getEmployee({_,commit}){
        const {data} = await axios({
            method: 'get',
            url: 'http://localhost:3001/employee',
        })
        commit('setEmployeeList', data.map(data => data))
    },

    async createEmployee({_,dispatch}, {employeeName, email, address, phone, department}){
        await axios({
            method: 'post',
            url: 'http://localhost:3001/employee/create',
            data: {
                employee_name: employeeName, 
                email, 
                address, 
                phone, 
                department_code: department
            },
        })
        dispatch('getEmployee')
    },

    async updateEmployee({_,dispatch}, {employee_id, employeeName, email, address, phone, department}){
        await axios({
            method: 'post',
            url: 'http://localhost:3001/employee/update',
            data: {
                employee_id,
                employee_name: employeeName, 
                email, 
                address, 
                phone, 
                department_code: department
            },
        })
        dispatch('getEmployee')
    },

    async deleteEmployee({_, dispatch}, employee_id){
        await axios({
            method: 'post',
            url: 'http://localhost:3001/employee/delete',
            data: {
                employee_id,
            },
        })
        dispatch('getEmployee')
    }
};
export default actions;