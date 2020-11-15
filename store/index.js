import Vue from 'vue';
import Vuex from 'vuex';
import employee from './modules/employee';
import department from './modules/department';

Vue.use(Vuex);

const store = {
    modules: {
        employee,
        department
    } 
}

export default store;
