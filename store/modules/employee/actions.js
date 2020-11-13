import axios from "axios";

const actions = {
    async getEmployee({_,commit}){
        const {data} = await axios({
            method: 'get',
            url: 'http://localhost:3001/employee',
        })
        commit('setEmployeeList', data.map(data => data))
    }
};
export default actions;