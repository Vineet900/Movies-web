// import axios from "axios";

// const instance = axios.create({
//   baseURL: "https://api.themoviedb.org/3",
//   headers: { accept: "application/json", Authorization: "Bearer header" },
// });

// export default instance
// const instance = axios.create({
//     baseURL: "https://api.themoviedb.org/3/"
//     headers: {
//     accept: "application/json",
//     Authorization:
//     "Bearer eyJhbgcioiJIUzIiNiJ9.
//     eyJhdWQi0iIyMjM2NjdkMTIz0Tg3MWZjNGI2ZWVlZjhkMGQ2ZGVm0CIsInN1YiI6ijVxZmQyNWFjZWVlMT
//     92MDA5MTFk0TZjNCIsInNjb3BlcyI6WyJhcGifcmVhZCJdLCJ2ZXJZaW9uIjoxfQ.
//     uPjuX67gkt1PrFCTY6ZuR7Xm5bZESAcyqvSu8swmOLI",
// },
// });

import axios from 'axios'

const intence = axios.create({
    baseURL : 'https://api.themoviedb.org/3/',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyN2QwZGRmNzc1N2QyZjVjMzcxYTBhMGJkZTZhZTc5ZiIsIm5iZiI6MTcxNjU3ODk3NC45MzYsInN1YiI6IjY2NTBlYTllZjZiYmIzYzA0YjczMDE5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BNG5qG7DFouAh0QROWxRTFgrBvT5TljZm4gcxm3hyJM'
      } 
})

export default intence;