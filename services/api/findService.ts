import { BACKEND_URL, beResourceMapping } from "@/constants";
import { Service } from "@/types";

const findService = async ({ queryParams }: { queryParams: Record<string, any> }): Promise<Service> => {
    const queryString = Object.entries(queryParams).map(([key, value]) => {
        return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    }).join("&");

    const response = await fetch(BACKEND_URL + beResourceMapping.service + "?" + queryString);
    const result = await response.json();
    return await result[0];
};

export default findService;