import axios from "axios";
const SERVER_URL = 'http://localhost:8080';

const API = {
  getEmployees: (params) => {
    return axios.post(`${SERVER_URL}/employees/`, params);
  },
  addEmployee: (data) => {
    let obj = {
      name: data.name ? data.name : '',
      lastName: data.lastName ? data.lastName : '',
      dob: data.dob ? data.dob : '',
      role: data.role ? data.role : '',
      department: data.department ? data.department : '',
      email: data.email ? data.email : ''
    };

    return axios.post(`${SERVER_URL}/employees/add`, JSON.stringify(obj), {
      headers: {
        'content-type': 'application/json'
      }
    })
  },
  updateEmployee: (data) => {
    return axios.put(`${SERVER_URL}/employees/update/${data.id}`, JSON.stringify(data), {
      headers: {
        'content-type': 'application/json'
      }
    })
  },
  deleteEmployee: (id) => {
    return axios.get(`${SERVER_URL}/employees/delete/${id}`);
  },
  searchEmployee: (query) => {
    return axios.post(`${SERVER_URL}/employees/search`, { query });
  }
};

export default API;