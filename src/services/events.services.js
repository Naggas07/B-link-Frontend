import http from "./global.variables";

const getEvents = () => http.get("/events/list").then(events => events.data);

const newEvent = eventProperties =>
  http.post("/events/new", eventProperties).then(event => event.data);

const userEvents = id =>
  http.get(`/events/user/${id}`).then(events => events.data);

const deleteEvent = id => http.delete(`/events/delete/${id}`);

const reserveEvent = id =>
  http.put(`/events/reserve/${id}`).then(updated => updated.data);

const unsuscribeEvent = id =>
  http.put(`/events/reserve/${id}`).then(updated => updated.data);

let eventServices = {
  getEvents,
  newEvent,
  userEvents,
  deleteEvent,
  reserveEvent,
  unsuscribeEvent
};

export default eventServices;
