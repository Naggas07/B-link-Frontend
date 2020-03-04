import http from "./global.variables";

const getEvents = () => http.get("/events/list").then(events => events.data);

const newEvent = eventProperties =>
  http.post("/events/new", eventProperties).then(event => event.data);

const userEvents = id =>
  http.get(`/events/user/${id}`).then(events => events.data);

const deleteEvent = id => http.delete(`/events/delete/${id}`);

const reserveEvent = (id, user) => {
  console.info("user", user);
  http.put(`/events/reserve/${id}`, user).then(updated => updated.data);
};

const unsuscribeEvent = id =>
  http.put(`/events/reserve/${id}`).then(updated => updated.data);

const eventDetail = id => http.get(`/events/${id}`).then(event => event.data);

const eventByPosition = parameters =>
  http.post("/events/locations", parameters).then(events => events.data);

const getComments = id =>
  http.get(`/comments/${id}`).then(comments => comments.data);

const createComment = data => {
  console.info("data => ", data);
  http.post(`/comments/new`, data).then(comment => comment.data);
};

let eventServices = {
  getEvents,
  newEvent,
  userEvents,
  deleteEvent,
  reserveEvent,
  unsuscribeEvent,
  eventDetail,
  eventByPosition,
  getComments,
  createComment
};

export default eventServices;
