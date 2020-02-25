import http from "./global.variables";

const newPosition = position =>
  http.post(`/location/new`, position).then(location => location.data);

let positionServices = {
  newPosition
};

export default positionServices;
