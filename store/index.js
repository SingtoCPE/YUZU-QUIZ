import Vue from 'vue';
import Vuex from 'vuex';
import employee from './modules/employee';

Vue.use(Vuex);

const store = {
    modules: {
        employee,
    } 
}

export default store;
