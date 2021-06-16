import axios from "axios";

export default class JobAdtsService {
  getJobAdts() {
    return axios.get(
      "http://localhost:8080/api/jobadverts/findAllByOrderByPublishedAt"
    );
  }
}
