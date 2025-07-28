import { BACKEND_URL, beResourceMapping } from "@/constants";
import { Service } from "@/types";

const getAllServices = async (): Promise<Service[]> => {
    const response = await fetch(BACKEND_URL + beResourceMapping.service);
    return await response.json();
};

export default getAllServices;