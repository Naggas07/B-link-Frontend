import http from "./global.variables";

const singUp = userData =>
  http.post("/user/register", userData).then(user => user);

const login = userData => http.post("/user/login", userData).then(user => user);

const logout = () => http.post("/user/logout").then(notUser => notUser);

const update = (userData, id) =>
  http.put(`/user/update/${id}`, userData).then(user => user);

const getAllUsers = () => http.get(`/user`).then(users => users);

const getBusiness = () => http.get("/user/business").then(business => business);

const getUsers = () => http.get("/user/users").then(users => users);

module.exports = {
  singUp,
  login,
  logout,
  update,
  getAllUsers,
  getBusiness,
  getUsers
};
