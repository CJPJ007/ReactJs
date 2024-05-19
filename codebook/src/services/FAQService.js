import useFetch from "../helpers/useFetch"

export const useFQA = ()=>{
    return useFetch("http://localhost:4000/fAQs","GET",null);
}