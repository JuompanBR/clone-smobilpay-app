import { useAppStore } from "@/stores";
import { Service } from "@/types";
import { respFont } from "@/utils/misc";
import { useRouter } from "expo-router";
import { Pressable, useWindowDimensions } from "react-native";
import ThemedText from "../ThemedText";
import ShimmerImage from "../ui/ShimmerImage";

const ServiceItem: React.FC<Service> = (service: Service) => {
    const { push } = useRouter();
    const appStore = useAppStore();
    const { fontScale } = useWindowDimensions();

    function formatTitle(title: string) {

        let spaced = title.replace(/([a-z0-9])([A-Z])/g, '$1 $2');

        spaced = spaced.replace(/\//g, ' / ');
        spaced = spaced.replace(/\s+/g, ' ').trim();

        return spaced;
    }

    function openService({ id }: { id: number }) {
        appStore.setCurrentService(service);
        push(`/services/${id}`);
    }

    return (
        <Pressable onPress={() => openService({ id: service.serviceId })} android_ripple={{
            borderless: true,
            radius: 8,
        }} key={service.serviceId} style={{ width: 100, height: 'auto', borderWidth: 0, borderRadius: 9, paddingVertical: 10, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
            <ShimmerImage imgURL={service.logoUrl} title={service.title} />
            <ThemedText style={{lineHeight: 19, fontSize: respFont(13.5, fontScale), fontWeight: '600', textAlign: 'center', marginTop: 10 }}>{formatTitle(service.title)}</ThemedText>
        </Pressable>
    )
};

export default ServiceItem;