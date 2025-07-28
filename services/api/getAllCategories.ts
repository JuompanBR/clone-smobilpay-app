import { BACKEND_URL, beResourceMapping } from "@/constants";
import { CategoryType } from "@/types";

const getAllCategories = async (): Promise<CategoryType[]> => {
    const response = await fetch(BACKEND_URL + beResourceMapping.category);
    return await response.json();
};

export default getAllCategories;