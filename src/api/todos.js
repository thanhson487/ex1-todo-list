import { url } from "../constants/api";
import randomID from "./../common/index";
import axiosClient from "./axiosClient";
const API_ENDPOIN = "Todos";
export const getList = () => {
  return axiosClient.get(`${url}/${API_ENDPOIN}`);
};

export const getDeleteTodoItem = (id) => {
  return axiosClient.delete(`${url}/${API_ENDPOIN}/${id}`);
};

export const addDataTodos = (data = {}) => {
  const id = randomID();
  const dataAdd = {
    ...data,
    id,
  };
  return axiosClient.post(`${url}/${API_ENDPOIN}`, dataAdd);
};

export const updateTodoItem = (data = {}) => {
  return axiosClient.put(`${url}/${API_ENDPOIN}/${data.id}`, data);
};

export const getFillterTodo = (params = "") => {
  return axiosClient.get(`${url}/${API_ENDPOIN}/?q=${params}`);
};
