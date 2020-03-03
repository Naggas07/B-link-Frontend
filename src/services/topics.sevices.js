import http from "./global.variables";

const getTopics = () => http.get("topics/list").then(topics => topics.data);

const newTopic = topic => http.post("/topics/new", topic).then(topic => topic);

const updateTopic = (id, topic) =>
  http.put(`/topics/update/${id}`, topic).then(topic => topic);

const activeTopics = () =>
  http.get("/topics/active").then(topics => topics.data);
export default {
  getTopics,
  newTopic,
  updateTopic,
  activeTopics
};
