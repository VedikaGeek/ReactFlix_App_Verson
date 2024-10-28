import axios from "axios";
const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGYxMGI4ZTYwNjc3ODk2YzlkN2QyNWVkMmU5ZmQ3MSIsIm5iZiI6MTcyOTk1NjE0My4yODMxNTcsInN1YiI6IjY3MGEyMTE2M2JiNDU1N2M2NjlhZjdhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xYBOE2N11xMdKwQdWhr34r0RsKKp85NrXoX0zi0ayts'
      }
});
export default instance;