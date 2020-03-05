import http from "./global.variables";

const pendings = id =>
  http.get(`/friend/pendings/${id}`).then(users => users.data);

const friends = id =>
  http.get(`/friend/acepted/${id}`).then(users => users.data);

const updateFriend = (id, updated) => http.put(`/friend/update/${id}`, updated);

const newFriend = friendship =>
  http.post("/friend/new", friendship).then(friendship => friendship.data);

const searchUser = name =>
  http.get(`/friend/search/${name}`).then(users => users.data);

const newFollow = data =>
  http.post("/follow/new", data).then(follow => follow.data);

const follows = id =>
  http.get(`/follow/userFollows/${id}`).then(follows => follows.data);
let friendServices = {
  pendings,
  friends,
  updateFriend,
  newFriend,
  searchUser,
  newFollow,
  follows
};

export default friendServices;
