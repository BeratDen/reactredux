import { post, get, postJSON } from "./request";

export const getUser = () => get("users");
export const getuserDetail = (id) => get(`users/${id}`);
export const newUser = (data) => post("users", data);
export const newUserJson = (data) => postJSON("users", data);
