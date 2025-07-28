import { Service } from "@/types";
import { Link } from "expo-router";
import { Pressable } from "react-native";
import ThemedText from "../ThemedText";
import ShimmerImage from "../ui/ShimmerImage";

const ServiceItem: React.FC<Service> = (service: Service) => {

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
                <ShimmerImage imgURL={service.logoUrl} title={service.title} />
                <ThemedText style={{ fontSize: 14, fontWeight: '600', textAlign: 'center', marginTop: 10 }}>{formatTitle(service.title)}</ThemedText>
            </Pressable>
        </Link>
    )
};

export default ServiceItem;