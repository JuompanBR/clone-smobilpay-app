import { findService } from "@/services";
import { useQuery } from "@tanstack/react-query";

const useFindService = ({ queryParams, id }: { queryParams: Record<string, any>, id: string }) => useQuery({
    queryKey: ['service' + id],
    queryFn: async () => await findService({ queryParams })
});

export default useFindService;