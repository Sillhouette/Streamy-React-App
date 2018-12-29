//Start imports
import axios from "axios";

/**
 * Create an instance of axios to interact with our rails backend
 **/
export default axios.create({
  baseURL: "http://localhost:3000/api/"
});
