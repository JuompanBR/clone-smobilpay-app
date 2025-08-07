import { getAccountData } from "@/services";
import { useAppStore } from "@/stores";
import { useQuery } from "@tanstack/react-query";

const useAccountDataQuery = ({ url, userId }: { url: string, userId: string | number }) => {

    const appStore = useAppStore();

    return useQuery({
        queryKey: ['accountData' + userId],
        queryFn: () => getAccountData({ url, userId }),
        enabled: !!userId
    });
};

export default useAccountDataQuery;