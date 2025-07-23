import { ThemedText, ThemedView } from "@/components";
import { useLocalSearchParams } from "expo-router";

const Service = () => {
    const { id } = useLocalSearchParams();
    return (
        <ThemedView>
            <ThemedText>{id}</ThemedText>
        </ThemedView>
    );
};

export default Service;