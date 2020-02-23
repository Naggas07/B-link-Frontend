import http from "./global.variables";

const getTopics = () => http.get("topics/list").then(topics => topics.data);

export default {
  getTopics
};
