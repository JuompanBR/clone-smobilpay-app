import { useAppStore } from '@/stores';
import { CategoryType } from "@/types";
import { Box } from '@react-native-material/core';
import { useRouter } from "expo-router";
import { Pressable } from "react-native";
import ThemedText from "../ThemedText";
import CategoryIconComponent from "./CategoryIconComponent";

const CategoryItem: React.FC<{ category: CategoryType }> = ({ category }) => {
    const appStore = useAppStore();
    const { push } = useRouter();

    function showCategory(id: string) {
        appStore.setCurrentCategory(category);
        push(`/category/${id}`);
    }

    return (
        <>

            <Pressable onPress={() => showCategory(category.id)} android_ripple={{
                borderless: true,
                radius: 8,
            }}>
                <Box key={category.id} style={{ width: 100, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Box style={{ padding: 20, backgroundColor: "#00a3b225", display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '100%' }}>
                        <CategoryIconComponent category={category} key={category.id} />
                    </Box>
                    <ThemedText style={{ textAlign: 'center', marginTop: 6, fontSize: 14 }}>{category.name}</ThemedText>
                </Box>
            </Pressable >
        </>
    )
};

export default CategoryItem;