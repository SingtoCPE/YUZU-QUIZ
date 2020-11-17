import axios from "axios";

const actions = {
  async getDepartment({ _, commit }) {
    const { data } = await axios({
      method: "get",
      url: "http://localhost:3001/department"
    });
    commit(
      "setDepartmentList",
      data.map(data => data)
    );
  },

  async createDepartment({ _, dispatch }, { departmentName, departmentCode }) {
    await axios({
      method: "post",
      url: "http://localhost:3001/department/create",
      data: {
        department_name: departmentName,
        department_code: departmentCode
      }
    });
    dispatch("getDepartment");
  },

  async updateDepartment(
    { _, dispatch },
    { department_id, departmentName, departmentCode }
  ) {
    await axios({
      method: "post",
      url: "http://localhost:3001/department/update",
      data: {
        department_id,
        department_name: departmentName,
        department_code: departmentCode
      }
    });
    dispatch("getDepartment");
  },

  async deleteDepartment({ _, dispatch }, department_id) {
    await axios({
      method: "post",
      url: "http://localhost:3001/department/delete",
      data: {
        department_id
      }
    });
    dispatch("getDepartment");
  }
};
export default actions;
