import axios from "axios";

export function sendEmail(email, message) {
  return axios.post("api/v1/sendEmail", { email, message });
}

export function subscribeUser(name, email, phone) {
  return axios.post("api/v1/subscribeUser", { name, email, phone });
}
