import http from "./global.variables";

const singUp = userData =>
  http.post("/user/register", userData).then(user => user);

const login = userData => {
  return http.post("/user/login", userData).then(user => user.data);
};

const logout = () => http.post("/user/logout");

const update = (userData, id) =>
  http.put(`/user/update/${id}`, userData).then(user => user);

const getAllUsers = () => http.get(`/user`);

const getBusiness = () => http.get("/user/business").then(business => business);

const getUsers = () => http.get("/user/users").then(users => users);

let UserServices = {
  singUp,
  login,
  logout,
  update,
  getAllUsers,
  getBusiness,
  getUsers
};

export default UserServices;
