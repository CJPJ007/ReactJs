import { callApi } from "../helpers/RestAPICaller";
import useFetch from "../helpers/useFetch"

export const useGetProductList = (productFilterValue) =>{
    const url = `http://localhost:4000/eBooks/${productFilterValue?'?name_like='+productFilterValue:''}`;
    return useFetch(url,"GET",null);
}

export const useFeaturedProductList = () =>{
    const url = `http://localhost:4000/eBooks/?featured=true`;
    return useFetch(url,"GET",null);
}

export const useGetProductDetails = (id) =>{
    const url = `http://localhost:4000/eBooks/?id=${id}`;
    const [,result] = useFetch(url,"GET",null);
    return result && result.length!==0 && result[0]?result[0]:{};
}

export const filterProducts = (filterType,filterInfo,setResult) =>{

    switch(filterType){
        case "SORT":
            const url = `http://localhost:4000/eBooks?_sort=${filterInfo==="L2H"?"price":"-price"}`;
            callApi(url,"GET",null,setResult);
            break;
        default:
            throw new Error("No filter type available");

    }
    
}