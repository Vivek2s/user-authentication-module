import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000"; // Your API base URL
axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("authToken")}`; // Use token for authenticated requests

export default axios;
