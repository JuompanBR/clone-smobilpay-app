import { ThemedText, ThemedView } from "@/components";
import { useLocalSearchParams } from "expo-router";

const Service = () => {
    const { id } = useLocalSearchParams();
    
    return (
        <ThemedView style={{flex: 1, backgroundColor: "#ffff"}}>
            <ThemedText>{id}</ThemedText>
        </ThemedView>
    );
};

export default Service;