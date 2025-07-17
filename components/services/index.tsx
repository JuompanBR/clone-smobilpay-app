import { ThemedText } from "@/components";
import { Service } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { ScrollView, View } from "react-native";

function Services() {
    const { isPending, error, data, isFetching } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const response = await fetch(
                'http://localhost:3000/services',
            );
            const result = await response.json();
            console.log(result);
            return result;
        },
    })

    if (isPending) return <ThemedText>Loading...</ThemedText>

    if (error) return <ThemedText>{'An error has occurred: ' + error.message}</ThemedText>

    return (
        <>
            <ScrollView horizontal style={{ flexDirection: 'row', flexWrap: 'nowrap', width: '100%' }} showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 10, padding: 10 }}>
                {data.map((service: Service) => (
                    <View key={crypto.randomUUID()} style={{ gap: 8, minWidth: 100, height: 100, borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 8 }}>
                        <ThemedText style={{ fontSize: 16, fontWeight: 'bold' }}>{service.name}</ThemedText>
                        {/* <img src={service.image_url} alt={service.name} style={{ width: '100%', height: 100, borderRadius: 8 }} /> */}
                    </View>
                ))}
            </ScrollView>
        </>
    )
};

export default Services;