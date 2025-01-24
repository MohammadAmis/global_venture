import axios from "axios";

export const fetchData = async (limit = null) => {
    try {
        const url = limit 
            ? `/api/users/fetch-products?limit=${limit}` 
            : `/api/users/fetch-products`;

        const response = await axios.get(url);
        return response.data; // Return fetched data
    } catch (error) {
        console.error("Error fetching data:", error);
        return null; // Return null on error
    }
};
