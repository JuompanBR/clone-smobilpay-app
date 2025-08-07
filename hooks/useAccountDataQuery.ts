import { getAccountData } from "@/services";
import { useQuery } from "@tanstack/react-query";

const useAccountDataQuery = ({ url, userId }: { url: string, userId: number }) => {

    return useQuery({
        queryKey: ['accountData' + userId],
        queryFn: () => getAccountData({ url, userId }),
        enabled: !!userId
    });
};

export default useAccountDataQuery;