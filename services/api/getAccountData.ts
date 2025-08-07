import { HTTPCodes } from "@/constants";
import { User } from "@/types";

const getAccountData = async ({ url, userId }: { url: string, userId: string | number }): Promise<User> => {
    if (!userId) throw new Error("getAccountData: UserId is required");

    const cleanedURL = new URL(userId.toString(), url).toString();

    try {
        const response = await fetch(cleanedURL);

        // Resource not found is not found
        if (response.status == HTTPCodes.notFound) {
            console.log("Not found resource");
            throw new Error(`User is not found: ${response.status} ${response.statusText}`);
        }

        if (!response.ok) {
            throw new Error(`Error fetching user: ${response.status} ${response.statusText}`);
        }

        const result = await response.json() as User;
        
        return result;

    } catch (e) {
        throw new Error(`getAccountData failed: ${(e as Error).message}`);
    }
};

export default getAccountData;