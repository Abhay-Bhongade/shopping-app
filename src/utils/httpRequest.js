import axios from "axios";
import store from '../redux/store';

 const httpRequest = axios.create({
  baseURL: "http://d0ed-2405-201-300b-e015-a1eb-4ea6-e629-723f.ngrok.io/api",
});
httpRequest.interceptors.request.use((config) => {
  const appState = store.getState();
  const accessToken = appState?.auth?.token;
  config.headers["Accept"] = "application/json";
  if (accessToken) {
    config.headers["Authorization"] = "Bearer" + accessToken;
  }
  return config;
})
export default httpRequest;