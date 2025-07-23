import { ThemedText } from "@/components";
import { useAppStore } from "@/stores";
import { Service } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { ScrollView } from "react-native";
import ServiceComponent from "./ServiceComponent";

function Services() {

    const appStore = useAppStore();

    function formatTitle(title: string) {

        let spaced = title.replace(/([a-z0-9])([A-Z])/g, '$1 $2');

        spaced = spaced.replace(/\//g, ' / ');
        spaced = spaced.replace(/\s+/g, ' ').trim();

        return spaced;
    }

    const { isPending, error, data, isFetching } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {

            const response = await fetch(
                'http://localhost:3000/services',
            );

            const result = await response.json();

            // store in the appStore
            appStore.setServiceList(result);
            return result?.slice(0, 9);
        },
    })

    if (isPending) return <ThemedText>Loading...</ThemedText>

    if (error) return <ThemedText>{'An error has occurred: ' + error.message}</ThemedText>

    return (
        <>
            <ScrollView horizontal style={{ flexDirection: 'row', flexWrap: 'nowrap', width: '100%' }} showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 5, paddingVertical: 10 }}>
                {data.map((service: Service) => (
                    <ServiceComponent 
                    key={service.serviceId} 
                    currency={service.currency} 
                    description={service.description} 
                    isCustomerPayingFee={service.isCustomerPayingFee}
                    logoUrl={service.logoUrl}
                    serviceId={service.serviceId}
                    title={service.title}
                    />
                ))}
            </ScrollView>
        </>
    )
};

export default Services;