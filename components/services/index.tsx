import { ThemedText } from "@/components";
import { Service } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { Image } from "expo-image";
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
            <ScrollView horizontal style={{ flexDirection: 'row', flexWrap: 'nowrap', width: '100%' }} showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 10, paddingVertical: 10 }}>
                {data.map((service: Service) => (
                    <View key={service.id} style={{gap: 6, width: 110, height: 'auto', borderWidth: 0, borderRadius: 9, padding: 10, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Image contentFit="fill" source={service.image_url} alt={service.name} style={{ width: 90, height: 90, borderRadius: 8 }} />
                        <ThemedText style={{ fontSize: 15, fontWeight: '600', textAlign: 'center' }}>{service.name}</ThemedText>
                    </View>
                ))}
            </ScrollView>
        </>
    )
};

export default Services;