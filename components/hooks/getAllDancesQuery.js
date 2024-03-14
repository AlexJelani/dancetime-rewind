import { useQuery } from "react-query";
import axios from "axios";

const allDancesUrl = "https://ap-southeast-1.aws.data.mongodb-api.com/app/application-0-kzlbv/endpoint/dances";

const getAllDances = async () => {
    console.log("Fetching all dances data...");
    const response = await axios.get(allDancesUrl);
    return response.data;
};

export const UseGetAllDances = () => {
    const { data, isLoading } = useQuery("getAllDances", getAllDances);
    return { data, isLoading };
};
