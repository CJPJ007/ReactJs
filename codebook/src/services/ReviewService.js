import useFetch from "../helpers/useFetch"

export const useFetchReviews = () => {
    return useFetch("http://localhost:4000/reviews","GET",null);
}