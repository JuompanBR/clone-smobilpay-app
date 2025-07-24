import { Service } from "@/types";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { Pressable } from "react-native";
import ThemedText from "../ThemedText";

const ServiceComponent: React.FC<Service> = (service: Service) => {

    function formatTitle(title: string) {

        let spaced = title.replace(/([a-z0-9])([A-Z])/g, '$1 $2');

        spaced = spaced.replace(/\//g, ' / ');
        spaced = spaced.replace(/\s+/g, ' ').trim();

        return spaced;
    }

    return (
        <Link href={`/services/${service.serviceId}`} asChild>
            <Pressable android_ripple={{
                borderless: true,
                radius: 8,
                color: "red"
            }} key={service.serviceId} style={{ width: 120, height: 'auto', borderWidth: 0, borderRadius: 9, paddingVertical: 10, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Image contentFit="fill" source={service.logoUrl} alt={service.title} style={{ width: 84, height: 83, borderRadius: 8 }} />
                <ThemedText style={{ fontSize: 14, fontWeight: '600', textAlign: 'center', marginTop: 10 }}>{formatTitle(service.title)}</ThemedText>
            </Pressable>
        </Link>
    )
};

export default ServiceComponent;