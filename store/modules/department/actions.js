import axios from "axios";

const actions = {
    async getDepartment({_,commit}){
        const {data} = await axios({
            method: 'get',
            url: 'http://localhost:3001/department',
        })
        commit('setDepartmentList', data.map(data => data))
    },

    async createDepartment({_, dispatch}, department_id){
        await axios({
            method: 'post',
            url: 'http://localhost:3001/department/create',
            data: {
                department_id,
            },
        })
        dispatch('getDepartment')
    },

    async deleteDepartment({_, dispatch}, department_id){
        await axios({
            method: 'post',
            url: 'http://localhost:3001/department/delete',
            data: {
                department_id,
            },
        })
        dispatch('getDepartment')
    }
};
export default actions;