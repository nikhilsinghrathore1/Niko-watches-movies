import axios from "axios";

const instance = axios.create({
               baseURL:"https://api.themoviedb.org/3",
               headers: {
                              accept: 'application/json',
                              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YjVmZjQ4ODcxY2M4OTViOWEwNzE0MzA1MzAzMjVkNSIsInN1YiI6IjY2NjFmODIwMDUyOWQ3MGYxYjIwNzg0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qqj3TqwOtvuZlktNt9hODybs9_BWMkoORVMAQg0Uz6I'
               }
}) 

export default instance;