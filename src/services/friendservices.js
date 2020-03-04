import http from "./global.variables";

const pendings = id =>
  http.get(`/friend/pendings/${id}`).then(users => users.data);

const friends = id =>
  http.get(`/friend/acepted/${id}`).then(users => users.data);

const updateFriend = (id, updated) => http.put(`/friend/update/${id}`, updated);

let friendServices = {
  pendings,
  friends,
  updateFriend
};

export default friendServices;
