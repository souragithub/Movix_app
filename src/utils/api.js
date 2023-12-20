import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OWU0MGI4NWE3YWY1Zjk1NTYwOWUwYTJjYjhhOWY0YyIsInN1YiI6IjY1N2RjMTE4OGQyMmZjMDUxNTQ1OTY1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6zIWbaE7WXi73sVQGNqmSFtAI0VNi--yfqBdju88fMY";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,

};

export const fetchDataFromApi = async (url,params) => {
    try{
        const {data} = await axios.get(BASE_URL + url, {
            headers,params
        })
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
}